import "./it.css";
import { Link } from "react-router-dom";

function ITCollege() {
    return (
        <main className="it-page" dir="rtl">

            {/* Hero */}
            <section className="it-hero" id="it-home">
                <div className="it-hero-overlay"></div>

                <div className="it-hero-content">
                    <span className="it-hero-label">
                        جامعة بني وليد
                    </span>

                    <h1>كلية تقنية المعلومات</h1>

                    <p>
                        نحو تعليم تقني متطور وصناعة مستقبل
                        رقمي مبتكر
                    </p>

                    <div className="it-hero-buttons">
                        <Link
                            to="#about"
                            className="it-primary-button"
                        >
                            تعرف على الكلية
                        </Link>

                        <Link
                            to="#departments"
                            className="it-secondary-button"
                        >
                            الأقسام العلمية
                        </Link>
                    </div>
                </div>

                <div className="it-hero-shape"></div>
            </section>

            {/* Quick Info */}
            <section className="it-quick-section">
                <div className="it-quick-grid">

                    <div className="it-quick-card">
                        <div className="it-quick-icon">
                            <i className="bi bi-mortarboard"></i>
                        </div>

                        <div>
                            <strong>برامج أكاديمية</strong>
                            <span>تعليم تقني متخصص</span>
                        </div>
                    </div>

                    <div className="it-quick-card">
                        <div className="it-quick-icon">
                            <i className="bi bi-laptop"></i>
                        </div>

                        <div>
                            <strong>بيئة تقنية</strong>
                            <span>معامل وتجهيزات حديثة</span>
                        </div>
                    </div>

                    <div className="it-quick-card">
                        <div className="it-quick-icon">
                            <i className="bi bi-code-slash"></i>
                        </div>

                        <div>
                            <strong>مهارات رقمية</strong>
                            <span>برمجة وحوسبة وتقنية</span>
                        </div>
                    </div>

                    <div className="it-quick-card">
                        <div className="it-quick-icon">
                            <i className="bi bi-lightbulb"></i>
                        </div>

                        <div>
                            <strong>ابتكار وإبداع</strong>
                            <span>دعم المشاريع التقنية</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* About */}
            <section className="it-about" id="about">
                <div className="it-section-container">

                    <div className="it-about-visual">
                        <div className="it-about-image">
                            <div className="it-tech-symbol">
                                <i className="bi bi-cpu"></i>
                            </div>
                        </div>

                        <div className="it-about-badge">
                            <strong>IT</strong>
                            <span>
                                Information Technology
                            </span>
                        </div>
                    </div>

                    <div className="it-about-content">
                        <span className="it-section-label">
                            عن الكلية
                        </span>

                        <h2>
                            نبني جيلًا قادرًا على قيادة المستقبل
                            الرقمي
                        </h2>

                        <p>
                            تسعى كلية تقنية المعلومات بجامعة بني
                            وليد إلى إعداد كوادر متخصصة في مجالات
                            تقنية المعلومات والحوسبة، من خلال
                            توفير بيئة تعليمية تجمع بين المعرفة
                            الأكاديمية والتطبيق العملي.
                        </p>

                        <p>
                            وتهدف الكلية إلى تطوير مهارات الطلبة
                            في البرمجة ونظم المعلومات والشبكات
                            وقواعد البيانات وغيرها من المجالات
                            التقنية الحديثة، بما يتوافق مع
                            متطلبات سوق العمل.
                        </p>

                        <div className="it-about-features">

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>
                                    تعليم أكاديمي متخصص
                                </span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>
                                    تطبيق عملي ومشاريع تقنية
                                </span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>
                                    تطوير مهارات الطلبة
                                </span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>
                                    تشجيع البحث والابتكار
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Statistics */}
            <section className="it-statistics">
                <div className="it-section-header it-light-header">
                    <span>الكلية بالأرقام</span>
                    <h2>مسيرة أكاديمية وتقنية</h2>
                </div>

                <div className="it-stat-grid">

                    <div className="it-stat-card">
                        <i className="bi bi-people"></i>
                        <strong>+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="it-stat-card">
                        <i className="bi bi-mortarboard"></i>
                        <strong>+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="it-stat-card">
                        <i className="bi bi-diagram-3"></i>
                        <strong>4</strong>
                        <span>أقسام وتخصصات</span>
                    </div>

                    <div className="it-stat-card">
                        <i className="bi bi-person-workspace"></i>
                        <strong>+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>

                </div>
            </section>

            {/* Departments */}
            <section
                className="it-departments"
                id="departments"
            >
                <div className="it-section-header">
                    <span>الأقسام العلمية</span>

                    <h2>
                        اختر مسارك في عالم التقنية
                    </h2>

                    <p>
                        تخصصات تقنية تساعدك على بناء مهاراتك
                        والاستعداد لمتطلبات المستقبل الرقمي.
                    </p>
                </div>

                <div className="it-department-grid">

                    <article className="it-department-card">
                        <div className="it-department-icon">
                            <i className="bi bi-code-slash"></i>
                        </div>

                        <span className="it-department-number">
                            01
                        </span>

                        <h3>قسم علوم الحاسوب</h3>

                        <p>
                            يهتم بعلوم البرمجة والخوارزميات
                            وهندسة البرمجيات ومفاهيم الحوسبة
                            الحديثة.
                        </p>

                        <Link to="#">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </article>

                    <article className="it-department-card">
                        <div className="it-department-icon">
                            <i className="bi bi-database"></i>
                        </div>

                        <span className="it-department-number">
                            02
                        </span>

                        <h3>قسم نظم المعلومات</h3>

                        <p>
                            يهتم بتحليل وتصميم نظم المعلومات
                            وقواعد البيانات وتوظيف التقنية في
                            تطوير المؤسسات.
                        </p>

                        <Link to="#">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </article>

                    <article className="it-department-card">
                        <div className="it-department-icon">
                            <i className="bi bi-router"></i>
                        </div>

                        <span className="it-department-number">
                            03
                        </span>

                        <h3>قسم الشبكات</h3>

                        <p>
                            يهتم بتقنيات الشبكات والاتصالات
                            وإدارة البنية التحتية للأنظمة
                            والشبكات.
                        </p>

                        <Link to="#">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </article>

                    <article className="it-department-card">
                        <div className="it-department-icon">
                            <i className="bi bi-shield-lock"></i>
                        </div>

                        <span className="it-department-number">
                            04
                        </span>

                        <h3>قسم الأمن السيبراني</h3>

                        <p>
                            يهتم بمبادئ حماية الأنظمة والشبكات
                            والبيانات والتوعية بالمخاطر الأمنية
                            الرقمية.
                        </p>

                        <Link to="#">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </Link>
                    </article>

                </div>
            </section>

            {/* Programs */}
            <section
                className="it-programs"
                id="programs"
            >
                <div className="it-section-container">

                    <div className="it-programs-content">
                        <span className="it-section-label">
                            البرامج الأكاديمية
                        </span>

                        <h2>
                            معرفة أكاديمية ومهارات عملية
                        </h2>

                        <p>
                            تقدم الكلية مسارات تعليمية تساعد
                            الطالب على الجمع بين الجانب النظري
                            والتطبيق العملي من خلال المشاريع
                            والتدريب والتعلم المستمر.
                        </p>

                        <div className="it-program-list">

                            <div className="it-program-item">
                                <span>01</span>

                                <div>
                                    <h3>
                                        البرمجة وتطوير البرمجيات
                                    </h3>

                                    <p>
                                        تعلم أساسيات البرمجة
                                        وتطوير التطبيقات والأنظمة
                                        البرمجية.
                                    </p>
                                </div>
                            </div>

                            <div className="it-program-item">
                                <span>02</span>

                                <div>
                                    <h3>قواعد البيانات</h3>

                                    <p>
                                        تصميم وإدارة قواعد
                                        البيانات وأنظمة تخزين
                                        المعلومات.
                                    </p>
                                </div>
                            </div>

                            <div className="it-program-item">
                                <span>03</span>

                                <div>
                                    <h3>
                                        الشبكات والاتصالات
                                    </h3>

                                    <p>
                                        دراسة أساسيات الشبكات
                                        وإدارتها وتقنيات الاتصال
                                        الحديثة.
                                    </p>
                                </div>
                            </div>

                            <div className="it-program-item">
                                <span>04</span>

                                <div>
                                    <h3>الأمن السيبراني</h3>

                                    <p>
                                        التعرف على أساسيات حماية
                                        الأنظمة والبيانات والبنية
                                        التحتية الرقمية.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="it-program-visual">
                        <div className="it-code-window">

                            <div className="it-window-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="it-code-content">
                                <p>
                                    <span className="code-purple">
                                        const
                                    </span>{" "}
                                    future
                                </p>

                                <p>
                                    <span className="code-blue">
                                        =
                                    </span>{" "}
                                    technology;
                                </p>

                                <p className="code-space">
                                    {" "}
                                </p>

                                <p>
                                    <span className="code-purple">
                                        function
                                    </span>{" "}
                                    buildFuture() {"{"}
                                </p>

                                <p className="code-indent">
                                    learn();
                                </p>

                                <p className="code-indent">
                                    innovate();
                                </p>

                                <p className="code-indent">
                                    create();
                                </p>

                                <p>{"}"}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* Services */}
            <section
                className="it-services"
                id="services"
            >
                <div className="it-section-header">
                    <span>خدمات الكلية</span>

                    <h2>
                        كل ما يحتاجه الطالب في مكان واحد
                    </h2>
                </div>

                <div className="it-services-grid">

                    <Link
                        to="#"
                        className="it-service-card"
                    >
                        <i className="bi bi-person-lines-fill"></i>

                        <h3>خدمات الطلبة</h3>

                        <p>
                            معلومات وإرشادات تساعد الطلبة خلال
                            مسيرتهم الأكاديمية.
                        </p>

                        <span>
                            اكتشف المزيد
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </Link>

                    <Link
                        to="#"
                        className="it-service-card"
                    >
                        <i className="bi bi-journal-code"></i>

                        <h3>المقررات الدراسية</h3>

                        <p>
                            الاطلاع على المقررات والخطط الدراسية
                            والبرامج الأكاديمية.
                        </p>

                        <span>
                            عرض المقررات
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </Link>

                    <Link
                        to="#"
                        className="it-service-card"
                    >
                        <i className="bi bi-pc-display"></i>

                        <h3>المعامل</h3>

                        <p>
                            معامل تقنية مجهزة لدعم التدريب
                            والتطبيق العملي.
                        </p>

                        <span>
                            تعرف على المعامل
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </Link>

                    <Link
                        to="#"
                        className="it-service-card"
                    >
                        <i className="bi bi-search"></i>

                        <h3>البحث العلمي</h3>

                        <p>
                            دعم البحث العلمي والمشاريع والابتكار
                            في المجالات التقنية.
                        </p>

                        <span>
                            البحث العلمي
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </Link>

                </div>
            </section>

            {/* News */}
            <section
                className="it-news"
                id="news"
            >
                <div className="it-section-header">
                    <span>آخر الأخبار</span>

                    <h2>
                        أخبار وفعاليات الكلية
                    </h2>
                </div>

                <div className="it-news-grid">

                    <article className="it-news-card">
                        <div className="it-news-image">
                            <i className="bi bi-calendar-event"></i>
                        </div>

                        <div className="it-news-content">
                            <span>فعاليات</span>

                            <h3>
                                فعاليات وأنشطة طلابية تقنية
                            </h3>

                            <p>
                                تابع أحدث الأنشطة والفعاليات التي
                                تنظمها الكلية لطلابها.
                            </p>

                            <Link to="#">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </Link>
                        </div>
                    </article>

                    <article className="it-news-card">
                        <div className="it-news-image">
                            <i className="bi bi-award"></i>
                        </div>

                        <div className="it-news-content">
                            <span>إنجازات</span>

                            <h3>
                                مشاريع وابتكارات طلبة الكلية
                            </h3>

                            <p>
                                نماذج من المشاريع التقنية
                                والابتكارات الطلابية.
                            </p>

                            <Link to="#">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </Link>
                        </div>
                    </article>

                    <article className="it-news-card">
                        <div className="it-news-image">
                            <i className="bi bi-megaphone"></i>
                        </div>

                        <div className="it-news-content">
                            <span>إعلانات</span>

                            <h3>
                                إعلانات وتنويهات الكلية
                            </h3>

                            <p>
                                تابع آخر الإعلانات والتنويهات
                                المهمة للطلبة.
                            </p>

                            <Link to="#">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </Link>
                        </div>
                    </article>

                </div>
            </section>

            {/* CTA */}
            <section className="it-cta">
                <div className="it-cta-content">

                    <span>
                        كلية تقنية المعلومات
                    </span>

                    <h2>
                        مستقبلك يبدأ من هنا
                    </h2>

                    <p>
                        تعلّم، ابتكر، وطوّر مهاراتك لتكون جزءًا
                        من المستقبل الرقمي.
                    </p>

                    <div className="it-cta-buttons">

                        <Link
                            to="#"
                            className="it-primary-button"
                        >
                            تواصل معنا
                        </Link>

                        <Link
                            to="#programs"
                            className="it-cta-outline"
                        >
                            البرامج الأكاديمية
                        </Link>

                    </div>
                </div>
            </section>

        </main>
    );
}

export default ITCollege;