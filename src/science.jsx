
import "./science.css";
import { Link } from "react-router-dom";

function ScienceCollege() {
    return (
        <main className="science-page" dir="rtl">

            {/* =========================
                Hero
            ========================= */}
            <section className="science-hero" id="science-home">
                <div className="science-hero-overlay"></div>

                <div className="science-hero-content">
                    <span className="science-hero-label">
                        جامعة بني وليد
                    </span>

                    <h1>كلية العلوم</h1>

                    <p>
                        نحو تعليم علمي متميز وبناء جيل قادر على صناعة
                        المعرفة والابتكار العلمي
                    </p>

                    <div className="science-hero-buttons">
                        <a href="#about" className="science-primary-button">
                            تعرف على الكلية
                        </a>

                        <a href="#departments" className="science-secondary-button">
                            الأقسام العلمية
                        </a>
                    </div>
                </div>

                <div className="science-hero-shape"></div>
            </section>


            {/* =========================
                Quick Info
            ========================= */}
            <section className="science-quick-section">
                <div className="science-quick-grid">

                    <div className="science-quick-card">
                        <div className="science-quick-icon">
                            <i className="bi bi-mortarboard"></i>
                        </div>

                        <div>
                            <strong>برامج أكاديمية</strong>
                            <span>تعليم علمي متخصص</span>
                        </div>
                    </div>

                    <div className="science-quick-card">
                        <div className="science-quick-icon">
                            <i className="bi bi-flask"></i>
                        </div>

                        <div>
                            <strong>مختبرات علمية</strong>
                            <span>تجارب وتطبيقات عملية</span>
                        </div>
                    </div>

                    <div className="science-quick-card">
                        <div className="science-quick-icon">
                            <i className="bi bi-calculator"></i>
                        </div>

                        <div>
                            <strong>مهارات علمية</strong>
                            <span>رياضيات وتحليل وبحث</span>
                        </div>
                    </div>

                    <div className="science-quick-card">
                        <div className="science-quick-icon">
                            <i className="bi bi-lightbulb"></i>
                        </div>

                        <div>
                            <strong>بحث وابتكار</strong>
                            <span>تشجيع البحث العلمي</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* =========================
                About
            ========================= */}
            <section className="science-about" id="about">

                <div className="science-section-container">

                    <div className="science-about-visual">

                        <div className="science-about-image">
                            <div className="science-tech-symbol">
                                <i className="bi bi-beaker"></i>
                            </div>
                        </div>

                        <div className="science-about-badge">
                            <strong>SCI</strong>
                            <span>Faculty of Science</span>
                        </div>

                    </div>


                    <div className="science-about-content">

                        <span className="science-section-label">
                            عن الكلية
                        </span>

                        <h2>
                            العلم والمعرفة أساس بناء المستقبل
                        </h2>

                        <p>
                            تسعى كلية العلوم بجامعة بني وليد إلى تقديم تعليم
                            علمي متميز وإعداد كوادر مؤهلة في مختلف مجالات
                            العلوم الأساسية، من خلال بيئة تعليمية تجمع بين
                            المعرفة النظرية والتطبيق العملي.
                        </p>

                        <p>
                            وتهدف الكلية إلى تطوير مهارات الطلبة في مجالات
                            الرياضيات والفيزياء والكيمياء وعلوم الحياة
                            وغيرها من العلوم، مع تشجيع البحث العلمي
                            والابتكار والتفكير العلمي.
                        </p>

                        <div className="science-about-features">

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تعليم علمي متخصص</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>مختبرات وتجارب عملية</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تطوير مهارات الطلبة</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تشجيع البحث والابتكار</span>
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                Statistics
            ========================= */}
            <section className="science-statistics">

                <div className="science-section-header science-light-header">

                    <span>الكلية بالأرقام</span>

                    <h2>
                        مسيرة علمية وأكاديمية
                    </h2>

                </div>


                <div className="science-stat-grid">

                    <div className="science-stat-card">
                        <i className="bi bi-people"></i>
                        <strong>+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="science-stat-card">
                        <i className="bi bi-mortarboard"></i>
                        <strong>+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="science-stat-card">
                        <i className="bi bi-diagram-3"></i>
                        <strong>4</strong>
                        <span>أقسام علمية</span>
                    </div>

                    <div className="science-stat-card">
                        <i className="bi bi-person-workspace"></i>
                        <strong>+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>

                </div>

            </section>


            {/* =========================
                Departments
            ========================= */}
            <section
                className="science-departments"
                id="departments"
            >

                <div className="science-section-header">

                    <span>الأقسام العلمية</span>

                    <h2>
                        اكتشف تخصصك في عالم العلوم
                    </h2>

                    <p>
                        تخصصات علمية تساعدك على بناء المعرفة وتطوير
                        مهارات التفكير والتحليل والبحث العلمي.
                    </p>

                </div>


                <div className="science-department-grid">

                    {/* Mathematics */}
                    <article className="science-department-card">

                        <div className="science-department-icon">
                            <i className="bi bi-calculator"></i>
                        </div>

                        <span className="science-department-number">
                            01
                        </span>

                        <h3>
                            قسم الرياضيات
                        </h3>

                        <p>
                            يهتم بدراسة الرياضيات النظرية والتطبيقية
                            والتحليل الرياضي والإحصاء والمفاهيم الرياضية
                            الحديثة.
                        </p>

                        <a href="#mathematics" className="science-more">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* Physics */}
                    <article className="science-department-card">

                        <div className="science-department-icon">
                            <i className="bi bi-activity"></i>
                        </div>

                        <span className="science-department-number">
                            02
                        </span>

                        <h3>
                            قسم الفيزياء
                        </h3>

                        <p>
                            يهتم بدراسة الظواهر الفيزيائية والطاقة
                            والحركة والكهرباء والمغناطيسية والفيزياء
                            الحديثة.
                        </p>

                        <a href="#physics" className="science-more">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* Chemistry */}
                    <article className="science-department-card">

                        <div className="science-department-icon">
                            <i className="bi bi-droplet-half"></i>
                        </div>

                        <span className="science-department-number">
                            03
                        </span>

                        <h3>
                            قسم الكيمياء
                        </h3>

                        <p>
                            يهتم بدراسة المواد والتفاعلات الكيميائية
                            والكيمياء العضوية وغير العضوية والتطبيقات
                            الكيميائية.
                        </p>

                        <a href="#chemistry" className="science-more">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* Biology */}
                    <article className="science-department-card">

                        <div className="science-department-icon">
                            <i className="bi bi-virus"></i>
                        </div>

                        <span className="science-department-number">
                            04
                        </span>

                        <h3>
                            قسم علوم الحياة
                        </h3>

                        <p>
                            يهتم بدراسة الكائنات الحية والخلايا والأنظمة
                            الحيوية ومبادئ علم الأحياء والتطبيقات الحديثة.
                        </p>

                        <a href="#biology" className="science-more">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>

                </div>

            </section>


            {/* =========================
                Programs
            ========================= */}
            <section className="science-programs" id="programs">

                <div className="science-section-container">

                    <div className="science-programs-content">

                        <span className="science-section-label">
                            البرامج الأكاديمية
                        </span>

                        <h2>
                            معرفة علمية ومهارات عملية
                        </h2>

                        <p>
                            توفر الكلية برامج ومسارات تعليمية تجمع بين
                            الدراسة النظرية والتطبيق العملي داخل
                            المختبرات العلمية.
                        </p>


                        <div className="science-program-list">

                            <div className="science-program-item">
                                <span>01</span>

                                <div>
                                    <h3>
                                        الرياضيات والإحصاء
                                    </h3>

                                    <p>
                                        دراسة المفاهيم الرياضية والتحليل
                                        والإحصاء والتطبيقات المختلفة.
                                    </p>
                                </div>
                            </div>


                            <div className="science-program-item">
                                <span>02</span>

                                <div>
                                    <h3>
                                        الفيزياء
                                    </h3>

                                    <p>
                                        دراسة قوانين الفيزياء والطاقة
                                        والحركة والتطبيقات العملية.
                                    </p>
                                </div>
                            </div>


                            <div className="science-program-item">
                                <span>03</span>

                                <div>
                                    <h3>
                                        الكيمياء
                                    </h3>

                                    <p>
                                        التعرف على المواد والتفاعلات
                                        والتجارب الكيميائية المختلفة.
                                    </p>
                                </div>
                            </div>


                            <div className="science-program-item">
                                <span>04</span>

                                <div>
                                    <h3>
                                        علوم الحياة
                                    </h3>

                                    <p>
                                        دراسة الكائنات الحية والخلايا
                                        والأنظمة الحيوية.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="science-program-visual">

                        <div className="science-lab-window">

                            <div className="science-window-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="science-lab-content">

                                <i className="bi bi-beaker"></i>

                                <h3>
                                    Science
                                </h3>

                                <p>
                                    Explore • Discover • Innovate
                                </p>

                                <div className="science-formula">
                                    E = mc²
                                </div>

                                <div className="science-formula">
                                    H₂O + CO₂
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                Services
            ========================= */}
            <section className="science-services" id="services">

                <div className="science-section-header">

                    <span>خدمات الكلية</span>

                    <h2>
                        بيئة علمية متكاملة للطالب
                    </h2>

                </div>


                <div className="science-services-grid">

                    <a href="#student-services" className="science-service-card">

                        <i className="bi bi-person-lines-fill"></i>

                        <h3>
                            خدمات الطلبة
                        </h3>

                        <p>
                            معلومات وإرشادات تساعد الطلبة خلال مسيرتهم
                            الأكاديمية.
                        </p>

                        <span>
                            اكتشف المزيد
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>


                    <a href="#courses" className="science-service-card">

                        <i className="bi bi-journal-bookmark"></i>

                        <h3>
                            المقررات الدراسية
                        </h3>

                        <p>
                            الاطلاع على المقررات والخطط الدراسية
                            والبرامج الأكاديمية.
                        </p>

                        <span>
                            عرض المقررات
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>


                    <a href="#labs" className="science-service-card">

                        <i className="bi bi-eyedropper"></i>

                        <h3>
                            المختبرات العلمية
                        </h3>

                        <p>
                            مختبرات مجهزة لدعم التجارب والتدريب
                            والتطبيق العملي.
                        </p>

                        <span>
                            تعرف على المختبرات
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>


                    <a href="#research" className="science-service-card">

                        <i className="bi bi-search"></i>

                        <h3>
                            البحث العلمي
                        </h3>

                        <p>
                            دعم البحث العلمي والمشاريع والابتكار
                            في مختلف المجالات العلمية.
                        </p>

                        <span>
                            البحث العلمي
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>

                </div>

            </section>


            {/* =========================
                News
            ========================= */}
            <section className="science-news" id="news">

                <div className="science-section-header">

                    <span>آخر الأخبار</span>

                    <h2>
                        أخبار وفعاليات كلية العلوم
                    </h2>

                </div>


                <div className="science-news-grid">

                    <article className="science-news-card">

                        <div className="science-news-image">
                            <i className="bi bi-calendar-event"></i>
                        </div>

                        <div className="science-news-content">

                            <span>فعاليات</span>

                            <h3>
                                فعاليات وأنشطة علمية وطلابية
                            </h3>

                            <p>
                                تابع أحدث الأنشطة والفعاليات العلمية
                                التي تنظمها الكلية لطلابها.
                            </p>

                            <a href="#news-1">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>

                    </article>


                    <article className="science-news-card">

                        <div className="science-news-image">
                            <i className="bi bi-award"></i>
                        </div>

                        <div className="science-news-content">

                            <span>إنجازات</span>

                            <h3>
                                مشاريع وأبحاث طلبة الكلية
                            </h3>

                            <p>
                                نماذج من المشاريع العلمية والأبحاث
                                والإنجازات الطلابية.
                            </p>

                            <a href="#news-2">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>

                    </article>


                    <article className="science-news-card">

                        <div className="science-news-image">
                            <i className="bi bi-megaphone"></i>
                        </div>

                        <div className="science-news-content">

                            <span>إعلانات</span>

                            <h3>
                                إعلانات وتنويهات الكلية
                            </h3>

                            <p>
                                تابع آخر الإعلانات والتنويهات المهمة
                                للطلبة.
                            </p>

                            <a href="#news-3">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>

                    </article>

                </div>

            </section>


            {/* =========================
                CTA
            ========================= */}
            <section className="science-cta">

                <div className="science-cta-content">

                    <span>
                        كلية العلوم
                    </span>

                    <h2>
                        اكتشف عالم العلوم واصنع مستقبلك
                    </h2>

                    <p>
                        تعلّم، ابحث، اكتشف وكن جزءًا من مسيرة
                        العلم والابتكار.
                    </p>

                    <div className="science-cta-buttons">

                        <Link
                            to="/"
                            className="science-primary-button"
                        >
                            تواصل معنا
                        </Link>

                        <a
                            href="#programs"
                            className="science-cta-outline"
                        >
                            البرامج الأكاديمية
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ScienceCollege;

