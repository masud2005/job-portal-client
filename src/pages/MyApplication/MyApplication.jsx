import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { FaDollarSign } from 'react-icons/fa';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplication = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        // fetch(`https://job-portal-server-one-ashen.vercel.app/job-applications?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        // axios.get(`https://job-portal-server-one-ashen.vercel.app/job-applications?email=${user?.email}`, {withCredentials: true})
        // .then(res => setJobs(res.data))

        axiosSecure.get(`/job-applications?email=${user?.email}`)
        .then(res => setJobs(res.data));

    }, [])

    return (
        <div className='container mx-auto'>

            <h1 className='text-center text-xl font-semibold my-10'>Total Job Apply({jobs.length})</h1>

            <div className="overflow-x-auto">
                <table className="table mb-10">
                    {/* head */}
                    <thead>
                        <tr className='text-base'>
                            <th>SL</th>
                            <th>Company</th>
                            <th>Job Name</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, idx) =>
                                <tr key={job._id}>
                                    <th>
                                       {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.company}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className='text-base'>{job.title}</span>
                                    </td>
                                    <td className='flex gap-1 items-center'><FaDollarSign className="text-blue-500" />
                                     {job.salaryRange.currency} {job.salaryRange.min} - {job.salaryRange.max}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">X</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplication;