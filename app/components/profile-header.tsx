"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="profile-header flex flex-col gap-6 mb-12"
    >
      {/* Top row: image + name/subtitle */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="profile-image-container shrink-0">
          <Image
            src="/profile.png"
            alt="David Xu - Software Developer"
            width={150}
            height={150}
            className="profile-image rounded-full object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="intro-title mb-2 text-3xl font-bold tracking-tight">
            David Xu
          </h1>
          <h2 className="profile-subtitle text-lg mb-4 font-medium">
            Software Developer & Digital Transformation Associate
          </h2>
          <p className="intro-text">
            Based in Amsterdam, Netherlands. Welcome to my personal portfolio/blog
            where I share and showcase projects I've been working on. This is a casual
            space for me to document my journey as a junior developer. Currently I am working on
            expanding my skills in full-stack development and exploring opportunities in tech.
            I have a active travel planning app project which I am documenting on the blog section.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="profile-header-divider" />

      {/* Portfolio intro */}
      <p className="welcome-card-text text-base leading-relaxed">
        Feel free to explore my work experience and projects below! This portfolio showcases my
        journey as a software developer, highlighting key projects and professional experiences
        that have shaped my skills in digital transformation and software development.
      </p>
    </motion.div>
  );
}
