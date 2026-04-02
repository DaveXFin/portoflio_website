import WorkExperienceCard from "app/components/experience";
import ProfileHeader from "app/components/profile-header";
import { Timeline, TimelineItem } from "app/components/timeline";
import ProjectCard from "app/components/project-card";

export default function Page() {
  const experiences = [
    {
      title: "Developer | Founder",
      company: "Travel Buddy",
      period: "October 2025 - Current",
      logoUrl: "",
      description: [
        "Currently solo developing an all in one travel planning application, main focus is to give the user a stress planning experience for trip while also experiencing the local culture.",
        "Established the core architecture and implemented key features for the application.",
        "Planned the features user stories and breaking it into smaller tasks for easier implementation.",
        "Documented the development in the blog on my personal website to share the journey and learnings.",
      ],
      details: "The idea for the application came from personal experience in travelling somewhere to learn more about a culture. I realised the difficulties of planning a trip, especially being the first time visiting the destination. Doing research sometimes was overwhelming as I had to use not just one source to find information to have a rough idea, but also taking time to research different sources. This can always lead to a lot of stress and end up just doing something popular, while not being able to connect with the local feel. I wanted to create an application where users can easily plan their trip and organize it all in one application, while having the option of being able to find more local and unique experiences. This application is currently at the early stages of development and I am learning a lot about fullstack mobile app development. I want to update the blog reguarly about teh applciation develipemnt to reach the MVP stage by the end of Spring 2026.",
    },
    
    {
      title: "Software Developer | Solutions Engineer",
      company: "European Medicines Agency",
      period: "October 2023 - June 2025",
      logoUrl: "",
      description: [
        "Designed and implemented an in-house document translation platform, reducing translation turnaround time from days to minutes and saving 120k euros annually in administrative costs.",
        "Developed a pharmaceutical phonetic calculation algorithm calculation enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows and reduced the manual labor up to 90%.",
        "Created a dashboard using RShiny with Posit enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows.",
        "Managed and maintained a MS Power Automate tool for files automation checking speeding the process by 66%.",
        "Established standardized documentation practices in Atlassian Confluence, improving team collaboration and project tracking across multiple digital transformation initiatives.",
      ],
      details: "Working at the European Medicines Agency, I focused on digital transformation initiatives to significantly improve the efficiency of the agency's operations. I was managing mutiple different projects simulatnously and these projects range from automating flows to dashboards to full stack softwares. The main project which I was leading and developing was a translation software tool, which is designed to help the colleagues by translating all the documents internally taking only 10 minutes instead of relying on an external company taking up to days. This means it also cuts costs significantly, the tool was estimated to save the internal team up to 150k euros annually. For this project I handled the user story mapping, development and deployment of the software. I also helped the team in setting up the infrastructure documentation standardization in Atlassian Confluence for each project. Created two dashboards one for internal team use to track the softwares usage and another one is a simple powerBI to measure teams tasks and load. During this time I also had the opportunity to assist colleagues in their projects as a support developer.",
    },
    {
      title: "Co-Founder",
      company: "dVox",
      period: "June 2021 – June 2022",
      logoUrl: "",
      description: [
        "Co-founded and developed a decentralized micro-blogging application, called dVox, on Ethereum open-source blockchain utilizing, the smart contract technology, with at its peak of 40 users at once.",
        "Implemented and designed the UI/UX for the mobile application for both iOS and Android.",
        "Integrated the Google firebase as the user management and security.",
        "Co-planned and launched the marketing along with designing the application's trailer video.",
      ],
      details: "dVox was an project set to exploring the implementation of crypto blockchain technology with social media. We built a fully decentralized micro bloggin application where the community owned their content through blockchain technology anonymously. The goal of the application was to experiment with using the security features of the blockchain while also creating a platform for students at the university to voice their thoughts/improvements anonymously regarding the university. This experience taught me valuable lessons about startup development, team collaboration, and emerging technologies.",
    },
    {
      title: "Software Engineer Intern",
      company: "8by8",
      period: "June 2021 – August 2021",
      logoUrl: "",
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
      logoUrl: "",
      description: [
        "Developed marketing solutions for Dr. David Lee to showcase and promote his research focus on cirrhosis and introduce the research team to attract more funding, public interest and raise general awareness.",
        "Created a plagiarism checking tool for the research team, comparing to the previous publications. This sped up the teams efficiency by 80%.",
      ],
      details: "This unpaid part time introduced me to the intersection of healthcare and technology. Working with medical researchers, I learned to analyze complex medical concepts into accessible digital content while building tools that streamlined their research workflows. I helpe dthe research to gain more visibility for funding through using simple Google Sites, as it was the optimal solution especially after leaving it allows the non-technical team to easily update and maintain the site themselves. I helped in designing the website on the intial stages and also creating the content for the website. I also assisted in the development of a plagisrism tool for the research team and in teh checking process analysis."
    },
  ];

  const projects = [
    {
      name: "Travel Buddy",
      description: "An all-in-one travel planning app focused on giving users a stress-free planning experience while connecting them with local culture and unique experiences.",
      techStack: ["React Native", "TypeScript", "Expo", "Node.js"],
      githubUrl: "",
      demoUrl: "",
      imageUrl: "",
    },
    {
      name: "dVox",
      description: "A decentralized micro-blogging application built on the Ethereum blockchain, allowing users to own their content through smart contract technology.",
      techStack: ["Solidity", "Ethereum", "React Native", "Firebase"],
      githubUrl: "",
      demoUrl: "",
      imageUrl: "",
    },
    {
      name: "Document Translation Platform",
      description: "An in-house translation platform for the European Medicines Agency, reducing translation turnaround from days to minutes and saving 120k€ annually.",
      techStack: ["Python", "Flask", "React", "Docker"],
      githubUrl: "",
      demoUrl: "",
      imageUrl: "",
    },
  ];

  return (
    <section>
      <ProfileHeader />

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
              logoUrl={exp.logoUrl || undefined}
            />
          </TimelineItem>
        ))}
      </Timeline>

      <h2 className="intro-title mt-12 mb-8 text-2xl font-semibold tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl || undefined}
            demoUrl={project.demoUrl || undefined}
            imageUrl={project.imageUrl || undefined}
          />
        ))}
      </div>
    </section>
  );
}
