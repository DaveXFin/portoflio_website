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
      className="experience-card block flex-1 p-6 rounded-lg shadow-md
       hover:shadow-lg transition-all duration-300"
    >
      <h5 className="experience-card-title mb-1 text-xl font-semibold tracking-tight">
        {title}
      </h5>
      <h6 className="experience-card-subtitle text-sm mb-3 font-medium">
        {company} • {period}
      </h6>

      <ul className="experience-card-text list-disc pl-5 space-y-1">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return cardContent;
};

export default WorkExperienceCard;
