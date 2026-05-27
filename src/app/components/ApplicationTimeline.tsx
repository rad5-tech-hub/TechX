
const ApplicationTimeline = () => {
  const schedule = [
    { phase: "Applications Open", timeline: "June 1, 2026" },
    { phase: "Application Review Begins", timeline: "June 5, 2026" },
    { phase: "Assessments Begin", timeline: "June 15, 2026" },
    { phase: "Interviews Begin", timeline: "July 1, 2026" },
    { phase: "Final Selection & Admissions", timeline: "July 20 – July 30, 2026" },
    { phase: "Student Onboarding", timeline: "July 28 – July 31, 2026" },
    { phase: "Program Kickoff", timeline: "August 1, 2026" },
  ];

  const steps = [
    { title: "Apply Online", description: "Submit your application and choose your preferred graduate program track." },
    { title: "Application Review", description: "Our team reviews your application to determine eligibility and readiness." },
    { title: "Assessment", description: "Shortlisted applicants complete a simple readiness assessment." },
    { title: "Interview", description: "Qualified applicants proceed to a short interview session." },
    { title: "Admission & Onboarding", description: "Successful applicants receive admission and onboarding information." },
    { title: "Program Begins", description: "The RAD5 TechX Graduate Program officially starts on August 1, 2026." },
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Schedule Table */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-8">Important Dates</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-2 font-semibold border-b border-border">Phase</th>
                  <th className="p-2 font-semibold border-b border-border">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((item, index) => (
                  <tr key={index} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3 border-b border-border text-foreground/80 text-sm lg:text-base">{item.phase}</td>
                    <td className="p-3 border-b border-border font-medium text-sm lg:text-base">{item.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Steps */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-8">How the Application Process Works</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-md lg:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-xs lg:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationTimeline;