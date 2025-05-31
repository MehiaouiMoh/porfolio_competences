// App.js
import './App.css';
import { useState } from "react";
import Navbar from './composants/navbar';
import Boutonlien from './composants/boutonLien';
import TextAnime from './composants/textAnimeScroll';
import MobileNavBar from './composants/MenuMobile';
import ImageAnime from './composants/imageAnimeScroll';
import CompetenceSlider from './composants/competenceSlider';
import CompetenceAccordion from './composants/competenceAccordion';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null); // 🆕

  const cards = [
    {
      title: "Partir des exigences et aller jusqu'à une application complète",
      description: "Concevoir un site web fullstack en suivant un cahier des charges"
    },
    {
      title: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
      description: "Analyser des situations complexes et appliquer les bonnes méthodes de résolution"
    },
    {
      title: "Déployer des services dans une architecture réseau",
      description: "Mettre en place des services réseau fonctionnels et sécurisés"
    },
    {
      title: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
      description: "Améliorer les performances et assurer la sécurité des données"
    },
    {
      title: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
      description: "Structurer le suivi de projet pour répondre efficacement aux attentes"
    },
    {
      title: "Situer son rôle et ses missions au sein d'une équipe informatique",
      description: "Collaborer efficacement dans un environnement professionnel"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="welcomming-div flex flex-col flex-wrap">
          <h1 className="welcoming text-white">Bienvenue sur le portfolio des compétences</h1>
          <p className="accroche">Découvrez à travers ce portfolio, les compétences acquises en deuxième année de BUT Informatique</p>
          <Boutonlien />
        </div>
      </header>
      <main className="App-main">
        <section className="accroche-main">
          <TextAnime />
          <ImageAnime />
        </section>
        <section className='sliderCompetences' id='sliderCompetences'>
          <div className='bar'></div>
          <div className="toggleContainer">
            <div></div>
          </div>
          <div className='sliderContainer'>
            <CompetenceSlider 
              activeIndex={activeIndex}
              setActiveIndex={(index) => {
                setActiveIndex(index);
                setOpenAccordionIndex(index); // 🔓 ouvre l'accordéon
              }}
              cards={cards}
            />
          </div>
        </section>
        <section className='UE'>
          <h1>Les UE plus en détail</h1>
          {cards.map((competence, index) => (
            <div key={index} id={`section-${index}`} className="my-8">
              <CompetenceAccordion 
                index={index} 
                competence={competence}
                isOpen={openAccordionIndex === index}
                onToggle={() =>
                  setOpenAccordionIndex(openAccordionIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </section>
      </main>
      <MobileNavBar />
    </div>
  );
}

export default App;
