"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/content";

// Site header: logo + brand + mobile-friendly nav.
const links = [
  { href: "/", label: "হোম" },
  { href: "/classes", label: "ভিডিও ক্লাস" },
  { href: "/schedule", label: "শিডিউল" },
  { href: "/downloads", label: "ডাউনলোড" },
  { href: "/about", label: "যোগাযোগ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt={`${site.name} লোগো`} />
          <span>
            Sohel<span className="x">X</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="মেনু খুলুন/বন্ধ করুন"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>

        <nav className={`nav${open ? " open" : ""}`}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
