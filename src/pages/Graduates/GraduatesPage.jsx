import PageHero from '../../components/common/PageHero';

export default function GraduatesPage() {
  return (
    <>
      <PageHero
        title="الخريجون"
        subtitle="ترابط مستمر مع خريجي الجامعة ومجتمعهم المهني."
      />

      <section className="container section">
        <div className="feature-grid">
          {[
            'خدمات التوظيف',
            'ملتقى الخريجين',
            'الأنشطة المهنية',
            'التواصل المستمر',
          ].map((item) => (
            <article className="feature" key={item}>
              <div className="avatar">🎓</div>
              <h3>{item}</h3>
              <p>دعم مستمر لعلاقات الخريجين بالجامعة.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
