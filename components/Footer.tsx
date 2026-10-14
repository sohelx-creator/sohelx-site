import { site } from "@/data/content";

// Site footer: brand line + Facebook page link.
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>
          © 2026 {site.name} — {site.taglineBn}
        </span>
        <a href={site.facebookPage} target="_blank" rel="noopener noreferrer">
          Facebook পেজে ফলো করুন →
        </a>
      </div>
    </footer>
  );
}
