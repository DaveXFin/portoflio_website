/*
A reusable Work Experience Card component for displaying job roles with title, company, period, and description.
*/
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Box, Heading, Text, VStack, Stack } from "@chakra-ui/react";

interface WorkExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  details?: string;
}

const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  details = "Additional details about this role and key achievements.",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 20,
        scale: isInView ? 1 : 0.97,
      }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="experience-card rounded-xl mb-4 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <Box p={8}>
        <VStack align="start" gap={4}>
          {/* Header */}
          <Box w="full">
            <Heading as="h5" size="lg" className="experience-card-title" mb={1}>
              {title}
            </Heading>
            <Text fontSize="sm" className="experience-card-subtitle" fontWeight="medium">
              {company} • {period}
            </Text>
          </Box>

          {/* Bullet points */}
          <Stack gap={2} w="full">
            {description.map((item, i) => (
              <Text
                key={i}
                fontSize="sm"
                className="experience-card-text"
                pl={4}
                position="relative"
                _before={{ content: '"•"', position: "absolute", left: 0 }}
              >
                {item}
              </Text>
            ))}
          </Stack>
        </VStack>

        {/* Expandable details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <Box
                className="experience-card-details"
                mt={4}
                pt={4}
                borderTop="1px solid"
              >
                <Text fontSize="sm" className="experience-card-back-text" lineHeight="tall">
                  {details}
                </Text>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Learn more — pinned to bottom of card */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          mt={4}
          pt={3}
          className="experience-card-details"
          borderTop="1px solid"
        >
          <Text fontSize="xs" className="experience-card-subtitle" fontStyle="italic">
            {isExpanded ? "Show less" : "Learn more"}
          </Text>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="experience-card-subtitle"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default WorkExperienceCard;
