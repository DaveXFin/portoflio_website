"use client";

import React from "react";

interface WelcomeCardProps {
  title: string;
  description: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, description }) => {
  return (
    <div
      className="welcome-card block p-8 rounded-lg shadow-md
       hover:shadow-lg transition-all duration-300 mb-8"
    >
      <h2 className="welcome-card-title text-3xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="welcome-card-text text-lg leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default WelcomeCard;
