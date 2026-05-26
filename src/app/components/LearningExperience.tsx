import { ArrowRight } from "lucide-react";
import { learningItems } from "../data";
import { NAVY, RED, MUTED, PANEL, BLUE, FG } from "../constants";

export default function LearningExperience() {
  return (
    <section className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
              The Experience
            </span>
            <h2
              className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              12 Weeks of Focused,<br />High-Impact Learning.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              Every touchpoint of the RAD5 TechX experience is designed to push you further than you thought possible — with the support structures to make sure you succeed.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 font-bold text-white rounded-lg transition-all hover:brightness-110"
              style={{ backgroundColor: RED }}
            >
              Join the Cohort <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {learningItems.map((item, i) => {
              const LIcon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border"
                  style={{ backgroundColor: PANEL }}
                >
                  <div className="p-2 rounded-lg shrink-0" style={{ backgroundColor: "rgba(26,75,181,0.12)" }}>
                    <LIcon size={16} style={{ color: BLUE }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: FG }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}