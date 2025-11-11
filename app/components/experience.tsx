/*
A reusable Work Experience Card component for displaying job roles with title, company, period, and description.


*/
"use client";

import React from "react";

interface WorkExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[]; // now an array of bullet points
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  company,
  period,
  description,
}) => {
  const cardContent = (
    <div
      className="block flex-1 p-6 bg-white border border-gray-200 rounded-lg 
       dark:bg-gray-900 dark:border-gray-800"
    >
      <h5 className="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <h6 className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {company} • {period}
      </h6>

      <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return cardContent;
};

export default WorkExperienceCard;
