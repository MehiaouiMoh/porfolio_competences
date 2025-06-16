import { useState } from "react";
import '../styles/sliderStage.css';

//lien vers pages
import { Link } from 'react-router-dom';

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

    
    return(
        <div className="slider-container">
            <div className="slider-card">
                    <div className="card1">
                        <div className="textImg">
                            <div className="textContent">
                                <h2>Nouveau !!</h2>
                                <p>Une expérience<br/> professionnelle de 2 mois en<br/> tant qu'assistant<br/> développeur web !</p>
                            </div>
                            <img src={desk} alt="bureau de travail"/>
                        </div>
                        <Link to="/stage#startPage" className="btnStage">
                        <button className="versStage flex justify-center items-center gap-5" ><p>Voir plus</p> <FaHandPointRight style={{fontSize: "40px"}}/></button>
                        </Link>
                    </div>
            </div>
        </div>
    );
}