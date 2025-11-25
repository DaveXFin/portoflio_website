import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="profile-header flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
      {/* Profile Image */}
      <div className="profile-image-container shrink-0">
        <Image
          src="/profile.png"
          alt="David Xu - Software Developer"
          width={150}
          height={150}
          className="profile-image rounded-full object-cover"
          priority
          unoptimized // Required for external URLs
        />
      </div>

      {/* Profile Info */}
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
          space for me to document my journey as a junior developer.
        </p>
      </div>
    </div>
  );
}
