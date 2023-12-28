import "./style-deals-page.css";
import { sampleBread } from "../../data/breadsData";
import { ShopContext } from "../../context/ShopContext";
import Card from "../Card";
import { useContext } from "react";

const Deals = ({ userVerify }) => {
  const sampleOne = sampleBread[0];
  const sampleTwo = sampleBread[2];
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="containercon">
      <div id="heading" className="heading-cont">
        <h1 className="headingTitle">Our Hottest Deals</h1>
        <p className="headsubText">OFFERS</p>
      </div>
      <div className="content">
        <Card
          name={sampleOne.name}
          description={sampleOne.description}
          imageName={sampleOne.imageName}
          imageAlt={sampleOne.imageAlt}
          price={sampleOne.price}
          key={sampleOne.id}
          id={sampleOne.id}
          addItemToCart={() => addToCart(sampleOne.id)}
        />
        <Card
          name={sampleTwo.name}
          description={sampleTwo.description}
          imageName={sampleTwo.imageName}
          imageAlt={sampleTwo.imageAlt}
          price={sampleTwo.price}
          key={sampleTwo.id}
          id={sampleTwo.id}
          addItemToCart={() => addToCart(sampleTwo.id)}
        />
      </div>
    </div>
  );
};

export default Deals;
