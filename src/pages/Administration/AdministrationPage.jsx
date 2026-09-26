import PageHero from '../../components/common/PageHero';

const leaders = [
  'رئيس الجامعة',
  'وكيل الشؤون العلمية',
  'وكيل الشؤون الإدارية',
  'المسجل العام',
  'مدير إدارة البحث العلمي',
  'مدير مركز تقنية المعلومات',
];

export default function AdministrationPage() {
  return (
    <>
      <PageHero
        title="الإدارة الجامعية"
        subtitle="الهيكل الإداري والقيادات الجامعية."
      />

      <section className="container section">
        <div className="feature-grid">
          {leaders.map((person) => (
            <article className="feature" key={person}>
              <div className="avatar">👤</div>
              <h3>{person}</h3>
              <p>المعلومات والمهام والتواصل.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
