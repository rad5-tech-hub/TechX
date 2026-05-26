import { Star } from "lucide-react";
import { testimonials } from "../data";
import { PANEL, BLUE, NAVY, RED, FG, MUTED } from "../constants";

export default function Testimonials() {
  return (
    <section className="py-24 border-y border-border" style={{ backgroundColor: PANEL }} id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: BLUE }}>
            What Our Graduates Say
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Real People.<br />Real Transformations.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-xl border border-border" style={{ backgroundColor: NAVY }}>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={13} fill={RED} style={{ color: RED }} />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: FG }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white shrink-0"
                  style={{ backgroundColor: BLUE }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs" style={{ color: MUTED }}>
                    {t.role} · {t.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}