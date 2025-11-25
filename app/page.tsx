import WorkExperienceCard from "app/components/experience";
import ProfileHeader from "app/components/profile-header";
import WelcomeCard from "app/components/welcome-card";
import { Timeline, TimelineItem } from "app/components/timeline";

export default function Page() {
  const experiences = [
    {
      title: "Software Developer | Digital Transformation Associate",
      company: "European Medicines Agency",
      period: "October 2023 - June 2025",
      description: [
        "Designed and implemented an in-house document translation platform, reducing translation turnaround time from days to minutes and saving 120k euros annually in administrative costs.",
        "Developed a pharmaceutical phonetic calculation algorithm calculation enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows and reduced the manual labor up to 90%.",
        "Created a dashboard using RShiny with Posit enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows.",
        "Managed and maintained a MS Power Automate tool for files automation checking speeding the process by 66%.",
      ],
      details: "Working at the European Medicines Agency, I focused on digital transformation initiatives that significantly improved operational efficiency. The translation platform I developed which became a widely used tool for the agency, processing thousands of documents monthly and receiving positive feedback from multiple departments. Saving the agency substantial costs, upwards of 120,000 to 150,000 euros annually. While I deliveing and led a project, I also took the intiative to help in colleagues work such technical(programming), documentation and administrative tasks.",
    },
    {
      title: "Co-Founder",
      company: "dVox",
      period: "June 2021 – June 2022",
      description: [
        "Co-founded and developed a decentralized micro-blogging application, called dVox, on Ethereum open-source blockchain utilizing, the smart contract technology, with at its peak of 40 users at once.",
        "Implemented and designed the UI/UX for the mobile application for both iOS and Android.",
        "Integrated the Google firebase as the user management and security.",
        "Co-planned and launched the marketing along with designing the application's trailer video.",
      ],
      details: "dVox was an project set to exploring the implementation of crypto technology with social media. We built a fully decentralized platform where users owned their content through blockchain technology. This experience taught me valuable lessons about startup development, team collaboration, and emerging technologies.",
    },
    {
      title: "Software Engineer Intern",
      company: "8by8",
      period: "June 2021 – August 2021",
      description: [
        "Contributed to pre-launch testing for the mobile MVP, identifying and documenting 5 critical issues that improved release stability and reduced post-launch bugs.",
        "Implemented front-end improvements based on user feedback, leading to a more seamless user-friendly experience.",
      ],
      details: "At 8by8, I gained hands-on experience with mobile development and quality assurance. The pre-launch testing phase was crucial in ensuring a smooth product release, and my contributions directly impacted the user experience of early adopters.",
    },
    {
      title: "Digital transformation Intern",
      company: "Tufts University of Medicine",
      period: "January 2021 – June 2021",
      description: [
        "Developed marketing solutions for Dr. David Lee to showcase and promote his research focus on cirrhosis and introduce the research team to attract more funding, public interest and raise general awareness.",
        "Created a plagiarism checking tool for the research team, comparing to the previous publications. This sped up the teams efficiency by 80%.",
      ],
      details: "This unpaid part time introduced me to the intersection of healthcare and technology. Working with medical researchers, I learned to analyze complex medical concepts into accessible digital content while building tools that streamlined their research workflows. I helpe dthe research to gain more visibility for funding through using simple Google Sites, as it was the optimal solution especially after leaving it allows the non-technical team to easily update and maintain the site themselves.",
    },
  ];

  return (
    <section>
      <ProfileHeader />

      <WelcomeCard
        title="My Portfolio"
        description="Feel free to explore my work experience and projects below! This portfolio showcases my journey as a software developer, highlighting key projects and professional experiences that have shaped my skills in digital transformation and software development."
      />

      <h2 className="intro-title mb-8 text-2xl font-semibold tracking-tight">
        Work Experience
      </h2>

      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            index={index}
            isLast={index === experiences.length - 1}
          >
            <WorkExperienceCard
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              details={exp.details}
            />
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
