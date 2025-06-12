//importer le css
import '../styles/navBar.css'


function Navbar(){
    return(
        <div className = "navbar flex justify-around items-center text-white">
            <div className="logo ml-10 text-2xl font-bold"><a href="#header">Portfolio</a></div>
            <div className="links flex justify-between items-center gap-x-6 px-6 py-6 mr-10 text-base">
                <a href="#sliderCompetences" className="ancre">Compétences</a>
                <a href="#skillSection" className="ancre">Mes Skills</a>
                <a href="#feedbackSection" className="ancre">Mon ressenti</a>
            </div>
        </div>
    );
}

export default Navbar;