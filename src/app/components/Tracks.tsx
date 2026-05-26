import { useState } from "react";
import { tracks } from "../data";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVY, RED, BLUE, PANEL, MUTED, FG } from "../constants";

export default function Tracks() {
  const [active, setActive] = useState(0);
  const track = tracks[active];
  const Icon = track.icon;

  return (
    <section className="py-24" style={{ backgroundColor: NAVY }} id="tracks">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
            Program Tracks
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Choose Your Specialization.<br />Own Your Expertise.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tracks.map((t, i) => {
            const TIcon = t.icon;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer"
                style={{
                  backgroundColor: active === i ? BLUE : PANEL,
                  color: active === i ? "#fff" : MUTED,
                  border: `1px solid ${active === i ? BLUE : "rgba(255,255,255,0.07)"}`,
                }}
              >
                <TIcon size={15} />
                {t.tag}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          <div className="lg:col-span-3 p-8 rounded-xl border border-border" style={{ backgroundColor: PANEL }}>
            <div className="flex flex-col lg:flex-row items-start gap-4 mb-6">
              <div className="p-3 rounded-xl shrink-0" style={{ backgroundColor: "rgba(26,75,181,0.12)" }}>
                <Icon size={26} style={{ color: BLUE }} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: MUTED }}>
                  {track.tag}
                </span>
                <h3 className="text-2xl font-black text-white mt-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {track.title}
                </h3>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: MUTED }}>
                Who This Is For
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                {track.forWho}
              </p>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: MUTED }}>
                What You Will Gain
              </div>
              <ul className="space-y-2">
                {track.gains.map((g, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm" style={{ color: FG }}>
                    <CheckCircle size={14} className="shrink-0" style={{ color: BLUE }} />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="p-6 rounded-xl border flex-1" style={{ backgroundColor: PANEL, borderColor: "rgba(26,75,181,0.3)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: MUTED }}>
                Your Transformation Outcome
              </div>
              <p className="text-sm leading-relaxed" style={{ color: FG }}>
                {track.outcome}
              </p>
            </div>

            <div className="p-6 rounded-xl border flex-1" style={{ backgroundColor: "rgba(204,31,31,0.05)", borderColor: "rgba(204,31,31,0.2)" }}>
              <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: RED }}>
                Practical Experience
              </div>
              <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
                {track.practical}
              </p>
            </div>

            <Link to="/apply" className="flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all hover:brightness-110" style={{ backgroundColor: BLUE }}>
              Apply for This Track <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}