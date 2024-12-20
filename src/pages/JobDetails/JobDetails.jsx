import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobData = useLoaderData();

    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        hr_email,
        hr_name,
        company_logo,
    } = jobData;

    return (
        <div className="my-10 container mx-auto p-6 border shadow-lg rounded-lg bg-white">
            <div className="flex items-center mb-6">
                <img src={company_logo} alt={company} className="w-16 h-16 mr-4" />
                <h1 className="text-4xl font-bold">{title}</h1>
            </div>
            <p className="text-xl mb-4 text-gray-600">{description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Job Details</h3>
                    <ul className="list-disc list-inside">
                        <li><strong>Location:</strong> {location}</li>
                        <li><strong>Job Type:</strong> {jobType}</li>
                        <li><strong>Category:</strong> {category}</li>
                        <li><strong>Application Deadline:</strong> {applicationDeadline}</li>
                        <li><strong>Salary Range:</strong> {salaryRange?.min || 'N/A'} - {salaryRange?.max || 'N/A'}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
                    <ul className="list-disc list-inside">
                        <li><strong>Company:</strong> {company}</li>
                        <li><strong>HR Name:</strong> {hr_name}</li>
                        <li><strong>HR Email:</strong> {hr_email}</li>
                    </ul>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc list-inside">
                    {responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-2">Requirements</h3>
                <ul className="list-disc list-inside">
                    {requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-10 flex justify-center">
                <Link to={`/jobApply/${_id}`}>
                    <button className="btn btn-primary">Apply Now</button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;
