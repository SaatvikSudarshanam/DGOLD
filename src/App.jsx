import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import PersonasPage from './pages/PersonasPage';
import ComparePage from './pages/ComparePage';
import ModulesPage from './pages/ModulesPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import CaseStudyPage from './pages/CaseStudyPage';
import DemoPage from './pages/DemoPage';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/who-its-for" element={<PersonasPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/request-demo" element={<DemoPage />} />
        </Routes>
        <Footer />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
