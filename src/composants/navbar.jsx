// importer le css
import '../styles/navBar.css';

function Navbar({ darkLink = false }) {
    const linkClass = darkLink ? "text-black" : "text-white";

    return (
        <div className="navbar flex justify-around items-center">
            <div className={`logo ml-10 text-2xl font-bold ${linkClass}`}>
                <a href="/#header">Portfolio</a>
            </div>
            <div className="links flex justify-between items-center gap-x-6 px-6 py-6 mr-10 text-base">
                <a href="/#sliderCompetences" className={`ancre ${linkClass}`}>Compétences</a>
                <a href="/#skillSection" className={`ancre ${linkClass}`}>Mes Skills</a>
                <a href="/#feedbackSection" className={`ancre ${linkClass}`}>Mon ressenti</a>
            </div>
        </div>
    );
}

export default Navbar;
