import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

    const { user } = useAuth();
    const { id } = useParams();
    // console.log(id);

    const submitJobApplication = (e) => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }
        // console.log(jobApplication);
        fetch('https://job-portal-server-one-ashen.vercel.app/job-applications', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Application Submitted!",
                        text: "Your job application has been successfully submitted. Best of luck!",
                        icon: "success",
                        confirmButtonText: "Great!"
                    });
                }
            })
    }

    return (
        <div className="card bg-base-100 w-full shadow-2xl container mx-auto my-10">
            <h1 className="text-5xl font-bold text-center">Apply Job and Good Luck!</h1>
            <form onSubmit={submitJobApplication} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">LinkedIn URL</span>
                    </label>
                    <input type="url" name="linkedIn" placeholder="LinkedIn URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Github URL</span>
                    </label>
                    <input type="url" name='github' placeholder="Github URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Resume URL</span>
                    </label>
                    <input type="url" name='resume' placeholder="Resume URL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Apply</button>
                </div>
            </form>
        </div>
    );
};

export default JobApply;