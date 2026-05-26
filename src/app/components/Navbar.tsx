import { useState } from "react";
import { Link } from "react-router-dom";
import {ImageWithFallback} from "../components/figma/ImageWithFallback";
import rad5Logo from "../../assets/rad5_logo.png";
import { Menu, X } from "lucide-react";
import { MUTED, FG, RED, PANEL } from "../constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Tracks", href: "/#tracks" },
    { label: "Why RAD5", href: "/#why" },
    { label: "Tuition", href: "/#tuition" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border"
      style={{ backgroundColor: "rgba(8,13,26,0.96)", backdropFilter: "blur(14px)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link to="/" className="shrink-0">
          <ImageWithFallback src={rad5Logo} alt="RAD5 Tech Hub" className="h-10 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: MUTED }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              {l.label}
            </a>
          ))}
        </div>

        <Link
          to="/apply"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-lg transition-all hover:brightness-110"
          style={{ backgroundColor: RED }}
        >
          Apply Now
        </Link>

        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: PANEL }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium"
              style={{ color: MUTED }}
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-2 py-3 text-sm font-bold text-white text-center rounded-lg"
            style={{ backgroundColor: RED }}
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}