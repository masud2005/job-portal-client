import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Lottie from 'lottie-react';
import LoginLottieData from '../../assets/login.json';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // password validation: 
        // show password validation error
        signInUser(email, password)
            .then(result => {
                // console.log(result.user);
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire(error.message)
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left w-96">
                <Lottie animationData={registerLottieData}></Lottie>
            </div> */}
            <div className='w-1/2'>
                <Lottie animationData={LoginLottieData}></Lottie>
            </div>
                <div className="card bg-base-100 border w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="p-5 mt-4 text-5xl font-bold">Login now! </h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>
    );
};

export default Login;