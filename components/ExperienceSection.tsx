const experiences = [
  {
    title: "Business Intelligence Developer Intern",
    company: "Pointcore",
    location: "Peoria, IL",
    dates: "Summer 2026",
    bullets: [
      "Built and evaluated AI/ML prototypes for reporting workflows, including ServiceNow ticket triage and workload forecasting use cases",
      "Analyzed team capacity, support, and project workload data to support more equitable assignment and projected start-date planning",
      "Presented practical AI and Copilot use cases to reporting leadership and developed automation concepts using Power Automate and Copilot Studio",
    ],
    tags: ["AI/ML", "ServiceNow", "Workload Forecasting", "Power Automate", "Copilot Studio"],
  },
  {
    title: "Supply Chain Associate Intern",
    company: "Fastenal",
    location: "Peoria, IL",
    dates: "October 2025 – Present",
    bullets: [
      "Monitored and analyzed inventory levels to maintain stock availability and reduce supply disruptions",
      "Improved order-picking processes to increase efficiency and supported receiving, order fulfillment, and local customer deliveries",
    ],
    tags: ["Inventory Analysis", "Process Improvement", "Order Fulfillment", "Supply Chain"],
  },
  {
    title: "Software Developer Intern",
    company: "Interim HealthCare",
    location: "Peoria, IL",
    dates: "October 2025 – January 2026",
    bullets: [
      "Helped rebuild website backend components to improve organization and access to company data",
      "Assisted in building a forecasting model to estimate monthly revenue and completed custom development tasks to improve website efficiency",
    ],
    tags: ["Backend Development", "Revenue Forecasting", "Data Organization"],
  },
  {
    title: "Team Lead",
    company: "Club Car Wash",
    location: "Peoria, IL",
    dates: "July 2024 – October 2025",
    bullets: [
      "Supervised daily operational workflows, trained and onboarded 4+ employees, and delegated work to maintain service quality and throughput",
      "Troubleshot equipment and operational issues to minimize downtime and keep team processes moving efficiently",
    ],
    tags: ["Team Leadership", "Employee Training", "Operations", "Troubleshooting"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.location}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 sm:mt-0">{exp.dates}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
