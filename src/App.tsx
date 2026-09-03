import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToHash } from './components/ScrollToHash';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectNotFound } from './pages/ProjectNotFound';

const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<ProjectNotFound />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
