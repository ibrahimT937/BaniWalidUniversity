import PageHero from '../../components/common/PageHero';

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="الأخبار والإعلانات"
        subtitle="تابع أحدث الأخبار والفعاليات والإنجازات الجامعية."
      />

      <section className="container section">
        <div className="feature-grid">
          {[
            'إعلانات الجامعة',
            'المؤتمرات والندوات',
            'الفعاليات الطلابية',
            'الإنجازات الأكاديمية',
          ].map((item) => (
            <article className="feature" key={item}>
              <div className="avatar">📰</div>
              <h3>{item}</h3>
              <p>آخر المستجدات والأنشطة الجامعية.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
