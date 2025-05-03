import React from "react";

const OpportunityCard = ({ opp }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md hover:ring-2 hover:ring-blue-300 transition bg-white">
      <h2 className="text-xl font-semibold text-blue-700 truncate">{opp.title}</h2>

      <p className="text-gray-600 mb-2">
        <span className="font-medium">School:</span> {opp.school}
      </p>

      <p className="text-gray-600 mb-2">
        <span className="font-medium">Type:</span> {opp.type}
      </p>

      <p className="text-gray-600 mb-2">
        <span className="font-medium">Posted by:</span> {opp.postedBy}
      </p>

      <a
        href={opp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Apply Now →
      </a>

    </div>
  );
};

export default OpportunityCard;
