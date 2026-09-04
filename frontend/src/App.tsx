import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Blog from './components/Blog';
import AIChatAssistant from './components/AIChatAssistant';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ViewProvider } from './context/ViewContext';

function App() {
  return (
    <ViewProvider>
      <main className="overflow-hidden">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Internships />
        <Blog />
        <AIChatAssistant />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </ViewProvider>
  );
}

export default App;
