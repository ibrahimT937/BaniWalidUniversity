import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="container section center">
      <h1>404</h1>
      <h2>الصفحة غير موجودة</h2>
      <p>الرجاء العودة إلى الصفحة الرئيسية والبدء من جديد.</p>
      <Link to="/" className="primary-btn">العودة للرئيسية</Link>
    </section>
  );
}
