import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVY, RED, MUTED, BLUE } from "../constants";

function FinalCTA() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${NAVY} 100%)`,
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: RED, filter: "blur(160px)", opacity: 0.15 }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white mb-8"
          style={{ backgroundColor: "rgba(204,31,31,0.3)", border: "1px solid rgba(204,31,31,0.4)" }}
        >
          ⚡ Applications close when the cohort is full
        </span>

        <h2
          className="text-[clamp(3rem,10vw,6rem)] font-black text-white leading-[0.9] mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          YOUR CAREER<br />
          {"CAN'T WAIT"}<br />
          ANOTHER COHORT.
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.72)" }}>
          50 scholarship slots. 12 transformative weeks. One decision that could change everything. This is your moment.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-white text-lg transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: RED }}
          >
            Secure Your Slot Now <ArrowRight size={20} />
          </Link>
          <a  href="#tracks"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all hover:brightness-110"
            style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
          >
            Review the Tracks
          </a>
        </div>

        <p className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          No commitment required to apply. Applications reviewed within 48 hours.
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;