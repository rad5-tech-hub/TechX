import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NAVY, RED, MUTED, PANEL, BLUE } from "../constants";
import {faqs} from "../data.ts";

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24" style={{ backgroundColor: NAVY }} id="faq">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
              FAQ
            </span>
            <h2
              className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white leading-tight"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Your Questions,<br />Answered Honestly.
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
              We know this is a significant commitment. Here are honest answers to what people ask us most.
            </p>
            <div
              className="mt-8 p-6 rounded-xl border"
              style={{ backgroundColor: PANEL, borderColor: "rgba(26,75,181,0.3)" }}
            >
              <p className="text-sm mb-4" style={{ color: MUTED }}>
                Still have questions? Reach out directly — we respond within 24 hours.
              </p>
              <a
                href="mailto:admin@rad5.com.ng"
                className="inline-flex items-center gap-2 text-sm font-bold"
                style={{ color: BLUE }}
              >
                admin@rad5.com.ng <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-border overflow-hidden"
                style={{ backgroundColor: PANEL }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-colors cursor-pointer"
                  style={{ backgroundColor: open === i ? "rgba(26,75,181,0.08)" : "transparent" }}
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    size={17}
                    className="shrink-0 mt-0.5 transition-transform duration-200"
                    style={{ color: MUTED, transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-border">
                    <p className="text-sm leading-relaxed pt-4" style={{ color: MUTED }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;