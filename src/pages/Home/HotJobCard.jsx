import React from 'react';
import { FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
  const { _id, title, company, company_logo, requirements, description, location, salaryRange } = job;

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="flex items-center gap-4 p-4 border-b">
        <figure>
          <img
            className="w-16 h-16 object-cover rounded-full"
            src={company_logo}
            alt={`${company} logo`}
          />
        </figure>
        <div>
          <h4 className="text-lg font-bold text-gray-800">{company}</h4>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-500" /> {location}
          </p>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
          {title}
          <span className="badge bg-green-500 text-white text-xs py-1 px-2 rounded">NEW</span>
        </h2>

        <p className="text-sm text-gray-600 my-3">{description}</p>

        <div className="flex gap-2 flex-wrap mb-4">
          {requirements.map((skill, index) => (
            <span
              key={index}
              className="text-xs border border-gray-300 rounded-full py-1 px-3 bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-medium flex items-center gap-1">
            <FaDollarSign className="text-blue-500" />
            {salaryRange.currency} {salaryRange.min} - {salaryRange.max}
          </p>

          <Link to={`/jobs/${_id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded transition">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
