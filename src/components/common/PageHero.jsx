export default function PageHero({ title, subtitle, eyebrow = 'منصة الجامعة' }) {
  return <section className="page-hero"><div className="container">
    <span>{eyebrow}</span><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}
  </div></section>;
}