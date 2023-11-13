// import React from 'react'
import Hero from "../../components/Hero/hero";
import Deals from "../../components/DealsPage/deals-page";
import { locations } from "../../data/locationData";
import { CartContext } from "../../App";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LocationCard } from "../Location/Location";

function Homepage() {
  const { handleCart } = useContext(CartContext);
  const carouselRef = useRef(null);

  const scrollNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const scrollPrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };
  return (
    <>
      <Hero />
      <div className="about">
        <p className="aboutText">
          <span>LAMODA™</span> At MODA, we believe that clothing is more than
          just a necessity; it's a canvas for your individuality. Whether you're
          a trendsetter, a classicist, or a daring trailblazer, we've curated a
          collection that caters to every facet of your personality.
        </p>
      </div>
      <hr className="lineHomepage" />
      <Deals />
      <div className="items">
        <div className="con">
          <h1 className="headingTitle" style={{ color: "white" }}>
            Fashion Week
          </h1>
          <p className="headsubText">
            When you buy from us, you're not just buying clothes; you're
            acquiring wearable pieces of art that reflect your individuality and
            cultural appreciation.
          </p>
          <div className="cta">
            <Link
              className="btn-secondary"
              to="/items"
              style={{ textDecoration: "none" }}
            >
              Items
            </Link>
            <button className="btn-outline" onClick={() => handleCart()}>
              Cart
            </button>
          </div>
        </div>
      </div>
      <div className="location-content">
        <div className="heading-cont">
          <h3 className="headingTitle">Our Stores</h3>
          <p className="headsubText">
            Elevate your style with quality clothes that make a statement.
          </p>
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

export default Homepage;
