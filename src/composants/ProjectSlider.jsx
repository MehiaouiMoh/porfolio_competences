import React, { useState } from 'react';
import { FaGlobe, FaCode, FaBug, FaCalculator, FaPencilRuler, FaCubes, FaProjectDiagram } from 'react-icons/fa';
import '../styles/ProjetSlider.css'
import { motion, AnimatePresence } from 'framer-motion';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faJs, faCss3, faPhp } from '@fortawesome/free-brands-svg-icons';

// images
import tennisProjet from '../assets/images/imageProjet/club_tennis.png'
import apitoutatix from '../assets/images/imageProjet/apitoutatix.png'

// Navbar items
const navItems = [
  { icon: <FaGlobe />, label: 'Web' },
  { icon: <FaCode />, label: 'API' },
  { icon: <FaBug />, label: 'Correction de code' },
  { icon: <FaCalculator />, label: 'Maths' },
  { icon: <FaPencilRuler />, label: 'UX Design' },
  { icon: <FaCubes />, label: 'Three.js' },
  { icon: <FaProjectDiagram />, label: 'Gestion de projet' },
];

// Project data (note ajout d’un champ `category`)
const projectCards = [
  {
    title: 'VosgesTennis ! Un site web fullstack pour un club de tennis fictif',
    category: 'Web',
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
  {
    title: 'API Toutatix, lancer une prediction sur image',
    category: 'API',
    features: [
      'Un site responsive',
      'Une connexion possible grâce à php',
      'Sécurisation des formulaires',
      'Opérations CRUD sur une base de donnée',
      'UX design avec html et css',
      'Créer un API coté public et privé',
      'Affichage de données avec js',
      'Un site multifonction',
      'Une API sous Docker',
    ],
    image: apitoutatix,
    languages: ['HTML', 'CSS', 'PHP', 'JS'],
  },
];

export default function ProjectSlider() {
  const [activeCategory, setActiveCategory] = useState('Web');

  const filteredProjects = projectCards.filter(
    (project) => project.category === activeCategory
  );

  return (
    <div className="slidercontainer flex flex-col md:flex-row gap-6">
      {/* Nav Bar */}
      <div className="navbar shadow-md shadow-(color: grey) p-4 flex md:flex-col gap-4 w-full md:w-24 justify-around items-center rounded-[50px] h-[300px] md:h-auto border-solid border-2">
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center cursor-pointer text-gray-700 hover:text-blue-600 ${
              activeCategory === item.label ? 'text-blue-600 font-bold' : ''
            }`}
            onClick={() => setActiveCategory(item.label)}
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="text-[10px] text-center hidden md:block mt-1">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Project Cards */}
        <div className="container">
        <div className="cardcontainer w-full h-full">
            <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
                <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="cardprojet w-full h-full"
                >
                <div className="sectioncard1">
                    <h2 className="text-2xl font-bold ml-10 mt-10 w-[90%]">{project.title}</h2>
                    <div className="imgprojet bg-white h-[200px] w-[400px] ml-10 mt-10 rounded-[20px]">
                    <img src={project.image} alt="TennisProject" className="w-full h-full object-cover rounded-lg bg-gray-200"/>
                    </div>
                    <h3 className="text-xl font-medium ml-10 mt-5 mb-5 w-[70%]">Nouveaux skills, nouveaux langages</h3>
                    <div className="skillscontainer">
                    {project.languages.includes('HTML') && (
                        <div className="skills">
                        <FontAwesomeIcon icon={faHtml5} style={{color: "#74C0FC"}} size="2x" />
                        </div>
                    )}
                    {project.languages.includes('CSS') && (
                        <div className="skills">
                        <FontAwesomeIcon icon={faCss3} style={{color: "#63E6BE"}} size="2x" />
                        </div>
                    )}
                    {project.languages.includes('PHP') && (
                        <div className="skills">
                        <FontAwesomeIcon icon={faPhp} size="2x" />
                        </div>
                    )}
                    {project.languages.includes('JS') && (
                        <div className="skills">
                        <FontAwesomeIcon icon={faJs} style={{color: "#FFD43B"}} size="2x" />
                        </div>
                    )}
                    </div>
                    <div className="barSeparation w-[5px] h-[70%] bg-white rounded-[30px]"></div>
                </div>
                <div className="sectioncard2 flex flex-col justify-around">
                    {project.features.map((feature, i) => (
                    <h4 key={i} className="aboutprojet">{feature}</h4>
                    ))}
                </div>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
        </div>

    </div>
  );
}