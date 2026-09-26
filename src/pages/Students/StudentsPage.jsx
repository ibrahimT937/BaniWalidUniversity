import PageHero from '../../components/common/PageHero';

export default function StudentsPage() {
  return (
    <>
      <PageHero
        title="بوابة الطلاب"
        subtitle="خدمات أكاديمية وإدارية تدعم رحلتك الجامعية."
      />

      <section className="container section">
        <div className="feature-grid">
          {[
            'التسجيل الإلكتروني',
            'الجدول الدراسي',
            'نتائج الامتحانات',
            'الإفادات والتصاريح',
          ].map((item) => (
            <article className="feature" key={item}>
              <div className="avatar">📘</div>
              <h3>{item}</h3>
              <p>خدمة رقمية متاحة للطلاب في كل وقت.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
