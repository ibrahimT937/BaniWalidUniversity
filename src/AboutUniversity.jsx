
import "./about-university.css";

function AboutUniversity() {
    return (
        <main className="about-university-page" dir="rtl">

            {/* Hero */}
            <section className="about-university-hero">
                <div className="about-university-hero-overlay"></div>

                <div className="about-university-hero-content">
                    <span className="about-university-label">
                        جامعة بني وليد
                    </span>

                    <h1>نبذة عن الجامعة</h1>

                    <p>
                        صرح علمي يسعى إلى بناء المعرفة، وتنمية القدرات،
                        وصناعة مستقبل أكاديمي وتقني متميز.
                    </p>

                    <div className="about-university-buttons">
                        <a href="#about" className="about-primary-button">
                            تعرف على الجامعة
                        </a>

                        <a href="#vision" className="about-secondary-button">
                            رؤيتنا ورسالتنا
                        </a>
                    </div>
                </div>

                <div className="about-hero-circle circle-one"></div>
                <div className="about-hero-circle circle-two"></div>
            </section>


            {/* Introduction */}
            <section className="about-introduction" id="about">
                <div className="about-introduction-container">

                    <div className="about-introduction-visual">
                        <div className="about-logo-box">
                            <i className="bi bi-building"></i>
                            <strong>BUW</strong>
                            <span>Bani Waleed University</span>
                        </div>

                        <div className="about-floating-card">
                            <i className="bi bi-mortarboard-fill"></i>
                            <div>
                                <strong>جامعة بني وليد</strong>
                                <span>تعليم • معرفة • ابتكار</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-introduction-content">
                        <span className="about-section-label">
                            من نحن
                        </span>

                        <h2>
                            جامعة بني وليد...
                            <br />
                            نحو مستقبل أكاديمي أكثر تطورًا
                        </h2>

                        <p>
                            تعد جامعة بني وليد مؤسسة تعليمية تسعى إلى تقديم
                            تعليم جامعي متميز، والمساهمة في بناء مجتمع المعرفة
                            من خلال إعداد كوادر علمية وأكاديمية قادرة على
                            مواكبة التطورات الحديثة.
                        </p>

                        <p>
                            تعمل الجامعة على توفير بيئة تعليمية تشجع على
                            التفكير والإبداع والبحث العلمي، وتسعى إلى تطوير
                            برامجها الأكاديمية وخدماتها بما يخدم الطلبة
                            والمجتمع وسوق العمل.
                        </p>

                        <div className="about-check-list">
                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تعليم جامعي متميز</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تشجيع البحث العلمي</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>تنمية مهارات الطلبة</span>
                            </div>

                            <div>
                                <i className="bi bi-check-circle-fill"></i>
                                <span>خدمة المجتمع</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Values */}
            <section className="about-values">
                <div className="about-section-heading">
                    <span>قيم الجامعة</span>
                    <h2>مبادئ نبني بها المستقبل</h2>
                    <p>
                        نؤمن بأن الجامعة ليست مكانًا للتعلم فقط،
                        بل بيئة لصناعة الأفكار والطاقات.
                    </p>
                </div>

                <div className="about-values-grid">

                    <article className="about-value-card">
                        <div className="about-value-icon">
                            <i className="bi bi-award-fill"></i>
                        </div>
                        <span>01</span>
                        <h3>التميز</h3>
                        <p>
                            السعي المستمر إلى رفع جودة التعليم والأداء
                            الأكاديمي والإداري.
                        </p>
                    </article>

                    <article className="about-value-card">
                        <div className="about-value-icon">
                            <i className="bi bi-lightbulb-fill"></i>
                        </div>
                        <span>02</span>
                        <h3>الابتكار</h3>
                        <p>
                            تشجيع الأفكار الجديدة والإبداع والبحث عن
                            حلول علمية مبتكرة.
                        </p>
                    </article>

                    <article className="about-value-card">
                        <div className="about-value-icon">
                            <i className="bi bi-people-fill"></i>
                        </div>
                        <span>03</span>
                        <h3>المشاركة</h3>
                        <p>
                            تعزيز التعاون بين الطلبة وأعضاء هيئة التدريس
                            ومؤسسات المجتمع.
                        </p>
                    </article>

                    <article className="about-value-card">
                        <div className="about-value-icon">
                            <i className="bi bi-shield-check"></i>
                        </div>
                        <span>04</span>
                        <h3>المسؤولية</h3>
                        <p>
                            الالتزام بالمسؤولية الأكاديمية والمهنية
                            وخدمة المجتمع.
                        </p>
                    </article>

                </div>
            </section>


            {/* Vision & Mission */}
            <section className="about-vision" id="vision">

                <div className="about-vision-container">

                    <div className="about-vision-card vision-card">
                        <div className="about-big-icon">
                            <i className="bi bi-eye-fill"></i>
                        </div>

                        <div>
                            <span>رؤيتنا</span>
                            <h2>جامعة رائدة في التعليم والمعرفة</h2>

                            <p>
                                أن تكون جامعة بني وليد مؤسسة أكاديمية
                                متميزة وفاعلة، تسهم في بناء مجتمع قائم
                                على العلم والمعرفة والابتكار.
                            </p>
                        </div>
                    </div>


                    <div className="about-vision-card mission-card">
                        <div className="about-big-icon">
                            <i className="bi bi-bullseye"></i>
                        </div>

                        <div>
                            <span>رسالتنا</span>
                            <h2>إعداد كوادر قادرة على صناعة المستقبل</h2>

                            <p>
                                تقديم تعليم جامعي وبحث علمي متميز،
                                وتنمية مهارات الطلبة، ودعم الابتكار،
                                والمساهمة في خدمة المجتمع والتنمية.
                            </p>
                        </div>
                    </div>

                </div>

            </section>


            {/* Goals */}
            <section className="about-goals">
                <div className="about-section-heading">
                    <span>أهداف الجامعة</span>
                    <h2>نحو بيئة أكاديمية متطورة</h2>
                </div>

                <div className="about-goals-container">

                    <div className="about-goals-list">

                        <div className="about-goal">
                            <div className="goal-number">01</div>
                            <div>
                                <h3>تطوير التعليم</h3>
                                <p>
                                    تطوير البرامج والمناهج الأكاديمية
                                    بما يتناسب مع احتياجات العصر.
                                </p>
                            </div>
                        </div>

                        <div className="about-goal">
                            <div className="goal-number">02</div>
                            <div>
                                <h3>دعم البحث العلمي</h3>
                                <p>
                                    توفير بيئة تشجع أعضاء هيئة التدريس
                                    والطلبة على البحث والابتكار.
                                </p>
                            </div>
                        </div>

                        <div className="about-goal">
                            <div className="goal-number">03</div>
                            <div>
                                <h3>خدمة المجتمع</h3>
                                <p>
                                    تعزيز دور الجامعة في خدمة المجتمع
                                    والمساهمة في التنمية.
                                </p>
                            </div>
                        </div>

                        <div className="about-goal">
                            <div className="goal-number">04</div>
                            <div>
                                <h3>تنمية مهارات الطلبة</h3>
                                <p>
                                    إعداد خريجين يمتلكون المعرفة والمهارات
                                    التي تؤهلهم لسوق العمل.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="about-goals-visual">
                        <div className="goals-icon-circle">
                            <i className="bi bi-bank2"></i>
                        </div>

                        <span>KNOWLEDGE</span>
                        <strong>المعرفة تصنع المستقبل</strong>
                    </div>

                </div>
            </section>


            {/* Statistics */}
            <section className="about-statistics">

                <div className="about-section-heading light-heading">
                    <span>الجامعة بالأرقام</span>
                    <h2>مسيرة أكاديمية نفتخر بها</h2>
                </div>

                <div className="about-stat-grid">

                    <div className="about-stat">
                        <i className="bi bi-building"></i>
                        <strong>12+</strong>
                        <span>كلية ومؤسسة أكاديمية</span>
                    </div>

                    <div className="about-stat">
                        <i className="bi bi-people-fill"></i>
                        <strong>12,500+</strong>
                        <span>طالب وطالبة</span>
                    </div>

                    <div className="about-stat">
                        <i className="bi bi-mortarboard-fill"></i>
                        <strong>18,000+</strong>
                        <span>خريج</span>
                    </div>

                    <div className="about-stat">
                        <i className="bi bi-person-workspace"></i>
                        <strong>850+</strong>
                        <span>عضو هيئة تدريس</span>
                    </div>

                </div>
            </section>


            {/* Academic Environment */}
            <section className="about-environment">

                <div className="about-environment-container">

                    <div className="environment-content">
                        <span className="about-section-label">
                            البيئة الجامعية
                        </span>

                        <h2>
                            بيئة تعليمية تجمع بين المعرفة والتطبيق
                        </h2>

                        <p>
                            تسعى الجامعة إلى توفير بيئة أكاديمية تساعد
                            الطالب على التعلم والتطوير واكتساب المهارات
                            العلمية والعملية.
                        </p>

                        <div className="environment-features">

                            <div>
                                <i className="bi bi-book-half"></i>
                                <div>
                                    <strong>تعليم أكاديمي</strong>
                                    <span>برامج وتخصصات متنوعة</span>
                                </div>
                            </div>

                            <div>
                                <i className="bi bi-flask"></i>
                                <div>
                                    <strong>بحث علمي</strong>
                                    <span>تشجيع البحث والابتكار</span>
                                </div>
                            </div>

                            <div>
                                <i className="bi bi-laptop"></i>
                                <div>
                                    <strong>تقنية حديثة</strong>
                                    <span>مواكبة التطور الرقمي</span>
                                </div>
                            </div>

                            <div>
                                <i className="bi bi-globe2"></i>
                                <div>
                                    <strong>انفتاح معرفي</strong>
                                    <span>التواصل مع المجتمع</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="environment-visual">
                        <div className="environment-main-icon">
                            <i className="bi bi-mortarboard-fill"></i>
                        </div>

                        <div className="environment-small-icon icon-a">
                            <i className="bi bi-book"></i>
                        </div>

                        <div className="environment-small-icon icon-b">
                            <i className="bi bi-lightbulb"></i>
                        </div>

                        <div className="environment-small-icon icon-c">
                            <i className="bi bi-laptop"></i>
                        </div>
                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="about-cta">

                <div className="about-cta-content">

                    <span>جامعة بني وليد</span>

                    <h2>
                        المعرفة اليوم...
                        تصنع مستقبل الغد
                    </h2>

                    <p>
                        نسعى معًا لبناء بيئة جامعية أكثر تطورًا،
                        ودعم الطلبة في رحلتهم نحو النجاح.
                    </p>

                    <div className="about-cta-buttons">
                        <a href="#vision" className="about-primary-button">
                            رؤيتنا ورسالتنا
                        </a>

                        <a href="/" className="about-cta-outline">
                            العودة للرئيسية
                        </a>
                    </div>

                </div>

            </section>

        </main>
    );
}

export default AboutUniversity;

