import PageHero from '../../components/common/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="عن الجامعة"
        subtitle="مؤسسة أكاديمية تسعى إلى التميز في التعليم والبحث وخدمة المجتمع."
      />

      <section className="container section two-column">
        <article>
          <h2>نبذة عن الجامعة</h2>
          <p>
            تقدم الجامعة بيئة تعليمية حديثة تجمع بين المعرفة النظرية والتطبيق العملي
            وتدعم الابتكار.
          </p>
          <p>
            تم تصميم هذه المنصة لتكون قابلة للتوسع وربطها لاحقًا بقواعد البيانات
            والخدمات الإلكترونية.
          </p>
        </article>

        <aside className="info-panel">
          <h3>رؤيتنا</h3>
          <p>التميز والريادة في التعليم والبحث العلمي.</p>
          <h3>رسالتنا</h3>
          <p>إعداد كوادر مؤهلة تخدم المجتمع وسوق العمل.</p>
        </aside>
      </section>
    </>
  );
}
