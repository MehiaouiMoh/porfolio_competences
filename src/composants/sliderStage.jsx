import { useState } from "react";
import '../styles/sliderStage.css';

//icones
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";


//import d'images
import desk from '../assets/images/img_Slider_stage/imgDeskIntroSlider.png';
import automation from '../assets/images/img_Slider_stage/iconeAutomatisation.png';
import coding from '../assets/images/img_Slider_stage/iconeCoding.png';
import readDoc from '../assets/images/img_Slider_stage/iconeLireDoc.png';

import n8n from '../assets/images/img_Slider_stage/n8n.svg';
import python from '../assets/images/img_Slider_stage/python.svg';
import odoo from '../assets/images/img_Slider_stage/odoo.svg';

import rocket from '../assets/images/img_Slider_stage/competenceSpaceShip.png'



export default function SliderStage() {
    const [currentIndex, setcurrentIndex] = useState(0);

    const totalCards = 3;

    const nextCard = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const prevCard = () => {
        setcurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    
    return(
        <div className="slider-container">
            {<div className="slider-card">
                {currentIndex === 0 && (
                    <div className="card1">
                        <div className="textImg">
                            <div className="textContent">
                                <h2>Nouveau !!</h2>
                                <p>Une expérience<br/> professionnelle de 2 mois en<br/> tant qu'assistant<br/> développeur web !</p>
                            </div>
                            <img src={desk} alt="bureau de travail"/>
                        </div>
                        <button className="next" onClick={nextCard}><FaHandPointRight style={{fontSize: "40px"}}/></button>
                    </div>
                )}
                {currentIndex === 1 && (
                    <div className="card2">
                        <h2>Ce que j'y ai fait</h2>
                        <div className="content">
                            <div className="cardContent">
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={automation} alt="automatisation" />
                                    </div>
                                    <div className="title">Automatisation<br/> de tâches</div>
                                </div>
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={coding} alt="coding" />
                                    </div>
                                    <div className="title">Importations de données dans un CRM grâce à python</div>
                                </div>
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={readDoc} alt="lire la doc" />
                                    </div>
                                    <div className="title">Lire la doc</div>
                                </div>
                            </div>
                            <div className="arrows">
                                <button className="prev" onClick={prevCard}><FaHandPointLeft style={{fontSize: "40px"}}/></button>
                                <button className="next" onClick={nextCard}><FaHandPointRight style={{fontSize: "40px"}}/></button>
                            </div>
                        </div>
                    </div>
                )}
                {currentIndex === 2 && (
                    <div className="card3">
                        <h2>Des nouvelles compétences</h2>
                        <div className="content">
                            <div className="cardContent">
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={n8n} alt="logoPlateformen8n" />
                                    </div>
                                    <div className="title">n8n</div>
                                </div>
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={python} alt="logoPython" />
                                    </div>
                                    <div className="title">python</div>
                                </div>
                                <div className="iconeText">
                                    <div className="icone">
                                        <img src={odoo} alt="logoCRMOdoo" />
                                    </div>
                                    <div className="title">Odoo</div>
                                </div>
                            </div>
                            <div className="rocket"><img src={rocket} alt="rocketImg" /></div>
                            <div className="arrows">
                                <button className="prev" onClick={nextCard}><FaHandPointLeft style={{fontSize: "40px"}}/></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>}
        </div>
    );
}