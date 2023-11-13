import { useRef } from "react";
import "./style-location.css";
import { locations } from "../../data/locationData";

export default function Location() {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const scrollPrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  return (
    <>
      <div className="location-content">
        <div className="heading-cont">
          <h3 className="headingTitle">Our Stores</h3>
          <p className="headsubText"> delivering style to your doorstep with speed and precision.</p>
        </div>
        <div className="stores" ref={carouselRef}>
          {locations.map((loc) => {
            return (
              <LocationCard
                key={loc.id}
                image={loc.image}
                alt={loc.alt}
                title={loc.title}
                description={loc.description}
              />
            );
          })}
          <button className="nextbtn btn-secondary" onClick={scrollNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="prevbtn btn-secondary" onClick={scrollPrev}>
            <i className="fa-solid fa-chevron-right fa-flip-horizontal"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export const LocationCard = ({ image, alt, title, description }) => {
  return (
    <div className="cardel">
      <img className="storeImg" src={`/assets/${image}`} alt={alt} />
      <div className="desc">
        <h1 className="storeName">{title}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
