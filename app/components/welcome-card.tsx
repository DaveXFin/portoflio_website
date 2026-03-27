"use client";

import React from "react";
import { motion } from "framer-motion";

interface WelcomeCardProps {
  title: string;
  description: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="welcome-card block p-8 rounded-lg shadow-md
       hover:shadow-lg transition-all duration-300 mb-8"
    >
      <h2 className="welcome-card-title text-3xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <p className="welcome-card-text text-lg leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default WelcomeCard;
