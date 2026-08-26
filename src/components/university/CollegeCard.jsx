import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function CollegeCard({ college }) {
  return <article className="college-card">
    <div className="college-icon">{college.icon}</div>
    <span className="tag">{college.type}</span>
    <h3>{college.name}</h3>
    <p>{college.description}</p>
    <Link to={`/colleges/${college.slug}`}>استكشف الكلية <ArrowLeft size={17}/></Link>
  </article>;
}