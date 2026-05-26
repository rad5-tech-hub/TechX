import { CheckCircle } from "lucide-react";
import { shouldApply, shouldNotApply } from "../data";
import { PANEL, BLUE, NAVY, RED, MUTED } from "../constants";

export default function WhoShouldApply() {
  return (
    <section className="py-24 border-y border-border" style={{ backgroundColor: PANEL }} id="apply">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            Ideal Participants
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            This Program Was Built<br />For You — If You Are Ready.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            className="p-8 rounded-xl border"
            style={{ backgroundColor: NAVY, borderColor: "rgba(26,75,181,0.3)" }}
          >
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle size={17} style={{ color: BLUE }} />
              You Should Apply If...
            </h3>
            <ul className="space-y-4">
              {shouldApply.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: MUTED }}>
                  <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: BLUE }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-border" style={{ backgroundColor: NAVY }}>
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <span style={{ color: RED, fontSize: 17 }}>✕</span>
              This Is Not For You If...
            </h3>
            <ul className="space-y-4 mb-8">
              {shouldNotApply.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: MUTED }}>
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: RED }}>✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <div
              className="p-4 rounded-xl"
              style={{ backgroundColor: "rgba(26,75,181,0.07)", border: "1px solid rgba(26,75,181,0.18)" }}
            >
              <p className="text-sm" style={{ color: MUTED }}>
                If you are not quite ready yet — finish a foundational course first, then come back. We will be here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}