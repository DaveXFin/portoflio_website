/*
A reusable Work Experience Card component for displaying job roles with title, company, period, and description.
*/
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Heading, Text, Button, VStack, Stack } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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

  const MotionBox = motion.create(Box);

  return (
    <MotionBox
      ref={ref}
      initial={{ scale: 0.95, opacity: 1, y: 30 }}
      animate={{
        scale: isInView ? 1 : 1,
        opacity: isInView ? 1 : 1.1,
        y: isInView ? 0 : 30,
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for smoother animation
        scale: { duration: 0.6 },
        opacity: { duration: 1 },
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: {
          duration: 0.3,
          ease: [0.34, 1.56, 0.64, 1], // Spring-like easing for bounce
        },
      }}
      className="experience-card"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      _hover={{ boxShadow: "2xl" }}
      position="relative"
      overflow="hidden"
      mb={6}
    >
      <VStack align="start" gap={4}>
        <Box>
          <Heading as="h5" size="lg" className="experience-card-title" mb={1}>
            {title}
          </Heading>
          <Text
            fontSize="sm"
            className="experience-card-subtitle"
            fontWeight="medium"
          >
            {company} • {period}
          </Text>
        </Box>

        <Stack gap={2} w="full">
          {description.map((item, index) => (
            <Text
              key={index}
              fontSize="sm"
              className="experience-card-text"
              pl={4}
              position="relative"
              _before={{
                content: '"•"',
                position: "absolute",
                left: 0,
              }}
            >
              {item}
            </Text>
          ))}
        </Stack>

        {/* Expandable "Learn More" Section */}
        <Box w="full">
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <Box
              pt={4}
              mt={4}
              borderTopWidth="1px"
              borderColor="whiteAlpha.300"
              className="experience-card-details"
            >
              <Text
                fontSize="sm"
                className="experience-card-text"
                lineHeight="tall"
              >
                {details}
              </Text>
            </Box>
          </motion.div>

          {/* Learn More Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            size="sm"
            variant="ghost"
            className="learn-more-btn"
            mt={4}
          >
            {isExpanded ? "Show Less" : "Learn More"}
            {isExpanded ? (
              <FiChevronUp style={{ marginLeft: "8px" }} />
            ) : (
              <FiChevronDown style={{ marginLeft: "8px" }} />
            )}
          </Button>
        </Box>
      </VStack>

      {/* Glow effect when in view */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom right, transparent, rgba(255,255,255,0.2), transparent)",
            pointerEvents: "none",
          }}
        />
      )}
    </MotionBox>
  );
};

export default WorkExperienceCard;
