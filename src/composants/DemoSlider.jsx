import { useState } from 'react';
import '../styles/DemoSlider.css';

//image robot
import robotImage from '../assets/images/robotdemo.png';
//videos
import canalplusEtudeVideo from '../assets/videos/canalplusetude.mp4';
import threejsDemo from '../assets/videos/three.jsDemo.mp4';
import optimisationDemo from '../assets/videos/optimisation.mp4';
import apiDemo from '../assets/videos/API.mp4';
import fullstackDemo from '../assets/videos/fullstackDemo.mp4';



export default function VideoSlider() {

  const projects = [
    {
      title: "front-end",
      videoUrl: canalplusEtudeVideo,
      year: "1e année",
      why: "Analyse stratégique dans le cadre de la SAE 1.06",
      how: "Projet réalisé en binôme avec Figma, html et css",
      what: "Étude stratégique, maquettes, présentations, analyse SWOT et PESTEL du géant de la télévision française Canal+",
    },
    {
      title: "Fullstack",
      videoUrl: fullstackDemo,
      year: "1e année",
      why: "Créer un site complet pour un club de tennis fictif, avec une interface publique et une partie administrable.",
      how: "Développement en binôme d’un site vitrine dynamique avec HTML, CSS, et JavaScript côté client, ainsi qu’un back-end en php permettant de gérer les actualités, événements, et réservations. Le design a été réalisé avec Figma, en respectant les bonnes pratiques d’UX/UI.",
      what: "Le site du club Vosges Tennis permet aux visiteurs de consulter un espace multimédia, les horaires, et d’explorer les resultats de compétitions. Une interface administrateur rudimentaire a été esquissée, préparant l’intégration future d’un véritable back-end."
    },
    {
      title: "API",
    videoUrl: apiDemo,
    year: "1e année",
    why: "Explorer le fonctionnement des API et des interactions client-serveur autour d’un concept ludique : reconnaître des personnages d'Astérix.",
    how: "Développement d’une API simulée permettant d’envoyer une image et d’obtenir une réponse automatisée : Obélix, Astérix ou autre. L’application fournit un retour instantané à l’utilisateur, stocke les réponses, et propose des statistiques globales de reconnaissance.",
    what: "L’interface utilisateur permet de déposer une image ou d'en prendre une avec sa webcam et de l'envoyer à l'api. Les utilisateurs recevaient un feedback immédiat et s'ils etaient connectés, accédaient à un tableau de bord statistique. Ce projet a permis de comprendre les bases de la communication via API, ainsi que la gestion d'états et de données."
    },
    {
      title: "Three.js",
      videoUrl: threejsDemo,
      year: "2e année",
      why: "Introduction à la bibliothèque Three.js pour la création de scènes 3D",
      how: "Projet réalisé en binôme avec html, css, et three.js",
      what: "Création d'une scène 3D interactive avec des objets 3d, ombres et des lumières",
    },
    {
      title: "Optimisation",
      videoUrl: optimisationDemo,
      year: "2e année",
      why: "Améliorer la sécurité, les performances et la structure globale d’un site existant en y intégrant un back-end Java pour la gestion des administrateurs.",
      how: "Refonte complète du code PHP avec des pratiques sécurisées : requêtes SQL préparées, `htmlspecialchars` pour prévenir les injections, et passage de la base de données sous Docker pour une gestion isolée. Une application Java de gestion d’utilisateurs a été intégrée dans le site comme back-office.",
      what: "Le site offre désormais une interface publique sécurisée et une section administrateur connectée au back-end Java. Ce projet a permis de travailler la cohérence entre front-end et back-end, la sécurité applicative et la conteneurisation avec Docker."
    },
    // Ajoute d'autres projets ici
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  return(
    <div className="container">
        {/**Navigation */},
        <div className="nav-bar flex justify-around space-x-2">
            {projects.map((proj, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className=" btn-nav px-4 py-2 rounded-full border"
                    style={{
                        backgroundColor: index === currentIndex ? "rgb(254, 176, 29)" : "white",
                        boxShadow: index === currentIndex ? "0px 0px 30px rgb(254, 176, 29)" : "none",
                    }}
            >
                {proj.title}
            </button>
            ))}
        </div>
        <div className='robot'>
            <img src={robotImage} alt="Robot" className="w-30 h-40 mx-auto" />
        </div>
        {/* Vidéo */}
        <div className="demodiv border-black flex justify-center mb-6">
            <video
                key={currentIndex}
                className="w-[90%] h-[500px] rounded-xl shadow"
                controls
                preload="metadata"
            >
                <source src={currentProject.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        {/* Détails du projet */}
        <h2 className="text-3xl font-semibold mb-2 ml-5">Un peu plus de détails sur le projet</h2>
        <div 
        key={currentIndex}
        className="infos w-full">
            <div className="cardsInfo">
                <h3 className="text-2xl font-semibold mb-2">Contexte du projet</h3>
                <p>{currentProject.why}</p>
            </div>
            <div className="cardsInfo">
              <h3 className="text-2xl font-semibold mb-2">Comment à t-il été réalisé</h3>
              <p>{currentProject.how}</p>
            </div>
            <div className="cardsInfo">
              <h3 className="text-2xl font-semibold mb-2">Ce qui a été fait</h3>
              <p>{currentProject.what}</p>
            </div>
        </div>
    </div>

  );
}