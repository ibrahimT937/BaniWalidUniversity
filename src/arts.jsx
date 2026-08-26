
import "./arts.css";

function ArtsCollege() {
    return (
        <main className="arts-page" dir="rtl">

            {/* =========================
                Hero
            ========================= */}
            <section className="arts-hero" id="arts-home">
                <div className="arts-hero-overlay"></div>

                <div className="arts-hero-content">
                    <span className="arts-hero-label">
                        جامعة بني وليد
                    </span>

                    <h1>كلية الآداب</h1>

                    <p>
                        نحو بناء المعرفة الإنسانية وتنمية الفكر والإبداع
                    </p>

                    <div className="arts-hero-buttons">
                        <a href="#about" className="arts-primary-button">
                            تعرف على الكلية
                        </a>

                        <a href="#departments" className="arts-secondary-button">
                            الأقسام العلمية
                        </a>
                    </div>
                </div>

                <div className="arts-hero-shape"></div>
            </section>


            {/* =========================
                Quick Info
            ========================= */}
            <section className="arts-quick-section">
                <div className="arts-quick-grid">

                    <div className="arts-quick-card">
                        <div className="arts-quick-icon">
                            <i className="bi bi-book"></i>
                        </div>

                        <div>
                            <strong>برامج أكاديمية</strong>
                            <span>تخصصات إنسانية متنوعة</span>
                        </div>
                    </div>

                    <div className="arts-quick-card">
                        <div className="arts-quick-icon">
                            <i className="bi bi-mortarboard"></i>
                        </div>

                        <div>
                            <strong>تعليم متميز</strong>
                            <span>بيئة أكاديمية متطورة</span>
                        </div>
                    </div>

                    <div className="arts-quick-card">
                        <div className="arts-quick-icon">
                            <i className="bi bi-pen"></i>
                        </div>

                        <div>
                            <strong>البحث العلمي</strong>
                            <span>دعم الدراسات والبحوث</span>
                        </div>
                    </div>

                    <div className="arts-quick-card">
                        <div className="arts-quick-icon">
                            <i className="bi bi-lightbulb"></i>
                        </div>

                        <div>
                            <strong>إبداع وثقافة</strong>
                            <span>تنمية الفكر والإبداع</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* =========================
                About
            ========================= */}
            <section className="arts-about" id="about">
                <div className="arts-section-container">

                    <div className="arts-about-visual">
                        <div className="arts-about-image">
                            <div className="arts-literature-symbol">
                                <i className="bi bi-book-half"></i>
                            </div>
                        </div>

                        <div className="arts-about-badge">
                            <strong>ARTS</strong>
                            <span>Faculty of Arts</span>
                        </div>
                    </div>


                    <div className="arts-about-content">

                        <span className="arts-section-label">
                            عن الكلية
                        </span>

                        <h2>
                            نبني الفكر ونرعى الإبداع والمعرفة الإنسانية
                        </h2>

                        <p>
                            تسعى كلية الآداب بجامعة بني وليد إلى إعداد كوادر
                            علمية متخصصة في مجالات العلوم الإنسانية واللغات
                            والدراسات الأدبية والاجتماعية.
                        </p>

                        <p>
                            وتعمل الكلية على توفير بيئة تعليمية تساعد الطلبة
                            على تطوير مهارات التفكير والتحليل والبحث والكتابة،
                            وربط المعرفة الأكاديمية باحتياجات المجتمع.
                        </p>

                        <div className="arts-about-features">

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تعليم أكاديمي متخصص</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تنمية مهارات التفكير والتحليل</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تشجيع البحث العلمي</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>دعم الثقافة والإبداع</span>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* =========================
                Statistics
            ========================= */}
            <section className="arts-statistics">

                <div className="arts-section-header arts-light-header">
                    <span>الكلية بالأرقام</span>
                    <h2>مسيرة أكاديمية وإنسانية</h2>
                </div>

                <div className="arts-stat-grid">

                    <div className="arts-stat-card">
                        <i className="bi bi-people"></i>
                        <strong>+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="arts-stat-card">
                        <i className="bi bi-mortarboard"></i>
                        <strong>+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="arts-stat-card">
                        <i className="bi bi-diagram-3"></i>
                        <strong>4</strong>
                        <span>أقسام وتخصصات</span>
                    </div>

                    <div className="arts-stat-card">
                        <i className="bi bi-person-workspace"></i>
                        <strong>+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>

                </div>
            </section>


            {/* =========================
                Departments
            ========================= */}
            <section className="arts-departments" id="departments">

                <div className="arts-section-header">

                    <span>الأقسام العلمية</span>

                    <h2>
                        اختر مسارك في عالم العلوم الإنسانية
                    </h2>

                    <p>
                        تخصصات تساعدك على بناء المعرفة وتطوير مهاراتك
                        في المجالات الأدبية والإنسانية.
                    </p>

                </div>


                <div className="arts-department-grid">

                    {/* قسم اللغة العربية */}
                    <article className="arts-department-card">

                        <div className="arts-department-icon">
                            <i className="bi bi-pen"></i>
                        </div>

                        <span className="arts-department-number">
                            01
                        </span>

                        <h3>قسم اللغة العربية</h3>

                        <p>
                            يهتم بدراسة اللغة العربية وآدابها والنحو
                            والصرف والبلاغة والنقد الأدبي.
                        </p>

                        <a href="#arabic">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* قسم اللغة الإنجليزية */}
                    <article className="arts-department-card">

                        <div className="arts-department-icon">
                            <i className="bi bi-translate"></i>
                        </div>

                        <span className="arts-department-number">
                            02
                        </span>

                        <h3>قسم اللغة الإنجليزية</h3>

                        <p>
                            يهتم بدراسة اللغة الإنجليزية وآدابها
                            ومهارات التواصل والترجمة.
                        </p>

                        <a href="#english">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* قسم الدراسات الإسلامية */}
                    <article className="arts-department-card">

                        <div className="arts-department-icon">
                            <i className="bi bi-book"></i>
                        </div>

                        <span className="arts-department-number">
                            03
                        </span>

                        <h3>قسم الدراسات الإسلامية</h3>

                        <p>
                            يهتم بدراسة العلوم الإسلامية ومصادرها
                            وتاريخ الفكر والثقافة الإسلامية.
                        </p>

                        <a href="#islamic">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>


                    {/* قسم علم الاجتماع */}
                    <article className="arts-department-card">

                        <div className="arts-department-icon">
                            <i className="bi bi-people"></i>
                        </div>

                        <span className="arts-department-number">
                            04
                        </span>

                        <h3>قسم علم الاجتماع</h3>

                        <p>
                            يهتم بدراسة المجتمع والعلاقات الاجتماعية
                            والظواهر والتغيرات الاجتماعية.
                        </p>

                        <a href="#sociology">
                            المزيد
                            <i className="bi bi-arrow-left"></i>
                        </a>

                    </article>

                </div>
            </section>


            {/* =========================
                Programs
            ========================= */}
            <section className="arts-programs" id="programs">

                <div className="arts-section-container">

                    <div className="arts-programs-content">

                        <span className="arts-section-label">
                            البرامج الأكاديمية
                        </span>

                        <h2>
                            معرفة إنسانية ومهارات عملية
                        </h2>

                        <p>
                            تقدم الكلية برامج تعليمية تجمع بين المعرفة
                            النظرية والتطبيق العملي، وتساعد الطلبة على
                            تطوير قدراتهم العلمية والثقافية.
                        </p>


                        <div className="arts-program-list">

                            <div className="arts-program-item">

                                <span>01</span>

                                <div>
                                    <h3>اللغة والأدب</h3>

                                    <p>
                                        دراسة اللغات وآدابها وتطوير مهارات
                                        القراءة والكتابة والتحليل.
                                    </p>
                                </div>

                            </div>


                            <div className="arts-program-item">

                                <span>02</span>

                                <div>
                                    <h3>الدراسات الإنسانية</h3>

                                    <p>
                                        التعرف على الفكر والثقافة والتاريخ
                                        والمجتمع والإنسان.
                                    </p>
                                </div>

                            </div>


                            <div className="arts-program-item">

                                <span>03</span>

                                <div>
                                    <h3>البحث العلمي</h3>

                                    <p>
                                        تطوير مهارات البحث والتحليل وإعداد
                                        الدراسات العلمية.
                                    </p>
                                </div>

                            </div>


                            <div className="arts-program-item">

                                <span>04</span>

                                <div>
                                    <h3>الترجمة والتواصل</h3>

                                    <p>
                                        تنمية مهارات التواصل واللغة والترجمة
                                        في المجالات المختلفة.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>


                    <div className="arts-program-visual">

                        <div className="arts-book-window">

                            <div className="arts-window-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="arts-book-content">

                                <div className="arts-book-icon">
                                    <i className="bi bi-book-half"></i>
                                </div>

                                <h3>Knowledge</h3>

                                <p>
                                    اقرأ
                                </p>

                                <p>
                                    تعلّم
                                </p>

                                <p>
                                    فكّر
                                </p>

                                <p>
                                    أبدع
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =========================
                Services
            ========================= */}
            <section className="arts-services" id="services">

                <div className="arts-section-header">

                    <span>خدمات الكلية</span>

                    <h2>
                        كل ما يحتاجه الطالب في مكان واحد
                    </h2>

                </div>


                <div className="arts-services-grid">

                    <a href="#student-services" className="arts-service-card">

                        <i className="bi bi-person-lines-fill"></i>

                        <h3>خدمات الطلبة</h3>

                        <p>
                            معلومات وإرشادات تساعد الطلبة خلال مسيرتهم
                            الأكاديمية.
                        </p>

                        <span>
                            اكتشف المزيد
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>


                    <a href="#courses" className="arts-service-card">

                        <i className="bi bi-journal-bookmark"></i>

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


                    <a href="#library" className="arts-service-card">

                        <i className="bi bi-building"></i>

                        <h3>المكتبة</h3>

                        <p>
                            مصادر ومراجع علمية تساعد الطلبة والباحثين
                            في مسيرتهم الأكاديمية.
                        </p>

                        <span>
                            تعرف على المكتبة
                            <i className="bi bi-arrow-left"></i>
                        </span>

                    </a>


                    <a href="#research" className="arts-service-card">

                        <i className="bi bi-search"></i>

                        <h3>البحث العلمي</h3>

                        <p>
                            دعم الدراسات والبحوث والمشاريع العلمية
                            في مجالات العلوم الإنسانية.
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
            <section className="arts-news" id="news">

                <div className="arts-section-header">

                    <span>آخر الأخبار</span>

                    <h2>
                        أخبار وفعاليات الكلية
                    </h2>

                </div>


                <div className="arts-news-grid">

                    <article className="arts-news-card">

                        <div className="arts-news-image">
                            <i className="bi bi-calendar-event"></i>
                        </div>

                        <div className="arts-news-content">

                            <span>فعاليات</span>

                            <h3>
                                فعاليات ثقافية وأدبية
                            </h3>

                            <p>
                                تابع أحدث الأنشطة الثقافية والأدبية
                                التي تنظمها الكلية.
                            </p>

                            <a href="#news-1">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>

                    </article>


                    <article className="arts-news-card">

                        <div className="arts-news-image">
                            <i className="bi bi-award"></i>
                        </div>

                        <div className="arts-news-content">

                            <span>إنجازات</span>

                            <h3>
                                إبداعات ومشاريع الطلبة
                            </h3>

                            <p>
                                نماذج من الأعمال والمشاريع والإبداعات
                                الطلابية.
                            </p>

                            <a href="#news-2">
                                اقرأ المزيد
                                <i className="bi bi-arrow-left"></i>
                            </a>

                        </div>

                    </article>


                    <article className="arts-news-card">

                        <div className="arts-news-image">
                            <i className="bi bi-megaphone"></i>
                        </div>

                        <div className="arts-news-content">

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
            <section className="arts-cta">

                <div className="arts-cta-content">

                    <span>
                        كلية الآداب
                    </span>

                    <h2>
                        مستقبلك يبدأ بالمعرفة
                    </h2>

                    <p>
                        تعلّم، اقرأ، فكّر، وأبدع لتكون جزءًا من
                        مستقبل المعرفة والثقافة.
                    </p>

                    <div className="arts-cta-buttons">

                        <a href="#contact" className="arts-primary-button">
                            تواصل معنا
                        </a>

                        <a href="#programs" className="arts-cta-outline">
                            البرامج الأكاديمية
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default ArtsCollege;

