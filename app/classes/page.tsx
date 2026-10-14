import ClassCard from "@/components/ClassCard";
import { classes } from "@/data/content";

// ভিডিও ক্লাস — card grid of all class videos.
export default function ClassesPage() {
  return (
    <>
      <div className="page-title">
        <h1>ভিডিও ক্লাস</h1>
        <p>
          সব টিউটোরিয়াল ক্লাস এক জায়গায়। নতুন ভিডিও ফেসবুক পেজে আপলোড হওয়ার
          পর এখানে লিংক যোগ করা হবে।
        </p>
      </div>

      <section className="section" style={{ marginTop: 22 }}>
        <div className="grid">
          {classes.map((c) => (
            <ClassCard key={c.id} cls={c} />
          ))}
        </div>
      </section>
    </>
  );
}
