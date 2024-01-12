import "./style-items.css";
import axios from "axios";
import { sampleBread } from "../../data/breadsData";
import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import Card from "../../components/Card";

const Items = () => {
  const { addToCart } = useContext(ShopContext);
  const [data, setData] = useState(sampleBread);
  const [pressed, setPressed] = useState([
    {
      id: 1,
      on: true,
      categ: "All",
      for: "All",
    },
    {
      id: 2,
      on: false,
      categ: "Blouse",
      for: "Blouse",
    },
    {
      id: 3,
      on: false,
      categ: "Dress",
      for: "Dress",
    },
    {
      id: 4,
      on: false,
      categ: "Top",
      for: "Top",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000")
  //     .then((res) => {
  //       setData(res.data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, []);

  const filterItems = (categ, id) => {
    const filteredItems = sampleBread.filter((cloth) => {
      return cloth.tags.includes(categ);
    });

    setPressed((prev) =>
      prev.map((btn) => {
        return btn.id === id ? { ...btn, on: true } : { ...btn, on: false };
      })
    );
    setData(filteredItems);
  };

  return (
    <>
      <div className="heading-cont">
        <h1 className="headingTitle">Our Products</h1>
        <p className="headsubText">
          Where quality clothing meets your unique style.
        </p>
        <div className="filters">
          {pressed.map((btn) => {
            return (
              <ButtonFilter
                key={btn.id}
                filterFunction={() => filterItems(btn.categ, btn.id)}
                buttonFor={btn.for}
                on={btn.on}
              />
            );
          })}
        </div>
      </div>
      <div className="items-cont">
        {data.map((bread) => {
          return (
            <Card
              name={bread.name}
              description={bread.description}
              imageName={bread.imageName}
              imageAlt={bread.imageAlt}
              price={bread.price}
              sizes={bread.sizes}
              colors={bread.colors}
              id={bread.id}
              key={bread.id}
              addItemToCart={() => addToCart(bread.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Items;

const ButtonFilter = ({ filterFunction, buttonFor, on }) => {
  return (
    <button
      className={on ? "btn-primary clicked" : "btn-secondary"}
      onClick={filterFunction}
    >
      {buttonFor}
    </button>
  );
};
