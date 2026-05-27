import { differentiators } from "../data";
import { PANEL, BLUE, NAVY, MUTED } from "../constants";

export default function WhyRad5() {
  return (
    <section className="py-24 border-y border-border" style={{ backgroundColor: PANEL }} id="why">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            Why RAD5 TechX Graduate Program
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Built Different.<br />By Design.
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
            Every element of this program was designed with one goal: to produce professionals who can execute at an industry level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => {
            const DIcon = d.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-xl border border-border transition-colors"
                style={{ backgroundColor: NAVY }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(26,75,181,0.45)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
              >
                <div className="mb-4 p-2.5 rounded-lg inline-flex" style={{ backgroundColor: "rgba(26,75,181,0.12)" }}>
                  <DIcon size={20} style={{ color: BLUE }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}