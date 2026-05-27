import { CheckCircle } from "lucide-react";
import { PANEL, BLUE, NAVY, RED, MUTED, FG } from "../constants";

export default function Transformation() {
  const before = [
    "Confused about which path or specialization to take",
    "Building tutorial clones, not production-grade projects",
    "Applying without knowing how to position yourself",
    "Isolated — no accountability, no community",
    "Stuck in 'learning mode', not execution mode",
  ];
  const after = [
    "Clear on your direction, specialization, and next step",
    "Portfolio of real, industry-grade, deployable projects",
    "Career-positioned with confidence and a clear narrative",
    "Surrounded by peers, mentors, and industry connections",
    "Execution-ready and globally competitive",
  ];

  return (
    <section className="py-24 border-y border-border" style={{ backgroundColor: PANEL }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            The Transformation
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Before vs. After<br />RAD5 TechX Graduate Program
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl border border-border" style={{ backgroundColor: NAVY }}>
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: "rgba(204,31,31,0.15)", color: RED }}
              >
                ✕
              </div>
              <h3 className="font-bold text-white">Before the Program</h3>
            </div>
            <ul className="space-y-4">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: MUTED }}>
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style={{ backgroundColor: "rgba(204,31,31,0.12)", color: RED }}
                  >
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-8 rounded-xl relative overflow-hidden border"
            style={{ backgroundColor: NAVY, borderColor: "rgba(26,75,181,0.4)" }}
          >
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: BLUE, filter: "blur(70px)", opacity: 0.08 }}
            />
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: "rgba(26,75,181,0.15)", color: BLUE }}
              >
                ✓
              </div>
              <h3 className="font-bold text-white">After the Program</h3>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: FG }}>
                  <CheckCircle size={17} className="shrink-0 mt-0.5" style={{ color: BLUE }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}