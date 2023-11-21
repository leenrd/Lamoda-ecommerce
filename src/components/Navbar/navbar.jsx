import "./style-navbar.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Cart from "../../pages/Cart/cart";
import { CartContext } from "../../App";
import { ShopContext } from "../../context/ShopContext";
import CartButton from "../cart-button";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { cartOn, handleCart } = useContext(CartContext);
  const { cartItems } = useContext(ShopContext);
  const itemAmount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const changeStyle = () => {
    if (window.scrollY >= 94) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeStyle);

  return (
    <>
      {cartOn && <Cart cartFunction={handleCart} />}
      <div className={navbar ? "navbar active" : "navbar"}>
        <nav>
          <div className="left">
            <a href="/" className="logolink">
              LAMODA
            </a>
          </div>
          <div className="center navlinks">
            <Link className="btn-ghost" to="/">
              Home
            </Link>
            <Link className="btn-ghost" to="/items">
              Items
            </Link>
            <Link className="btn-ghost" to="/about">
              About
            </Link>
            <Link className="btn-ghost" to="/location">
              Locations{" "}
            </Link>
            <Link className="btn-ghost" to="/auth">
              Log in
            </Link>
          </div>
          <div className="right">
            <button className="btn-ghost mobileBars">
              <i className="fa-solid fa-bars"></i>
            </button>
            <CartButton />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
