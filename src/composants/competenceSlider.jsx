// competenceSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../styles/CompetenceSlider.css";
import ue1Img from "../assets/images/ue1Img.png";

export default function CompetenceSlider({ activeIndex, setActiveIndex, cards }) {
  const handleCardClick = (index) => {
    const newIndex = activeIndex === index ? null : index;
    setActiveIndex(newIndex);

    if (newIndex !== null) {
      const sectionId = `section-${newIndex}`;
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="competence-slider">
      <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={20}
        centeredSlides={false}
        pagination={{ clickable: true }}
        loop={false}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div
              className={`card ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={ue1Img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}