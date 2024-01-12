import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { CartContext } from "../App";
// import { BuyModal } from "./BuyModal";
import { useUserContext } from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Card = ({
  name,
  description,
  imageName,
  imageAlt,
  price,
  sizes,
  colors,
  addItemToCart,
  id,
}) => {
  const { cartItems } = useContext(ShopContext);
  const { userVerify } = useUserContext();
  const { handleBuy } = useContext(CartContext);
  const itemAmount = cartItems[id];
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleCardClick = () => {
    if (userVerify) {
      handleBuy();
    } else {
      setisModalOpen((prev) => !prev);
    }
  };

  const handleAddToCart = () => {
    if (userVerify) {
      addItemToCart();
    } else {
      setisModalOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="card">
        <img
          className="ProductImage"
          src={`/assets/items/${imageName}`}
          alt={imageAlt}
          loading="lazy"
          placeholder="/assets/placeholder.png"
        />
        <h3>{name}</h3>
        <p className="price">
          {price} ₽/pc • {sizes}
        </p>
        <p className="description">
          {description} • Colors: {colors}
        </p>
        <div className="buttons">
          <button className="btn-secondary" onClick={handleCardClick}>
            Buy
          </button>
          <button className="btn-primary" onClick={handleAddToCart}>
            <i className="fa-solid fa-cart-plus"></i> Add to Cart{" "}
            {itemAmount > 0 && `(${itemAmount})`}
          </button>
        </div>
        {isModalOpen ? (
          <ModalComponent setisModalOpen={setisModalOpen} />
        ) : null}
      </div>
    </>
  );
};

export default Card;

const ModalComponent = ({ setisModalOpen }) => {
  const navigate = useNavigate();
  const closeModal = () => {
    setisModalOpen((prev) => !prev);
  };
  const handleSignIn = () => {
    navigate("/auth");
  };
  return (
    <div className="modalBody">
      <p className="Modaltitle">Please sign in to proceed.</p>
      <div className="ctaModals">
        <button className="btn-secondary" onClick={closeModal}>
          Close
        </button>
        <button className="btn-secondary" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
};
