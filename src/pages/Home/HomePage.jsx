import { Link } from "react-router-dom";

import uoLogo from "../../assets/images/uo.png";
import presidentImg from "../../assets/images/spaga.png";

function HomePage() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero" id="home">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <span className="hero-welcome">
                        مرحباً بكم في
                    </span>

                    <h1>جامعة بني وليد</h1>

                    <p>
                        بوابة التعليم والمعرفة نحو مستقبل مشرق
                    </p>

                    <div className="hero-buttons">
                        <Link
                            to="/#about"
                            className="primary-button"
                        >
                            اكتشف المزيد
                        </Link>

                        <Link
                            to="/#colleges"
                            className="secondary-button"
                        >
                            الكليات
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="quick-links-section">
                <div className="quick-links">
                    <Link to="#" className="quick-link">
                        <i className="bi bi-person-circle"></i>

                        <div>
                            <h4>بوابة الطالب</h4>
                            <span>
                                الدخول للخدمات الأكاديمية
                            </span>
                        </div>
                    </Link>

                    <Link to="#" className="quick-link">
                        <i className="bi bi-mortarboard"></i>

                        <div>
                            <h4>التسجيل</h4>
                            <span>التسجيل والقبول</span>
                        </div>
                    </Link>

                    <Link to="#" className="quick-link">
                        <i className="bi bi-file-earmark-text"></i>

                        <div>
                            <h4>نتائج الامتحانات</h4>
                            <span>استعلام عن النتائج</span>
                        </div>
                    </Link>

                    <Link to="#" className="quick-link">
                        <i className="bi bi-envelope"></i>

                        <div>
                            <h4>البريد الجامعي</h4>
                            <span>خدمات البريد الإلكتروني</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* About */}
            <section className="about-section" id="about">
                <div className="about-container">
                    <div className="about-visual">
                        <div className="about-image">
                            <img
                                src={uoLogo}
                                alt="جامعة بني وليد"
                            />
                        </div>

                        <div className="college-count-card">
                            <div className="count-number">
                                12+
                            </div>

                            <div className="count-category">
                                <span>كلية</span>
                                <span>
                                    ومؤسسة أكاديمية
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="section-label">
                            نبذة عن الجامعة
                        </span>

                        <h2>
                            صرح علمي شامخ ومنارة للعلم والمعرفة
                        </h2>

                        <p>
                            تعد جامعة بني وليد من المؤسسات
                            التعليمية الرائدة في ليبيا، وتسعى
                            إلى تقديم تعليم عالٍ متميز ومواكبة
                            التطورات العلمية الحديثة.
                        </p>

                        <div className="about-features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="bi bi-person-workspace"></i>
                                </div>

                                <div>
                                    <h3>
                                        كادر أكاديمي متميز
                                    </h3>

                                    <p>
                                        نخبة من أعضاء هيئة التدريس
                                        ذوي الخبرة والكفاءة العالية.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="bi bi-book"></i>
                                </div>

                                <div>
                                    <h3>
                                        تعليم عالي الجودة
                                    </h3>

                                    <p>
                                        برامج أكاديمية متنوعة تلبي
                                        احتياجات سوق العمل.
                                    </p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <div>
                                    <h3>
                                        الابتكار والإبداع
                                    </h3>

                                    <p>
                                        بيئة جامعية تشجع على البحث
                                        العلمي والتطوير.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section
                className="statistics-section"
                id="statistics"
            >
                <div className="section-header light-header">
                    <span>جامعة بالأرقام</span>

                    <h2>إنجازات نفتخر بها</h2>
                </div>

                <div className="statistics-container">
                    <div className="stat-card">
                        <i className="bi bi-people"></i>
                        <strong>12,500+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="stat-card">
                        <i className="bi bi-mortarboard"></i>
                        <strong>18,000+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="stat-card">
                        <i className="bi bi-building"></i>
                        <strong>12</strong>
                        <span>كلية</span>
                    </div>

                    <div className="stat-card">
                        <i className="bi bi-person-badge"></i>
                        <strong>850+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>
                </div>
            </section>

            {/* President */}
            <section
                className="leadership-section"
                id="president"
            >
                <div className="leadership-container">
                    <div className="leader-image">
                        <img
                            src={presidentImg}
                            alt="رئيس جامعة بني وليد"
                        />
                    </div>

                    <div className="leader-content">
                        <span className="section-label">
                            القيادة الجامعية
                        </span>

                        <h2>كلمة رئيس الجامعة</h2>

                        <h3>
                            الأستاذ الدكتور / رئيس الجامعة
                        </h3>

                        <p>
                            نسعى في جامعة بني وليد إلى بناء بيئة
                            أكاديمية متطورة...
                        </p>

                        <Link
                            to="#"
                            className="read-more"
                        >
                            تعرف على رئيس الجامعة
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Registrar */}
            <section
                className="registrar-section"
                id="registrar"
            >
                <div className="registrar-container">
                    <div className="registrar-content">
                        <span className="section-label">
                            إدارة المسجل العام
                        </span>

                        <h2>
                            خدمات أكاديمية للطلبة
                        </h2>

                        <p>
                            تقدم إدارة المسجل العام مجموعة من
                            الخدمات الأكاديمية والإدارية للطلبة...
                        </p>

                        <div className="registrar-services">
                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                التسجيل والقبول
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                السجل الأكاديمي
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                استخراج الإفادات
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                متابعة التخرج
                            </div>
                        </div>

                        <Link
                            to="#"
                            className="primary-link"
                        >
                            زيارة إدارة المسجل
                        </Link>
                    </div>

                    <div className="registrar-image">
                        <i className="bi bi-folder2-open"></i>
                    </div>
                </div>
            </section>

            {/* Colleges */}
            <section
                className="colleges-section"
                id="colleges"
            >
                <div className="section-header">
                    <span>كليات الجامعة</span>

                    <h2>
                        اختر تخصصك وابنِ مستقبلك
                    </h2>
                </div>

                <div className="colleges-grid">
                    <Link
                        to="#"
                        className="college-card"
                    >
                        <i className="bi bi-calculator"></i>
                        <h3>كلية العلوم</h3>
                        <p>برامج علمية متنوعة</p>
                    </Link>

                    {/* كلية تقنية المعلومات */}
                    <Link
                        to="/it"
                        className="college-card"
                    >
                        <i className="bi bi-laptop"></i>

                        <h3>
                            كلية تقنية المعلومات
                        </h3>

                        <p>
                            تكنولوجيا وبرمجة وحوسبة
                        </p>
                    </Link>

                    <Link
                        to="#"
                        className="college-card"
                    >
                        <i className="bi bi-gear"></i>
                        <h3>كلية الهندسة</h3>
                        <p>تخصصات هندسية متنوعة</p>
                    </Link>

                    <Link
                        to="#"
                        className="college-card"
                    >
                        <i className="bi bi-heart-pulse"></i>
                        <h3>كلية التقنية الطبية</h3>
                        <p>علوم وتقنيات طبية</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default HomePage;