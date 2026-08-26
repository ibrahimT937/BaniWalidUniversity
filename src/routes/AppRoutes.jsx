import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Colleges from '../pages/Colleges';
import CollegeDetails from '../pages/CollegeDetails';
import Students from '../pages/Students';
import Graduates from '../pages/Graduates';
import Administration from '../pages/Administration';
import News from '../pages/News';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:slug" element={<CollegeDetails />} />
        <Route path="/students" element={<Students />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}