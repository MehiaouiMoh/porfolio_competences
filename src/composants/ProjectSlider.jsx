import React from 'react';
import { FaGlobe, FaCode, FaBug, FaCalculator, FaPencilRuler, FaCubes, FaProjectDiagram } from 'react-icons/fa';
import '../styles/ProjetSlider.css'

const navItems = [
  { icon: <FaGlobe />, label: 'Web' },
  { icon: <FaCode />, label: 'API' },
  { icon: <FaBug />, label: 'Correction de code' },
  { icon: <FaCalculator />, label: 'Maths' },
  { icon: <FaPencilRuler />, label: 'UX Design' },
  { icon: <FaCubes />, label: 'Three.js' },
  { icon: <FaProjectDiagram />, label: 'Gestion de projet' },
];

const projectCards = [
  {
    title: 'VosgesTennis ! Un site web fullstack pour un club de tennis fictif',
    features: [
      'Un site responsive',
      'Une connexion possible grâce à php',
      'Sécurisation des formulaires',
      'Opérations CRUD sur une base de donnée',
      'UX design avec html et css',
      'Hashage d’un mot de passe',
      'Affichage de données avec js',
      'Générer un certificat SSL auto',
      'Passer sous https',
    ],
    image: '/project-images/vosgestennis.png',
    languages: ['HTML', 'CSS', 'PHP', 'JS'],
  },
];

export default function ProjectSlider() {
    return(
        
        <div className="slidercontainer flex flex-col md:flex-row gap-6">
            {/* Nav Bar */}
            <div className="navbar shadow-md p-4 flex md:flex-col gap-4 w-full md:w-24 justify-around items-center rounded-[50px] h-[300px] md:h-auto">
            {navItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center cursor-pointer text-gray-700 hover:text-blue-600">
                <div className="text-2xl">{item.icon}</div>
                <span className="text-[10px] text-center hidden md:block mt-1">{item.label}</span>
                </div>
            ))}
            </div>

            <div className="container">
                <div className="cardcontainer w-full h-full">
                    {projectCards.map((project, index) => (
                        <div key={index} className="cardprojet w-full h-full">
                            <div className="sectioncard1">
                                <h2 className="text-2xl font-bold ml-10 mt-10 w-[50%]">{project.title}</h2>
                                <div className="imgprojet bg-white h-[150px] w-[300px] ml-10 mt-10 rounded-[20px]"></div>
                                <h3 className= "text-xl font-medium ml-10 mt-10 w-[50%]">Nouveaux skills, nouveaux languages</h3>
                                <div className='barSeparation w-[5px] h-[70%] bg-white rounded-[30px]'></div>
                            </div>
                            <div className="sectioncard2">
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                                <h4 className='aboutprojet'>Un site résponsive</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}