"use client";

import React from "react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="timeline-item relative flex gap-6 pb-8"
    >
      {/* Dot — centered on the continuous line */}
      <div className="flex flex-col items-center shrink-0 w-4 pt-1">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.12 + 0.15 }}
          className="timeline-dot w-4 h-4 rounded-full z-10"
        />
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
    <div className="timeline-container relative">
      {/* Single continuous line behind all dots */}
      <div
        className="timeline-line absolute w-0.5"
        style={{ left: "8px", top: "6px", bottom: "6px" }}
      />
      {children}
    </div>
  );
};
