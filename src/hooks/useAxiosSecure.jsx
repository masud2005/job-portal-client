import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-one-ashen.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {

            // console.log("Api response error status: ", error.status);
            if(error.status === 401 || error.status === 403){
                signOutUser()
                .then(() => {
                    navigate('/login');
                })
                .catch(error => {
                    Swal.fire(error);
                })
            }

            return Promise.reject(error);
        })
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;