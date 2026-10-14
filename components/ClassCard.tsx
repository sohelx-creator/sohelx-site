import { getCategory, statusLabels, type ClassVideo } from "@/data/content";

// Reusable video-class card used on Home + Classes pages.
export default function ClassCard({ cls }: { cls: ClassVideo }) {
  const cat = getCategory(cls.category);
  const badgeClass =
    cls.status === "new"
      ? "badge badge-new"
      : cls.status === "upcoming"
        ? "badge badge-upcoming"
        : "badge badge-planned";

  return (
    <article className="card">
      <div className="card-thumb" aria-hidden="true">
        <span className="play">▶</span>
      </div>
      <div className="card-body">
        <span className={badgeClass}>{statusLabels[cls.status]}</span>
        <h3>{cls.title}</h3>
        <div className="meta">
          <span>📁 {cat.labelBn}</span>
          <span>📅 {cls.date === "TBA" ? "তারিখ ঘোষণা হবে" : cls.date}</span>
        </div>
        <p className="summary">{cls.summary}</p>
        <div className="actions">
          {cls.facebookUrl ? (
            <a
              href={cls.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              ▶ Facebook-এ দেখুন
            </a>
          ) : (
            <span className="btn btn-ghost btn-sm btn-disabled">
              🔔 লিংক শীঘ্রই
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
