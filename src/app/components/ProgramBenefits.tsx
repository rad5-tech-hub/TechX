import { benefits } from "../data";
import { NAVY, RED, PANEL, MUTED } from "../constants";

export default function ProgramBenefits() {
  return (
    <section className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
            What You Gain
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            6 Things That Will<br />Change Your Career.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const BIcon = b.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-xl border border-border"
                style={{ backgroundColor: PANEL }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg shrink-0" style={{ backgroundColor: "rgba(204,31,31,0.1)" }}>
                    <BIcon size={20} style={{ color: RED }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 text-sm">{b.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}