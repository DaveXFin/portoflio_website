"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  children,
  isLast = false,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="timeline-item relative flex gap-6 pb-12 mb-8"
    >
      {/* Timeline Line and Dot */}
      <div className="timeline-connector flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="timeline-dot w-4 h-4 rounded-full z-10"
        />

        {/* Vertical Line - Extended length */}
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% + 6rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            className="timeline-line w-0.5 flex-1 mt-2"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        {children}
      </div>
    </motion.div>
  );
};

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="timeline-container">
      {children}
    </div>
  );
};
