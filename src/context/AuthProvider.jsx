import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from "axios";

// export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign Out
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log(currentUser);
            // console.log(currentUser?.email);
            if (currentUser?.email) {
                const user = { email: currentUser.email }
                axios.post('https://job-portal-server-one-ashen.vercel.app/jwt', user, {withCredentials: true})
                .then(res => {
                    // console.log("Login Token", res.data)
                    setLoading(false);
                })
            }
            else{
                axios.post('https://job-portal-server-one-ashen.vercel.app/logout', {}, {withCredentials: true})
                .then(res => {
                    // console.log("Logout Token", res.data);
                    setLoading(false);
                })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        signOutUser,
        user,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;