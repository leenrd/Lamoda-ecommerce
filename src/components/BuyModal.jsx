import { CartContext } from "../App";
import "./style-OpenModal.css";
import { useContext, useState } from "react";

export const BuyModal = ({ name, description, imageName, imageAlt, price }) => {
  const { handleBuy } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const add = () => {
    setCount((prev) => prev + 1);
  };
  const sub = () => {
    setCount((prev) => (count > 1 ? prev - 1 : (prev = 1)));
  };

  return (
    <>
      <div className="screenOverlay" onClick={() => handleBuy()}></div>
      <div className="modal">
        <div className="gridModal">
          <div className="rightModal">
            <img
              className="ProductImage"
              src={`/assets/items/${imageName}`}
              alt={imageAlt}
            />
          </div>
          <div className="leftModal">
            <div className="headModal">
              <button
                className="closeModal btn-primary"
                onClick={() => handleBuy()}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="nameModal">
              <h1>{name}</h1>
              <h3>{price} ₽/pc</h3>
            </div>
            <div className="instockModal">
              <p>{description}</p>
              <div className="adder">
                <button className="plus" onClick={add}>
                  +
                </button>
                <span className="counter">{count}</span>
                <button className="minus" onClick={sub}>
                  -
                </button>
              </div>
            </div>
            <button className="checkOut ">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};
