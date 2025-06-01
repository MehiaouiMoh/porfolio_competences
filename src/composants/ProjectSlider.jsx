import React from 'react';
import { FaGlobe, FaCode, FaBug, FaCalculator, FaPencilRuler, FaCubes, FaProjectDiagram } from 'react-icons/fa';
import '../styles/ProjetSlider.css'

//Icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';

//images
import tennisProjet from '../assets/images/imageProjet/club_tennis.png'



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
    image: tennisProjet,
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
                                <h2 className="text-2xl font-bold ml-10 mt-10 w-[80%]">{project.title}</h2>
                                <div className="imgprojet bg-white h-[200px] w-[400px] ml-10 mt-10 rounded-[20px]">
                                    <img src={project.image} alt="TennisProject" className="w-full h-full object-cover rounded-lg bg-gray-200"/>
                                </div>
                                <h3 className= "text-xl font-medium ml-10 mt-5 mb-5 w-[70%]">Nouveaux skills, nouveaux languages</h3>
                                <div className="skillscontainer">
                                    <div className="skills">
                                        <FontAwesomeIcon icon={faHtml5} style={{color: "#74C0FC", width: "100%", height: "100%"}} />
                                    </div>
                                    <div className="skills">
                                        <FontAwesomeIcon icon={faCss3} style={{color: "#63E6BE", width: "100%", height: "100%"}} />
                                    </div>
                                    <div className="skills">
                                        <FontAwesomeIcon icon={faPhp} style={{ width: "100%", height: "100%"}} />
                                    </div>
                                    <div className="skills">
                                        <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B", width: "100%", height: "100%"}} />
                                    </div>
                                </div>
                                <div className='barSeparation w-[5px] h-[70%] bg-white rounded-[30px]'></div>
                            </div>
                            <div className="sectioncard2 flex flex-col justify-around">
                                {project.features.map((feature, i) => (
                                    <h4 key= {i} className='aboutprojet'>{feature}</h4>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}