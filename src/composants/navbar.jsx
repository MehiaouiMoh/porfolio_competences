//importer le css
import '../styles/navBar.css'


function Navbar(){
    return(
        <div className = "navbar flex justify-between items-center">
            <div class="logo ml-10 text-xl font-bold">Portfolio</div>
            <div class="links flex justify-between items-center gap-x-6 px-6 py-6 mr-10 text-base font-medium">
                <a href="" className="ancre">A propos du BUT</a>
                <a href="" className="ancre">Compétences</a>
                <a href="" className="ancre">Mon ressenti</a>
            </div>
        </div>
    );
}

export default Navbar;