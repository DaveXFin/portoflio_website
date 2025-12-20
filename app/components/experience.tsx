/*
A reusable Work Experience Card component for displaying job roles with title, company, period, and description.
*/
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const MotionBox = motion.create(Box);

  return (
    <Box
      ref={ref}
      mb={6}
      style={{ perspective: "1000px" }}
      cursor="pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      minH="400px"
      position="relative"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0.3, y: 30 }}
        animate={{
          scale: isInView ? 1 : 0.95,
          opacity: isInView ? 1 : 0.3,
          y: isInView ? 0 : 30,
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
          scale: { duration: 0.6 },
          opacity: { duration: 0.4 },
          rotateY: { duration: 0.6 },
        }}
        whileHover={{
          y: -8,
          transition: {
            duration: 0.3,
            ease: [0.34, 1.56, 0.64, 1],
          },
        }}
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Front Side */}
        <MotionBox
          className="experience-card"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          _hover={{ boxShadow: "2xl" }}
          position="absolute"
          width="100%"
          minH="400px"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
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

            <Text fontSize="xs" className="experience-card-subtitle" mt={2} fontStyle="italic">
              Click to learn more →
            </Text>
          </VStack>
        </MotionBox>

        {/* Back Side */}
        <MotionBox
          className="experience-card-back"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          position="absolute"
          width="100%"
          minH="400px"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <VStack align="start" gap={4} h="full" justify="center">
            <Heading as="h5" size="md" className="experience-card-back-title" mb={2}>
              Details
            </Heading>
            <Text
              fontSize="sm"
              className="experience-card-back-text"
              lineHeight="tall"
            >
              {details}
            </Text>
            <Text fontSize="xs" className="experience-card-subtitle" mt={2} fontStyle="italic">
              ← Click to go back
            </Text>
          </VStack>
        </MotionBox>
      </motion.div>
    </Box>
  );
};

export default WorkExperienceCard;
