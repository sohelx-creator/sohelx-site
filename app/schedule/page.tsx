import { getClass, schedule, statusLabels } from "@/data/content";

// সাপ্তাহিক শিডিউল — upcoming plan posted in advance, week by week.
export default function SchedulePage() {
  return (
    <>
      <div className="page-title">
        <h1>সাপ্তাহিক শিডিউল</h1>
        <p>
          কোন সপ্তাহে কোন ক্লাস আসছে — আগেভাগেই জেনে রাখুন। শিডিউল পরিবর্তন
          হলে এখানেই আপডেট করা হবে।
        </p>
      </div>

      <section className="section" style={{ marginTop: 22 }}>
        {schedule.map((w) => (
          <div key={w.week} className="week">
            <div className="week-head">
              <h3>{w.week}</h3>
              <span className="range">{w.dateRange}</span>
            </div>
            <ul>
              {w.items.map((item, i) => {
                const cls = getClass(item.classId);
                return (
                  <li key={`${item.classId}-${i}`}>
                    <span className="n">{i + 1}</span>
                    <div>
                      <div>
                        {cls ? cls.title : item.classId}{" "}
                        {cls && (
                          <span
                            className={
                              cls.status === "new"
                                ? "badge badge-new"
                                : cls.status === "upcoming"
                                  ? "badge badge-upcoming"
                                  : "badge badge-planned"
                            }
                            style={{ marginLeft: 8, marginBottom: 0 }}
                          >
                            {statusLabels[cls.status]}
                          </span>
                        )}
                      </div>
                      <div className="note">{item.note}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
