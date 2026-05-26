import { NAVY, RED, PANEL, MUTED } from "../constants";

export default function Problem() {
  const pains = [
    {
      title: "Applications that go nowhere.",
      desc: "You have sent 50 job applications. You've heard almost nothing. The problem is not your skills — it's how you present and position them. Certificates alone do not get you hired.",
    },
    {
      title: "Certificates without confidence.",
      desc: "3MTT. Coursera. Udemy. You've finished the courses. But when someone asks you to build something real from scratch, doubt creeps in. You know the theory. You haven't proven it in practice.",
    },
    {
      title: "No roadmap, no mentor, no network.",
      desc: "You're figuring everything out alone. YouTube is your mentor. Tutorial clones are your portfolio. Your former cohort has scattered. The isolation is slowing everything down.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: NAVY }} id="problem">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
            The Real Problem
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white leading-tight"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            You Finished the Bootcamp.<br />
            Why Does It Still Feel Like Day One?
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
            Thousands of talented people have completed tech programs and are still stuck. The missing ingredient is not more courses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((p, i) => (
            <div
              key={i}
              className="p-8 rounded-xl relative overflow-hidden border border-border"
              style={{ backgroundColor: PANEL }}
            >
              <div className="absolute top-0 left-0 h-full w-1" style={{ backgroundColor: RED }} />
              <div
                className="text-6xl font-black mb-4 leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "rgba(204,31,31,0.55)" }}
              >
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}