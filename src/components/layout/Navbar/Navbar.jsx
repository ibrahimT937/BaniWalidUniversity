import "./index.css";
import { Link } from "react-router-dom";
import uniLogo from "../../../assets/images/un1020.png";
function Navbar() {
    return (
        <header className="head">
            <nav className="navbar">
                <Link to="/" className="brand">
                    <div className="logo">
                        <img src={uniLogo} alt="جامعة بني وليد" />
                    </div>
                    <div className="title">
                        <h3>جامعة بني وليد</h3>
                        <p>Bani Waleed University</p>
                    </div>
                </Link>

                <ul className="main-menu">
                    <li>
                        <Link to="/" className="links">
                            الصفحة الرئيسية
                        </Link>
                    </li>

                    <li className="dropdown">
                        <Link to="/#about" className="links">
                            عن الجامعة
                        </Link>

                        <i className="bi bi-chevron-down"></i>

                        <ul className="submenu single-menu">
                            <li>
                                <Link to="/about-university">نبذة عن الجامعة</Link>
                            </li>
                            <li>
                                <Link to="/#president">رئيس الجامعة</Link>
                            </li>
                            <li>
                                <Link to="/#registrar">المسجل العام</Link>
                            </li>
                            <li>
                                <Link to="/#statistics">إحصائيات الجامعة</Link>
                            </li>
                            <li>
                                <Link to="/#contact">تواصل معنا</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/#colleges" className="links">
                            الكليات
                        </Link>

                        <i className="bi bi-chevron-down"></i>

                        <ul className="submenu college-menu">
                            <li className="college-column">
                                <Link to="/science">كلية العلوم</Link>
                                <Link to="/engineering">كلية الهندسة</Link>
                                <Link to="#">كلية الاقتصاد</Link>
                                <Link to="#">كلية القانون</Link>
                            </li>

                            <li className="college-column">
                                <Link to="/it">كلية تقنية المعلومات</Link>

                                <Link to="#">كلية الزراعة</Link>
                                <Link to="/arts">كلية الآداب</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/#services" className="links">
                            الإدارات والمراكز
                        </Link>

                        <i className="bi bi-chevron-down"></i>

                        <ul className="submenu single-menu">
                            <li>
                                <Link to="/#registrar">إدارة المسجل العام</Link>
                            </li>
                            <li>
                                <Link to="#">إدارة الدراسات العليا</Link>
                            </li>
                            <li>
                                <Link to="#">مركز البحوث والاستشارات</Link>
                            </li>
                            <li>
                                <Link to="#">مركز تقنية المعلومات</Link>
                            </li>
                            <li>
                                <Link to="#">إدارة شؤون الطلبة</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="#" className="links">
                            البحث العلمي
                        </Link>

                        <i className="bi bi-chevron-down"></i>

                        <ul className="submenu single-menu">
                            <li>
                                <Link to="#">المجلات العلمية</Link>
                            </li>
                            <li>
                                <Link to="#">المؤتمرات والندوات</Link>
                            </li>
                            <li>
                                <Link to="#">المشاريع البحثية</Link>
                            </li>
                            <li>
                                <Link to="#">المستودع الرقمي</Link>
                            </li>
                        </ul>
                    </li>

                    <li className="dropdown">
                        <Link to="/#services" className="links">
                            الخدمات
                        </Link>

                        <i className="bi bi-chevron-down"></i>

                        <ul className="submenu single-menu">
                            <li>
                                <Link to="#">بوابة الطالب</Link>
                            </li>
                            <li>
                                <Link to="#">البريد الجامعي</Link>
                            </li>
                            <li>
                                <Link to="#">نتائج الامتحانات</Link>
                            </li>
                            <li>
                                <Link to="#">التسجيل الإلكتروني</Link>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="language-container">
                    <button className="language">English</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
