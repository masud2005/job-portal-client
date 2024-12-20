import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import JobDetails from '../pages/JobDetails/JobDetails';
import PrivateRoute from './PrivateRoute';
import JobApply from '../pages/JobApply/JobApply';
import MyApplication from '../pages/MyApplication/MyApplication';
import AddJob from '../pages/AddJob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import ViewApplications from '../pages/ViewApplications/ViewApplications';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/jobs/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-one-ashen.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute><JobApply /></PrivateRoute>
            },
            {
                path: '/my-application',
                element: <PrivateRoute><MyApplication /></PrivateRoute>
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/view-applications/:job_id',
                element: <PrivateRoute><ViewApplications /></PrivateRoute>,
                loader: ({params}) => fetch(`https://job-portal-server-one-ashen.vercel.app/job-applications/jobs/${params.job_id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;