import "./EngineeringCollegePage.css";

function EngineeringCollege() {
    return (
        <main className="eng-page" dir="rtl">

            {/* Hero */}
            <section className="eng-hero" id="eng-home">
                <div className="eng-hero-overlay"></div>

                <div className="eng-hero-content">
                    <span className="eng-hero-label">
                        جامعة بني وليد
                    </span>

                    <h1>كلية الهندسة</h1>

                    <p>
                        نحو تعليم هندسي متطور وصناعة مستقبل قائم على
                        الابتكار والمعرفة والتقنية
                    </p>

                    <div className="eng-hero-buttons">
                        <a href="#about" className="eng-primary-button">
                            تعرف على الكلية
                        </a>

                        <a href="#departments" className="eng-secondary-button">
                            الأقسام العلمية
                        </a>
                    </div>
                </div>

                <div className="eng-hero-shape"></div>
            </section>


            {/* Quick Info */}
            <section className="eng-quick-section">
                <div className="eng-quick-grid">

                    <div className="eng-quick-card">
                        <div className="eng-quick-icon">
                            <i className="bi bi-mortarboard"></i>
                        </div>
                        <div>
                            <strong>برامج أكاديمية</strong>
                            <span>تعليم هندسي متخصص</span>
                        </div>
                    </div>

                    <div className="eng-quick-card">
                        <div className="eng-quick-icon">
                            <i className="bi bi-gear"></i>
                        </div>
                        <div>
                            <strong>بيئة هندسية</strong>
                            <span>معامل وتجهيزات تعليمية</span>
                        </div>
                    </div>

                    <div className="eng-quick-card">
                        <div className="eng-quick-icon">
                            <i className="bi bi-tools"></i>
                        </div>
                        <div>
                            <strong>تطبيق عملي</strong>
                            <span>مشاريع وتدريب هندسي</span>
                        </div>
                    </div>

                    <div className="eng-quick-card">
                        <div className="eng-quick-icon">
                            <i className="bi bi-lightbulb"></i>
                        </div>
                        <div>
                            <strong>ابتكار وإبداع</strong>
                            <span>حلول هندسية للمستقبل</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* About */}
            <section className="eng-about" id="about">
                <div className="eng-section-container">

                    <div className="eng-about-visual">
                        <div className="eng-about-image">
                            <div className="eng-tech-symbol">
                                <i className="bi bi-buildings"></i>
                            </div>
                        </div>

                        <div className="eng-about-badge">
                            <strong>ENG</strong>
                            <span>Engineering College</span>
                        </div>
                    </div>

                    <div className="eng-about-content">

                        <span className="eng-section-label">
                            عن الكلية
                        </span>

                        <h2>
                            نبني مهندسي المستقبل بالعلم والابتكار
                        </h2>

                        <p>
                            تسعى كلية الهندسة بجامعة بني وليد إلى إعداد
                            كوادر هندسية مؤهلة تمتلك المعرفة العلمية
                            والمهارات العملية التي تساعدها على المشاركة
                            في بناء وتطوير المجتمع.
                        </p>

                        <p>
                            وتهدف الكلية إلى توفير بيئة تعليمية تجمع بين
                            الدراسة النظرية والتطبيق العملي، مع الاهتمام
                            بالبحث العلمي والابتكار والتقنيات الهندسية
                            الحديثة.
                        </p>

                        <div className="eng-about-features">

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تعليم هندسي متخصص</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تطبيق عملي ومشاريع هندسية</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تطوير المهارات الهندسية</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تشجيع البحث والابتكار</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* Statistics */}
            <section className="eng-statistics">

                <div className="eng-section-header eng-light-header">
                    <span>الكلية بالأرقام</span>
                    <h2>مسيرة أكاديمية وهندسية</h2>
                </div>

                <div className="eng-stat-grid">

                    <div className="eng-stat-card">
                        <i className="bi bi-people"></i>
                        <strong>+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="eng-stat-card">
                        <i className="bi bi-mortarboard"></i>
                        <strong>+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="eng-stat-card">
                        <i className="bi bi-diagram-3"></i>
                        <strong>4</strong>
                        <span>أقسام هندسية</span>
                    </div>

                    <div className="eng-stat-card">
                        <i className="bi bi-person-workspace"></i>
                        <strong>+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>

                </div>
            </section>


            {/* Departments */}
            <section className="eng-departments" id="departments">

                <div className="eng-section-header">

                    <span>الأقسام العلمية</span>

                    <h2>
                        اختر مسارك في عالم الهندسة
                    </h2>

                    <p>
                        تخصصات هندسية تساعدك على بناء مهاراتك
                        والاستعداد للمستقبل المهني.
                    </p>

                </div>

                <div className="eng-department-grid">

                    <article className="eng-department-card">

                        <div className="eng-department-icon">
                            <i className="bi bi-lightning-charge"></i>
                        </div>

                        <span className="eng-department-number">
                            01
                        </span>

                        <h3>الهندسة الكهربائية</h3>

                        <p>
                            يهتم بدراسة الأنظمة الكهربائية والطاقة
                            والإلكترونيات وأنظمة التحكم.
                        </p>

                        <a href="#electrical">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    <article className="eng-department-card">

                        <div className="eng-department-icon">
                            <i className="bi bi-building"></i>
                        </div>

                        <span className="eng-department-number">
                            02
                        </span>

                        <h3>الهندسة المدنية</h3>

                        <p>
                            يهتم بتصميم وتنفيذ المنشآت والطرق
                            والبنية التحتية والأعمال الإنشائية.
                        </p>

                        <a href="#civil">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    <article className="eng-department-card">

                        <div className="eng-department-icon">
                            <i className="bi bi-gear-wide-connected"></i>
                        </div>

                        <span className="eng-department-number">
                            03
                        </span>

                        <h3>الهندسة الميكانيكية</h3>

                        <p>
                            يهتم بتصميم الآلات والأنظمة الميكانيكية
                            والطاقة والتطبيقات الصناعية.
                        </p>

                        <a href="#mechanical">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    <article className="eng-department-card">

                        <div className="eng-department-icon">
                            <i className="bi bi-cpu"></i>
                        </div>

                        <span className="eng-department-number">
                            04
                        </span>

                        <h3>هندسة الحاسوب</h3>

                        <p>
                            يجمع التخصص بين علوم الحاسوب والهندسة
                            الإلكترونية والأنظمة الرقمية.
                        </p>

                        <a href="#computer">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>

                </div>
            </section>


            {/* Programs */}
            <section className="eng-programs" id="programs">

                <div className="eng-section-container">

                    <div className="eng-programs-content">

                        <span className="eng-section-label">
                            البرامج الأكاديمية
                        </span>

                        <h2>
                            معرفة هندسية ومهارات عملية
                        </h2>

                        <p>
                            تقدم الكلية مسارات تعليمية تجمع بين
                            المعرفة النظرية والتطبيق العملي من خلال
                            المشاريع والتدريب والمختبرات الهندسية.
                        </p>

                        <div className="eng-program-list">

                            <div className="eng-program-item">
                                <span>01</span>
                                <div>
                                    <h3>الهندسة الكهربائية</h3>
                                    <p>
                                        دراسة الأنظمة الكهربائية
                                        والطاقة والإلكترونيات.
                                    </p>
                                </div>
                            </div>

                            <div className="eng-program-item">
                                <span>02</span>
                                <div>
                                    <h3>الهندسة المدنية</h3>
                                    <p>
                                        تصميم وتنفيذ المنشآت والبنية
                                        التحتية.
                                    </p>
                                </div>
                            </div>

                            <div className="eng-program-item">
                                <span>03</span>
                                <div>
                                    <h3>الهندسة الميكانيكية</h3>
                                    <p>
                                        دراسة الآلات والأنظمة
                                        الميكانيكية والطاقة.
                                    </p>
                                </div>
                            </div>

                            <div className="eng-program-item">
                                <span>04</span>
                                <div>
                                    <h3>هندسة الحاسوب</h3>
                                    <p>
                                        الأنظمة الرقمية والحوسبة
                                        والإلكترونيات.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="eng-program-visual">

                        <div className="eng-engineering-box">

                            <i className="bi bi-gear-wide-connected"></i>

                            <div className="eng-circle circle-one"></div>
                            <div className="eng-circle circle-two"></div>
                            <div className="eng-circle circle-three"></div>

                            <span>ENGINEERING</span>

                        </div>

                    </div>

                </div>
            </section>


            {/* Services */}
            <section className="eng-services" id="services">

                <div className="eng-section-header">

                    <span>خدمات الكلية</span>

                    <h2>
                        كل ما يحتاجه الطالب في مكان واحد
                    </h2>

                </div>

                <div className="eng-services-grid">

                    <a href="#student-services" className="eng-service-card">
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
                    </a>

                    <a href="#courses" className="eng-service-card">
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
                    </a>

                    <a href="#labs" className="eng-service-card">
                        <i className="bi bi-tools"></i>
                        <h3>المعامل الهندسية</h3>
                        <p>
                            معامل مجهزة لدعم التدريب والتطبيق
                            العملي.
                        </p>
                        <span>
                            تعرف على المعامل
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </a>

                    <a href="#research" className="eng-service-card">
                        <i className="bi bi-search"></i>
                        <h3>البحث العلمي</h3>
                        <p>
                            دعم البحث العلمي والمشاريع والابتكار
                            في المجالات الهندسية.
                        </p>
                        <span>
                            البحث العلمي
                            <i className="bi bi-arrow-left"></i>
                        </span>
                    </a>

                </div>
            </section>


            {/* News */}
            <section className="eng-news" id="news">

                <div className="eng-section-header">

                    <span>آخر الأخبار</span>

                    <h2>
                        أخبار وفعاليات الكلية
                    </h2>

                </div>

                <div className="eng-news-grid">

                    <article className="eng-news-card">

                        <div className="eng-news-image">
                            <i className="bi bi-calendar-event"></i>
                        </div>

                        <div className="eng-news-content">

                            <span>فعاليات</span>

                            <h3>
                                فعاليات وأنشطة طلابية هندسية
                            </h3>

                            <p>
                                تابع أحدث الأنشطة والفعاليات التي
                                تنظمها الكلية لطلابها.
                            </p>

                            <a href="#news-1">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>
                    </article>


                    <article className="eng-news-card">

                        <div className="eng-news-image">
                            <i className="bi bi-award"></i>
                        </div>

                        <div className="eng-news-content">

                            <span>إنجازات</span>

                            <h3>
                                مشاريع وابتكارات طلبة الكلية
                            </h3>

                            <p>
                                نماذج من المشاريع الهندسية
                                والابتكارات الطلابية.
                            </p>

                            <a href="#news-2">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>
                    </article>


                    <article className="eng-news-card">

                        <div className="eng-news-image">
                            <i className="bi bi-megaphone"></i>
                        </div>

                        <div className="eng-news-content">

                            <span>إعلانات</span>

                            <h3>
                                إعلانات وتنويهات الكلية
                            </h3>

                            <p>
                                تابع آخر الإعلانات والتنويهات
                                المهمة للطلبة.
                            </p>

                            <a href="#news-3">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>
                    </article>

                </div>
            </section>


            {/* CTA */}
            <section className="eng-cta">

                <div className="eng-cta-content">

                    <span>كلية الهندسة</span>

                    <h2>
                        مستقبلك الهندسي يبدأ من هنا
                    </h2>

                    <p>
                        تعلّم، ابتكر، وصمّم حلولًا هندسية
                        تصنع مستقبلًا أفضل.
                    </p>

                    <div className="eng-cta-buttons">

                        <a
                            href="#contact"
                            className="eng-primary-button"
                        >
                            تواصل معنا
                        </a>

                        <a
                            href="#programs"
                            className="eng-cta-outline"
                        >
                            البرامج الأكاديمية
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default EngineeringCollege;