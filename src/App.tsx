import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToHash } from './components/ScrollToHash';
import { HomePage } from './pages/HomePage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ProjectNotFound } from './pages/ProjectNotFound';

const basename = import.meta.env.BASE_URL.replace(/\/+$/, '');

function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<ProjectNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;