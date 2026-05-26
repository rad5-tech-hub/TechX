import { CheckCircle } from "lucide-react";
import { experience } from "../data";
import { PANEL, BLUE, MUTED, FG } from "../constants";

export default function StudentExperience() {
  return (
    <section className="py-24 border-y border-border" style={{ backgroundColor: PANEL }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=680&fit=crop&auto=format"
              alt="RAD5 TechX cohort collaborating"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, rgba(8,13,26,0.85) 0%, transparent 55%)` }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-semibold text-sm">
                "Small cohort. Deep relationships. Real results."
              </p>
              <p className="text-xs mt-1" style={{ color: MUTED }}>
                — RAD5 TechX Core Principle
              </p>
            </div>
            <div
              className="absolute top-6 left-6 px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: BLUE }}
            >
              Cohort 1 · 2025
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
              The Full Package
            </span>
            <h2
              className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              More Than a Program.<br />An Experience.
            </h2>
            <p className="mt-4 text-sm leading-relaxed mb-8" style={{ color: MUTED }}>
              From Day 1 to Demo Day, you are fully supported — with the materials, community, and access you need to succeed.
            </p>
            <ul className="space-y-4">
              {experience.map((item, i) => (
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