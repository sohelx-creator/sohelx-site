import { site } from "@/data/content";

// About / যোগাযোগ — short brand intro + Facebook page link.
export default function AboutPage() {
  return (
    <>
      <div className="page-title">
        <h1>আমাদের সম্পর্কে</h1>
      </div>

      <section className="section" style={{ marginTop: 22 }}>
        <div className="about-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt={`${site.name} লোগো`} />
          <h2>
            Sohel<span style={{ color: "#00c8ff" }}>X</span>
          </h2>
          <div className="tagline">{site.tagline}</div>
          <p>
            SohelX একটি বাংলা টেক-টিউটোরিয়াল প্ল্যাটফর্ম। এখানে সহজ বাংলায়
            শিখবেন ফেসবুক মার্কেটিং, AI টুলস, ইউটিউব গ্রোথ, ওয়েব ও অ্যাপ
            ডেভেলপমেন্ট এবং অনলাইন ইনকামের বাস্তব কৌশল — Better Skills,
            Brighter Future।
          </p>
          <p>
            নতুন ক্লাস সবার আগে পেতে ফেসবুক পেজটি ফলো করে রাখুন। কোনো প্রশ্ন
            থাকলে পেজে মেসেজ করুন — প্রতিটার উত্তর দেওয়া হবে।
          </p>
          <div style={{ marginTop: 20 }}>
            <a
              href={site.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              👍 Facebook পেজে ফলো করুন
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
