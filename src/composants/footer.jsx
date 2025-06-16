export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Nom / Logo */}
        <div className="text-lg font-bold">
          Mon<span className="text-cyan-400">Portfolio</span>
        </div>

        {/* Liens de navigation */}
        <div className="flex gap-6 text-sm">
          <a href="/#sliderCompetences" className="hover:text-cyan-400 transition">Compétences</a>
          <a href="/#skillSection" className="hover:text-cyan-400 transition">Mes Skills</a>
          <a href="/#feedbackSection" className="hover:text-cyan-400 transition">Mon Ressenti</a>
          <a href="/stage#header" className="hover:text-cyan-400 transition">Stage</a>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-cyan-400"></i>
          </a>
          <a href="https://linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-cyan-400"></i>
          </a>
          <a href="mailto:tonemail@example.com">
            <i className="fas fa-envelope hover:text-cyan-400"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 text-gray-400">
        © {new Date().getFullYear()} Mehiaoui. Tous droits réservés.
      </div>
    </footer>
  );
}
