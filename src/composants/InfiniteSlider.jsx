import '../styles/InfiniteSlider.css';

//images
import tennisProjet from '../assets/images/imageProjet/club_tennis.png'
import apitoutatix from '../assets/images/imageProjet/apitoutatix.png'
import canalplus from '../assets/images/imageProjet/etudeCanal+.png'
import portfolio from '../assets/images/imageProjet/Portfolio.png'

const infiniteSliders = [
  {
    id: "slider1",
    items: [
      { type: "image", content: canalplus },
      { type: "image", content: tennisProjet },
      { type: "image", content: apitoutatix },
      { type: "image", content: portfolio },
    ],
    direction: "right",
  },
  {
    id: "slider2",
    items: [
      { type: "text", content: "Découvrir" },
      { type: "text", content: "Apprendre" },
      { type: "text", content: "Comprendre" },
      { type: "text", content: "Coder" },
      { type: "text", content: "Créer" },
    ],
    direction: "left",
  }
];
export default function InfiniteSlider(){
    return(
        <div className="infinite-slider-container">
            {infiniteSliders.map((slider) => (
                <div
                key={slider.id}
                className={`slider ${slider.direction === "left" ? "to-left" : "to-right"}`}
                >
                <div className="slider-track">
                    {[...slider.items, ...slider.items].map((item, index) =>
                    item.type === "image" ? (
                        <img key={index} src={item.content} alt={`slide-${index}`} className="slider-item" />
                    ) : (
                        <span key={index} className="slider-item text-slide flex items-center gap-2">
                            <span className="text-5xl font-medium">{item.content}</span>
                            <span className="w-6 h-6 rounded-full bg-gray-300 inline-block ml-10"></span>
                        </span>

                    )
                    )}
                </div>
                </div>
            ))}
        </div>
    );
}