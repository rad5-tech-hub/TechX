import { CheckCircle } from "lucide-react";
import { NAVY, RED, MUTED, PANEL, BLUE } from "../constants";
import { Link } from "react-router-dom";

export default function Tuition() {
  return (
    <section className="py-24" style={{ backgroundColor: NAVY }} id="tuition">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: RED }}>
            Tuition & Scholarship
          </span>
          <h2
            className="mt-3 text-[clamp(2.2rem,5vw,3.5rem)] font-black text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            A Premium Program.<br />Made Accessible.
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: MUTED }}>
            We believe the right program should not be out of reach. That is why we offer scholarships and flexible payment.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-8">

          {/* Scholarship */}
          <div
            className="p-8 rounded-xl relative overflow-hidden"
            style={{ backgroundColor: BLUE, border: "2px solid rgba(255,255,255,0.15)" }}
          >
            <div className="absolute top-4 right-4">
              <span
                className="px-3 py-1 text-xs font-black text-white rounded-full"
                style={{ backgroundColor: RED }}
              >
                Limited slots!
              </span>
            </div>
            <div
              className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
            />
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              With Scholarship
            </div>
            <div
              className="text-6xl font-black text-white mb-1"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              50% OFF
            </div>
            <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Limited scholarship slots awarded on merit and need. Apply early, slots fill fast.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "50% tuition waiver",
                "Merit-based selection",
                "Installment payment available",
                "Priority cohort placement",
                "Professional certificate awarded",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle size={13} className="shrink-0 opacity-80" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/apply"
              className="block text-center py-3.5 rounded-xl font-black transition-all hover:brightness-110"
              style={{ backgroundColor: "#fff", color: BLUE }}
            >
              Apply for Scholarship
            </Link>
          </div>
        </div>

        <p className="text-center text-sm" style={{ color: MUTED }}>
          Installment payment option available. Contact us at{" "}
          <Link to="mailto:admin@rad5.com.ng" className="underline underline-offset-2" style={{ color: BLUE }}>
            admin@rad5.com.ng
          </Link>{" "}
          for details.
        </p>
      </div>
    </section>
  );
}