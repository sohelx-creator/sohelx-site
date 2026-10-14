import { downloads } from "@/data/content";

// ডাউনলোড — categorized files (app files, tricks/drive files).
// Links with ready:false show as "শীঘ্রই" (disabled) until a real URL is added.
export default function DownloadsPage() {
  return (
    <>
      <div className="page-title">
        <h1>ডাউনলোড</h1>
        <p>
          ক্লাসে ব্যবহৃত অ্যাপ ফাইল, চেকলিস্ট ও ট্রিকসের ড্রাইভ ফাইল — ফ্রি
          ডাউনলোড করুন।
        </p>
      </div>

      {downloads.map((group) => (
        <section key={group.id} className="section dl-group">
          <h3>{group.title}</h3>
          <div className="en-sub">{group.titleEn}</div>
          {group.items.map((item) => (
            <div key={item.id} className="dl-item">
              <div className="dl-icon" aria-hidden="true">
                {group.id === "apps" ? "📱" : "📂"}
              </div>
              <div className="dl-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span className="size">সাইজ: {item.size}</span>
              </div>
              {item.ready && item.url !== "#" ? (
                <a
                  href={item.url}
                  className="btn btn-primary btn-sm"
                  download
                >
                  ⬇ ডাউনলোড
                </a>
              ) : (
                <span className="btn btn-ghost btn-sm btn-disabled">
                  শীঘ্রই আসছে
                </span>
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  );
}
