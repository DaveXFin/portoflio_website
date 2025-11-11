import WorkExperienceCard from "app/components/experience";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-black dark:text-white">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I am David Xu a software developer and digital transformation associate based in Amsterdam, Netherlands. Welcome to my personal portfolio/blog 
        where I will share and showcase some projects that I have been working on. This is a casual space for me to document my journey as a junior developer. 
        Feel free to explore my work experience and projects below!`}
      </p>

      <div className="my-8">
        <WorkExperienceCard
          title="Software Developer | Digital Transformation Associate"
          company="European Medicines Agency"
          period="October 2023 - June 2025"
          description={[
            "Designed and implemented an in-house document translation platform, reducing translation turnaround time from days to minutes and saving 120k euros annually in administrative costs.",
            "Developed a pharmaceutical phonetic calculation algorithm calculation enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows and reduced the manual labor up to 90%.",
            "Created a dashboard using RShiny with Posit enable it to be quantified for comparison across other pharmaceutical names, improving accuracy in internal workflows.",
            "Managed and maintained a MS Power Automate tool for files automation checking speeding the process by 66%.",
          ]}
        />
        <br />
        <WorkExperienceCard
          title="Co-Founder"
          company="dVox"
          period="June 2021 – June 2022"
          description={[
            "Co-founded and developed a decentralized micro-blogging application, called dVox, on Ethereum open-source blockchain utilizing, the smart contract technology, with at its peak of 40 users at once.",
            "Implemented and designed the UI/UX for the mobile application for both iOS and Android.",
            "Integrated the Google firebase as the user management and security.",
            "Co-planned and launched the marketing along with designing the application’s trailer video.",
          ]}
        />
        <br />
        <WorkExperienceCard
          title="Software Engineer Intern"
          company="8by8"
          period="June 2021 – August 2021"
          description={[
            "Contributed to pre-launch testing for the mobile MVP, identifying and documenting 5 critical issues that improved release stability and reduced post-launch bugs.",
            "Implemented front-end improvements based on user feedback, leading to a more seamless user-friendly experience.",
          ]}
        />
        <br />

        <WorkExperienceCard
          title="Digital transformation Intern"
          company="Tufts University of Medicine"
          period="January 2021 – June 2021"
          description={[
            "Developed marketing solutions for Dr. David Lee to showcase and promote his research focus on cirrhosis and introduce the research team to attract more funding, public interest and raise general awareness.",
            "Created a plagiarism checking tool for the research team, comparing to the previous publications. This sped up the teams efficiency by 80%.",
          ]}
        />
      </div>
    </section>
  );
}
