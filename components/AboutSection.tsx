export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>

        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 space-y-5">
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m a Business Analytics student at Bradley University, graduating in May 2027,
            with minors in Decision Analysis and Marketing. My goal is to become a data scientist,
            and I&apos;m building toward that through coursework, internships, and hands-on projects
            in analytics and machine learning.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Pointcore, I built and evaluated machine learning prototypes for ServiceNow ticket
            triage and workload forecasting, analyzed team capacity, and explored reporting automation.
            At Interim HealthCare, I helped improve website backend components and develop a monthly
            revenue forecasting model. My work in supply chain operations and team leadership has also
            given me experience with the day-to-day problems that data can help solve.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I built AgeVision to practice taking a machine learning project from data preparation
            and model evaluation to a working web application. Through projects like this,
            I&apos;m strengthening my Python, statistics, and modeling skills while learning how to
            evaluate results, understand model limitations, and explain what they mean.
          </p>
        </div>
      </div>
    </section>
  );
}
