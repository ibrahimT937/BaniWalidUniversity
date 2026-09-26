import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import AboutUniversityPage from '../pages/About/AboutUniversityPage';
import CollegesPage from '../pages/Colleges/CollegesPage';
import CollegeDetailsPage from '../pages/Colleges/CollegeDetailsPage';
import EngineeringCollegePage from '../pages/Colleges/EngineeringCollegePage';
import InformationTechnologyCollegePage from '../pages/Colleges/InformationTechnologyCollegePage';
import ArtsCollegePage from '../pages/Colleges/ArtsCollegePage';
import ScienceCollegePage from '../pages/Colleges/ScienceCollegePage';
import StudentsPage from '../pages/Students/StudentsPage';
import GraduatesPage from '../pages/Graduates/GraduatesPage';
import AdministrationPage from '../pages/Administration/AdministrationPage';
import NewsPage from '../pages/News/NewsPage';
import ContactPage from '../pages/Contact/ContactPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-university" element={<AboutUniversityPage />} />
        <Route path="/colleges" element={<CollegesPage />} />
        <Route path="/colleges/:slug" element={<CollegeDetailsPage />} />
        <Route path="/it" element={<InformationTechnologyCollegePage />} />
        <Route path="/engineering" element={<EngineeringCollegePage />} />
        <Route path="/arts" element={<ArtsCollegePage />} />
        <Route path="/science" element={<ScienceCollegePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/graduates" element={<GraduatesPage />} />
        <Route path="/administration" element={<AdministrationPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}