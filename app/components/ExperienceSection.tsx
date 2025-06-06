const ExperienceSection = () => {
  const experiences = [
    {
      role: "Teaching Assistant",
	  id: 1,
      company: "University of Wisconsin- Madison",
      location: "Madison, WI",
      period: "Aug 2023 - May 2025",
      highlights:
        "Assisted in teaching computer science courses ( Foundations of Mobile Systems and Applications, Topics in Database Management Systems, Software Engineering), graded assignments, and held office hours",
    },
    {
      role: "Software Engineer Co-op",
	  id: 2,
      company: "Electric Hydrogen",
      location: "Framingham, MA",
      period: "Jun 2024 - Dec 2025",
      highlights:
        "Optimized monitoring, reliability, and database performance of a high-traffic AWS app, boosting alert coverage by 40% and efficiency by 35% through custom tooling, dead-letter queues, and query optimization.",
    },
    {
      role: "Software Engineer",
	  id: 3,
      company: "JPMorgan Chase & Co.",
      location: "Hyderabad, India",
      period: "Aug 2021 - Aug 2023",
      highlights:
        "Improved deployment speed, automation, and performance of the Consumer Management EaC system by optimizing AWS Terraform modules, tuning Lambda/API Gateway, and integrating Datadog with Gremlin—achieving up to 25% lower latency and 20% faster provisioning.",
    },
    {
      role: "Software Engineer Intern",
	  id: 4,
      company: "JPMorgan Chase & Co.",
      location: "Hyderabad, India",
      period: "Jan 2021 - May 2021",
      highlights:
        "Developed a finance reporting app with GoLang and Angular, streamlined EKS container deployments, and modernized the UI with AngularJS to improve onboarding analysis, CI/CD efficiency, and accessibility.",
    },
  ];

  return (
    <div className="py-6 bg-white px-6">
      <div className="space-y-4 max-w-2xl mx-auto">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
            Experience
          </h3>
          <div className="h-px w-full bg-gray-200 mt-2" />
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="relative pl-4 border-l-2 border-gray-200">
                <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300" />

                <div className="space-y-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-md font-medium text-gray-900">
                      {exp.role}
                    </h4>
                    <div className="flex flex-col text-sm text-gray-500">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-gray-600">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.highlights}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
