import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import Navbar from '../composants/navbar';
import Boutonlien from '../composants/boutonLien';
import MobileNavBar from '../composants/MenuMobile';
import ImageAnime from '../composants/imageAnimeScroll';
import CompetenceSlider from '../composants/competenceSlider';
import CompetenceAccordion from '../composants/competenceAccordion';
import InfiniteSlider from '../composants/InfiniteSlider';
import DemoSlider from '../composants/DemoSlider';
import SliderStage from '../composants/sliderStage';
import EmojiSelector from '../composants/emojiSelector';

//importer des style
import '../styles/homePage.css';

//import d'images
import html from '../assets/images/imageSliderSkills/html-5.png';
import css from '../assets/images/imageSliderSkills/css3.png';
import figma from '../assets/images/imageSliderSkills/figma.png';
import php from '../assets/images/imageSliderSkills/php.png';
import sql from '../assets/images/imageSliderSkills/sql.png';
import js from '../assets/images/imageSliderSkills/js.png';
import react from '../assets/images/imageSliderSkills/react.png';
import docker from '../assets/images/imageSliderSkills/docker.png';
import Footer from "../composants/footer";

//pluggins
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null); // 🆕

  //Creer une reference au texte + de créativité
  const refTextBlend = useRef(null);
    

  useEffect(() => {
    const letters = refTextBlend.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power1.out",
        scrollTrigger: {
          trigger: refTextBlend.current,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          toggleActions: "play none none reverse",
        }
      }
    );

    console.clear();

    gsap.set(".split", { opacity: 1 });

    document.fonts.ready.then(() => {
      let containers = gsap.utils.toArray(".containerText");

      containers.forEach((container) => {
        let text = container.querySelector(".split");

        SplitText.create(text, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            console.log("split");
            return gsap.from(instance.lines, {
              yPercent: 120,
              stagger: 0.1,
              scrollTrigger: {
                trigger: container,
                scrub: true,
                start: "clamp(top center)",
                end: "clamp(bottom center)",
              },
            });
          },
        });
      });
    });
  }, []);


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
      <header className="App-header" id="header">
        <Navbar />
        <div className="welcomming-div flex flex-col flex-wrap">
          <h1 className="welcoming text-white">Bienvenue sur le portfolio des compétences</h1>
          <p className="accroche">Découvrez à travers ce portfolio, les compétences acquises en deuxième année de BUT Informatique</p>
          <Boutonlien />
        </div>
      </header>
      <main className="App-main">
        <section className="accroche-main">
          <p>6 domaines de compétences variés,<br /> de l'informatique à la gestion de projet</p>
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
        <section className="AllProjets">
          <div className='textBlend'>
            <h1 
            ref={refTextBlend}
            className="text-2xl text-center text-9xl font-bold mt-10 mb-10">
              {"+ de créativité".split("").map((letter, index) => (
                <span key={index} className="inline-block opacity-0">{letter === " " ? "\u00A0" : letter}</span>
              ))}
            </h1>
          </div>
          <div className='containerText'>
            <h3 className='split text-4xl font-bold text-center mt-10 mb-10'>Tout mes projets, à portée de clic</h3>
          </div>
          <div className='containerText'>
            <p className='split text-2xl text-center'>Deux années de but, forcement, ça en fait des projets. Découvrez<br/>les sous forme d'un slider infini et regardez les démos !</p>
          </div>
          <InfiniteSlider />
          <h1 className="text-5xl font-bold text-center mt-20 mb-4">Démonstrations vidéos</h1>
          <DemoSlider />
        </section>
        <section className="stage">
          <SliderStage />
        </section>
        <section className="skillSection" id="skillSection">
          <div className='containerText  mt-10 mb-10'>
            <h3 className='split text-4xl font-bold text-center'>Ce que je maitrise aujourd'hui</h3>
          </div>
          <div className='containerText'>
            <p className='split text-2xl text-center'>Un profil hybride : développement web &<br/> design UX/UI</p>
          </div>
          <div className="skills-container flex justify-center items-center gap-10  mt-20">
            <div className="textCard">
              <div className="card"><img src={html} alt= "html"/></div>
              <p>Html</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={css} alt= "css"/></div>
              <p>Css</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={figma} alt= "figma"/></div>
              <p>Figma</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={php} alt= "php"/></div>
              <p>php</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={sql} alt= "sql"/></div>
              <p>Sql</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={js} alt= "js"/></div>
              <p>Js</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={react} alt= "react"/></div>
              <p>React</p>
            </div>
            <div className="textCard">
              <div className="card"><img src={docker} alt= "docker"/></div>
              <p>Docker</p>
            </div>
          </div>
        </section>
        <section className="feedbackSection mb-0" id="feedbackSection">
          <div className='containerText  mt-10 mb-10'>
            <h3 className='split text-4xl font-bold text-center'>Mon ressenti sur ces deux ans</h3>
          </div>
          <div className="container">
            <div className="emojiText">
              <p>Comment je l'ai ressenti</p>
              <EmojiSelector />
            </div>
            <div className="textArea">
              <p className="ml-2 mt-5 mr-2">Ce que j'en ai pensé...</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <MobileNavBar />
    </div>
  );
}

export default HomePage;