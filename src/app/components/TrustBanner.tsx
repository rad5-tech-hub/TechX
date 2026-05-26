import { PANEL, MUTED, BLUE } from "../constants";

export default function TrustBanner() {
  return (
    <section className="py-14 border-y border-border" style={{ backgroundColor: PANEL }}>
      <div className="max-w-6xl mx-auto px-4 text-start">
        <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: MUTED }}>
          Backed by a decade of building real products, companies, and careers
        </p>
        <div className="flex flex-wrap justify-start gap-12 md:gap-20">
          {[
            { n: "10+", l: "Years in the industry" },
            { n: "500+", l: "Professionals trained" },
            { n: "20+", l: "Products shipped" },
            { n: "3", l: "Tech hubs built" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div
                className="text-5xl font-black mb-1"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", color: BLUE }}
              >
                {s.n}
              </div>
              <div className="text-sm" style={{ color: MUTED }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}