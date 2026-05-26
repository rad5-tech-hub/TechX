import { NAVY, MUTED,  FG } from "../constants";
import rad5Logo from "../../assets/rad5_logo.png";
import {ImageWithFallback} from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-border py-14" style={{ backgroundColor: NAVY }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <ImageWithFallback src={rad5Logo} alt="RAD5 Tech Hub" className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed" style={{ color: MUTED }}>
              Innovation at the Speed of Light.<br />
              Abia, Nigeria.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Program</h4>
            {/* Updated Program links to use Link component and correct hrefs */}
            <ul className="space-y-2.5">
              {[
                { label: "Program Tracks", href: "/#tracks" },
                { label: "Why RAD5 TechX", href: "/#why" },
                { label: "Tuition & Scholarship", href: "/#tuition" },
                { label: "Apply Now", href: "/apply" },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-sm transition-colors"
                    style={{ color: MUTED }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:admin@rad5.com.ng" className="text-sm transition-colors" style={{ color: MUTED }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                >
                  admin@rad5.com.ng
                </a>
              </li>
              <li><span className="text-sm" style={{ color: MUTED }}>+234 706 434 3189</span></li>
              {["Instagram", "LinkedIn", "Facebook"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm transition-colors" style={{ color: MUTED }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-3"
        >
          <p className="text-xs" style={{ color: MUTED }}>
            © 2026 RAD5 Tech Hub. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: MUTED }}>
            Built for serious people. Designed for transformation.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;