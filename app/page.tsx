import Link from "next/link";
import ClassCard from "@/components/ClassCard";
import { categories, classes, site, statusLabels } from "@/data/content";

// Home: hero banner, latest-class highlight, categories, CTAs.
export default function HomePage() {
  // Latest = first "new"/"upcoming" class, else the first class.
  const latest =
    classes.find((c) => c.status === "new" || c.status === "upcoming") ??
    classes[0];

  return (
    <>
      {/* Hero with brand banner */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/banner.jpg"
          alt={`${site.name} ব্যানার`}
          className="hero-bg"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">{site.tagline}</span>
          <h1>
            বাংলায় শিখুন টেক,
            <br />
            গড়ুন নিজের ভবিষ্যৎ
          </h1>
          <p>{site.description}</p>
          <div className="hero-cta">
            <Link href="/classes" className="btn btn-primary">
              🎬 ভিডিও ক্লাস দেখুন
            </Link>
            <Link href="/downloads" className="btn btn-ghost">
              ⬇ ডাউনলোড
            </Link>
          </div>
        </div>
      </section>

      {/* Latest class highlight */}
      <section className="section">
        <div className="section-head">
          <h2>
            সর্বশেষ ক্লাস <span className="en">Latest Class</span>
          </h2>
          <Link href="/classes" className="more">
            সব ক্লাস →
          </Link>
        </div>
        <div className="highlight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt={`${site.name} লোগো`} />
          <div>
            <span
              className={
                latest.status === "new"
                  ? "badge badge-new"
                  : latest.status === "upcoming"
                    ? "badge badge-upcoming"
                    : "badge badge-planned"
              }
            >
              {statusLabels[latest.status]}
            </span>
            <h3>{latest.title}</h3>
            <p>{latest.summary}</p>
            <Link href="/classes" className="btn btn-primary btn-sm">
              বিস্তারিত দেখুন →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="section-head">
          <h2>
            ক্যাটাগরি <span className="en">Categories</span>
          </h2>
        </div>
        <div className="chips">
          {categories.map((c) => (
            <Link key={c.id} href="/classes" className="chip">
              <span className="dot" />
              {c.labelBn} <span style={{ opacity: 0.65 }}>· {c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming classes preview */}
      <section className="section">
        <div className="section-head">
          <h2>
            আসন্ন ক্লাস <span className="en">Coming Up</span>
          </h2>
          <Link href="/schedule" className="more">
            সাপ্তাহিক শিডিউল →
          </Link>
        </div>
        <div className="grid">
          {classes.slice(0, 3).map((c) => (
            <ClassCard key={c.id} cls={c} />
          ))}
        </div>
      </section>
    </>
  );
}
