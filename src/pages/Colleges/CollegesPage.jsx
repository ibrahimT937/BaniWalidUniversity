import PageHero from '../../components/common/PageHero';
import SectionTitle from '../../components/common/SectionTitle';
import CollegeCard from '../../components/university/CollegeCard';
import { colleges } from '../../data/colleges';

export default function CollegesPage() {
  return (
    <>
      <PageHero title="الكليات" subtitle="استكشف الكليات والبرامج الأكاديمية المتنوعة في الجامعة." />
      <section className="container section">
        <SectionTitle eyebrow="التعليم الأكاديمي" title="كلياتنا" />
        <div className="colleges-grid">
          {colleges.map((college) => (
            <CollegeCard key={college.slug} college={college} />
          ))}
        </div>
      </section>
    </>
  );
}