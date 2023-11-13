import "./style-footer.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";

function Footer() {
  const { handleCart } = useContext(CartContext);

  return (
    <div className="footer">
      <div className="grid">
        <div className="footText">
          <h1>LAMODA</h1>
          <span className="circle"></span>
        </div>
        <div className="links">
          <div className="menu">
            <Link to="/items">Items</Link>
            <Link to="/about">About</Link>
            <Link to="/location">Locations</Link>
            <span onClick={() => handleCart()}>Cart</span>
          </div>
          <div className="contacts">
            <span>09783782898</span>
            <span className="emailSotanghon">LAMODA@hello.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
