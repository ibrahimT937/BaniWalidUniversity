import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building2, GraduationCap, BookOpen, CalendarDays, Newspaper } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CollegeCard from '../components/university/CollegeCard';
import { colleges } from '../data/colleges';

const stats = [
  ['10,000+', 'طالب وطالبة', Users],
  ['12+', 'كلية وبرنامج', Building2],
  ['700+', 'عضو هيئة تدريس', GraduationCap],
  ['8,500+', 'خريج', BookOpen],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow">مرحبًا بكم في منصة الجامعة</span>
          <h1>مستقبل المعرفة يبدأ <em>من هنا</em></h1>
          <p>منصة جامعية رقمية حديثة تجمع التعليم والبحث والخدمات الأكاديمية في تجربة واحدة منظمة.</p>
          <div className="hero-actions"><Link className="primary-btn" to="/colleges">استكشف الكليات <ArrowLeft size={18}/></Link><Link className="secondary-btn" to="/about">تعرف على الجامعة</Link></div>
        </div>
        <div className="hero-visual">
          <div className="visual-card main-card"><GraduationCap size={80}/><span>جامعة المستقبل</span><strong>تعليم • ابتكار • تميز</strong></div>
          <div className="floating-card top-card"><span>+10,000</span><small>طالب وطالبة</small></div>
          <div className="floating-card bottom-card"><span>12 كلية</span><small>برامج أكاديمية متنوعة</small></div>
        </div>
      </div>
    </section>

    <section className="stats-section"><div className="container stats-grid">
      {stats.map(([n,l,I])=><div className="stat" key={l}><I/><div><strong>{n}</strong><span>{l}</span></div></div>)}
    </div></section>

    <section className="section container">
      <SectionTitle eyebrow="اكتشف جامعتنا" title="الكليات والبرامج الأكاديمية" text="مجموعة متنوعة من البرامج المصممة لبناء مستقبل مهني وعلمي متميز." />
      <div className="colleges-grid">{colleges.slice(0,4).map(c=><CollegeCard key={c.slug} college={c}/>)}</div>
      <div className="center"><Link className="text-link" to="/colleges">عرض جميع الكليات <ArrowLeft size={18}/></Link></div>
    </section>

    <section className="services-section"><div className="container">
      <SectionTitle eyebrow="الخدمات الرقمية" title="كل ما تحتاجه في مكان واحد" />
      <div className="services-grid">
        <Link to="/students" className="service-card"><Users/><h3>خدمات الطلاب</h3><p>تسجيل، نتائج، جداول وخدمات أكاديمية.</p></Link>
        <Link to="/news" className="service-card"><Newspaper/><h3>الأخبار والإعلانات</h3><p>تابع آخر أخبار وأنشطة الجامعة.</p></Link>
        <Link to="/graduates" className="service-card"><GraduationCap/><h3>الخريجون</h3><p>تواصل مستمر مع مجتمع الخريجين.</p></Link>
      </div>
    </div></section>

    <section className="cta-section"><div className="container cta-box"><div><span>ابدأ رحلتك الأكاديمية</span><h2>معًا نصنع مستقبلًا أفضل</h2><p>اكتشف برامجنا وخدماتنا الأكاديمية.</p></div><Link to="/contact" className="primary-btn">تواصل معنا <ArrowLeft size={18}/></Link></div></section>
  </>;
}