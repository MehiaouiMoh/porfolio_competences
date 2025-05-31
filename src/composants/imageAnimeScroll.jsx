import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../styles/imageAnimeScroll.css'

//Import d'images
import competenceImg from '../assets/images/competenceAccrocheImg.png';

gsap.registerPlugin(ScrollTrigger);

function ImageAnime() {
  return (
    <div className="wrapImg">
      <img className="quoteImg" src={competenceImg} alt="logoCompetences"/>
    </div>
  );
}

export default ImageAnime;