import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { colleges } from '../../data/colleges';

export default function CollegeDetailsPage() {
  const { slug } = useParams();
  const college = colleges.find((item) => item.slug === slug);

  if (!college) {
    return (
      <div className="container section">
        <h1>الكلية غير موجودة</h1>
        <Link to="/colleges">العودة للكليات</Link>
      </div>
    );
  }

  return (
    <>
      <section className="college-hero">
        <div className="container">
          <span>{college.icon}</span>
          <div>
            <small>{college.type}</small>
            <h1>{college.name}</h1>
            <p>{college.description}</p>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="two-column">
          <article>
            <h2>نبذة عن الكلية</h2>
            <p>{college.description}</p>
            <h2>البرامج والخطط الدراسية</h2>
            <p>يمكن ربط هذه الصفحة لاحقًا بقاعدة بيانات لعرض البرامج والخطط والمقررات وأعضاء هيئة التدريس.</p>
          </article>

          <aside className="info-panel">
            <h3>الأقسام العلمية</h3>
            {college.departments.map((department) => (
              <div className="department" key={department}>{department}</div>
            ))}
          </aside>
        </div>

        <Link className="text-link" to="/colleges">
          <ArrowRight size={18} /> العودة إلى الكليات
        </Link>
      </section>
    </>
  );
}