import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`https://job-portal-server-one-ashen.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    // console.log(jobs);

    return (
        <div className='container mx-auto my-10'>
            <h2 className='text-3xl text-center font-semibold mb-10'>My Posted Jobs: {jobs.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.applicationDeadline}</td>
                                <td>{job.applicationCount}</td>
                                <td>
                                    <Link to={`/view-applications/${job._id}`}>
                                        <button className='btn btn-link'>View Applications</button>
                                    </Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;