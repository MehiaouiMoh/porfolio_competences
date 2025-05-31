// MobileNavBar.js
import { Home, Brain, Code, MessageSquare } from 'lucide-react'; // Icônes modernes
import '../styles/mobileNavbar.css'; // ou tu peux utiliser Tailwind directement

function MobileNavBar() {
  return (
    <div className="mobile-nav">
      <a href="#home" className="nav-item">
        <Home size={24} />
        <span>Home</span>
      </a>
      <a href="#sliderCompetences" className="nav-item">
        <Brain size={24} />
        <span>Compétences</span>
      </a>
      <a href="#skillSection" className="nav-item">
        <Code size={24} />
        <span>Skills</span>
      </a>
      <a href="#feedbackSection" className="nav-item">
        <MessageSquare size={24} />
        <span>Ressenti</span>
      </a>
    </div>
  );
}

export default MobileNavBar;
