import PageHero from '../../components/common/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="تواصل معنا"
        subtitle="نحن هنا لتقديم المعلومات والدعم والاستفسارات."
      />

      <section className="container section">
        <div className="feature-grid">
          {[
            'مراكز التواصل',
            'الاستفسارات العامة',
            'التسجيل والقبول',
            'الدعم الأكاديمي',
          ].map((item) => (
            <article className="feature" key={item}>
              <div className="avatar">📩</div>
              <h3>{item}</h3>
              <p>تواصل مباشر مع فريق الجامعة.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
