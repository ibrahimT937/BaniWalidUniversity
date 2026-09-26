import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <GraduationCap size={34} />
            <strong>منصة الجامعة</strong>
          </div>
          <p>
            بوابة رقمية حديثة تربط الطلاب وأعضاء هيئة التدريس والخريجين والمجتمع
            الجامعي في مكان واحد.
          </p>
          <div className="socials">
            <Globe />
            <MessageCircle />
            <BriefcaseBusiness />
          </div>
        </div>
        <div>
          <h3>روابط سريعة</h3>
          <Link to="/about">عن الجامعة</Link>
          <Link to="/colleges">الكليات</Link>
          <Link to="/news">الأخبار</Link>
          <Link to="/contact">اتصل بنا</Link>
        </div>
        <div>
          <h3>الخدمات</h3>
          <Link to="/students">بوابة الطلاب</Link>
          <Link to="/graduates">الخريجون</Link>
          <Link to="/administration">الإدارة الجامعية</Link>
        </div>
        <div>
          <h3>معلومات التواصل</h3>
          <p>
            <MapPin size={17} /> ليبيا
          </p>
          <p>
            <Phone size={17} /> +218 000 000 000
          </p>
          <p>
            <Mail size={17} /> info@university.edu.ly
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 منصة الجامعة — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
