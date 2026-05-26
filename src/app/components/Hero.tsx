import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { NAVY, RED, MUTED, BLUE, FG } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-16 lg:pt-26" style={{ backgroundColor: NAVY }}>
      {/* Diagonal blue accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{
            background: `linear-gradient(135deg, transparent 35%, rgba(26,75,181,0.14) 35%)`,
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3"
          style={{ background: `linear-gradient(to left, rgba(26,75,181,0.08), transparent)` }}
        />
      </div>

      {/* Right image — desktop */}
      <div className="absolute right-0 top-16 bottom-0 w-5/12 lg:w-1/2 hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=900&h=900&fit=crop&auto=format"
          alt="Tech professional"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to right, ${NAVY} 0%, rgba(8,13,26,0.4) 35%, rgba(8,13,26,0.6) 100%)` }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="relative px-4 py-28 lg:py-0 lg:min-h-screen flex flex-col justify-center">
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span
              className="px-3 py-1 text-xs font-bold tracking-widest uppercase text-white rounded-full"
              style={{ backgroundColor: RED }}
            >
              Cohort 1 Now Open
            </span>
            <span className="text-xs font-medium" style={{ color: MUTED }}>
              Limited to 15 seats per track
            </span>
          </div>

          {/* Headline */}
          <h1
            className="max-w-2xl text-[clamp(3.5rem,9vw,6rem)] font-black leading-[0.92] tracking-tight text-white mb-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            YOU LEARNED<br />
            THE SKILLS.<br />
            <span style={{ color: BLUE }}>NOW GET</span><br />
            <span style={{ color: RED }}>THE CAREER.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-lg text-base sm:text-lg leading-relaxed mb-10" style={{ color: MUTED }}>
            RAD5 TechX is a 12-week graduate acceleration program that turns skilled-but-stuck tech learners into confident, industry-ready professionals — with real projects, deep mentorship, and career positioning that actually works.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-14">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 px-7 py-4 font-bold text-white rounded-lg transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: RED }}
            >
              Apply for Cohort 1 <ArrowRight size={18} />
            </Link>
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 px-7 py-4 font-bold rounded-lg border transition-all hover:brightness-110"
              style={{ borderColor: "rgba(26,75,181,0.45)", color: FG, backgroundColor: "rgba(26,75,181,0.1)" }}
            >
              Explore Tracks <ChevronDown size={18} />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-5 lg:pb-8">
            {[
              { v: "10+", l: "Years Industry Experience" },
              { v: "15", l: "Seats Max Per Track" },
              { v: "50%", l: "Scholarship Available" },
              { v: "5", l: "Specialized Tracks" },
            ].map((s) => (
              <div key={s.l}>
                <div
                  className="text-4xl font-black text-white leading-none mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: MUTED }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
}