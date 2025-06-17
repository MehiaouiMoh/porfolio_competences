import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import Navbar from "../composants/navbar";
import MobileNavBar from "../composants/MenuMobile";
import Footer from '../composants/footer';

//style
import "../styles/stage.css";

//Images
import headerFond from "../assets/images/imagePageStage/stageHeader.png";
import objectifs from '../assets/images/imagePageStage/objectifs.png';
import localisation from '../assets/images/imagePageStage/localisation.png';
import work from '../assets/images/imagePageStage/workStage.png';

gsap.registerPlugin(ScrollTrigger);
export default function StagePage() {
  const cardsRef = useRef([]);



  useEffect(() => {
    if (window.location.hash === "#startPage") {
      const headerElement = document.getElementById("startPage");
      if (headerElement) {
        setTimeout(() => {
          headerElement.scrollIntoView({ behavior: "smooth" });
        }, 100); // attends que GSAP soit fini
      }
    }
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: '.containerCard',
        start: 'top 80%', 
        toggleActions:'play none none none',
        onEnter: () =>{document.querySelector('.containerCard')?.classList.add('active')},
        onLeave: () =>{document.querySelector('.containerCard')?.classList.remove('active')},
      },
    });

  },[]);
  return (
    <div className="stage-page flex flex-col min-h-screen" id="startPage">
      <Navbar darkLink={true}/>
      <section className="stage-header flex-grow">
        <div className="container">
          <div className="text">
            <h1>Une première expérience professionnelle</h1>
            <p>Un stage de 2 mois réalisé en région parisienne, en tant<br/> qu'assistant de développeur web</p>
          </div>
          <div className="img">
            <img src={headerFond} alt="fond du header de la page stage"/>
          </div>
        </div>
      </section>
      <h2 className="titleMain">Pourquoi ce stage et où l'ai je fait</h2>
      <div className="containerCard">
        <div className="card" ref={(el) =>(cardsRef.current[0] = el)}>
          <div className="icone"><img src={objectifs} alt="cible"/></div>
          <div className="textCard">Découvrir le monde de l'entreprise. Appliquer mes connaissances pour un projet réel. Monter en compétences et apprendre de nouvelles choses</div>
        </div>
        <div className="card" ref={(el) =>(cardsRef.current[1] = el)}>
          <div className="icone"><img src={localisation} alt="localisation"/></div>
          <div className="textCard">En région parisienne, à Argenteuil. CHR Elite est une entreprise spécialisée dans la fabrication et la vente de matériel de restauration</div>
        </div>
        <div className="card" ref={(el) =>(cardsRef.current[2] = el)}>
          <div className="icone"><img src={work} alt="travail"/></div>
          <div className="textCard">Assistant développeur web, j'ai découvert l'automtisation et l'importation de données dans le CRM utilisé par l'entreprise grâce à python. </div>
        </div>
      </div>
      <section className="PointClés">
        <div className="gridPourcentageWork">
          <div className="pourcentage1">
            <div className="content">
              <h1>40 %</h1>
              <p>Création d'automatisation<br/> avec n8n</p>
            </div>
          </div>
          <div className="pourcentage2">
            <div className="content">
              <h1>30 %</h1>
              <p>Implémentation de données avec<br />python</p>
            </div> 
          </div>
          <div className="pourcentage3">
            <div className="content">
              <h1>30 %</h1>
              <p>Lire de la documentation</p>
            </div>
          </div>
        </div>
        <div className="text">
          <h1>Les points clés de mon stage</h1>
          <p>Un stage très enrichissant. Il m'a permis de découvrir le fonctionnement de l'entreprise, d'apprendre de nouvelles choses et de développer mes compétences. J'ai pu participer à plusieurs tâches, observer le travail des professionnels, et mieux comprendre le métier. Cette expérience m'a beaucoup apporté.</p>
        </div>
      </section>
      <Footer />
      <MobileNavBar />
    </div>
  );
}