import { useContext } from "react";
import { CartContext } from "../App";
import { ShopContext } from "../context/ShopContext";

function CartButton() {
  const { handleCart } = useContext(CartContext);
  const { cartItems } = useContext(ShopContext);
  const itemAmount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <>
      <button onClick={handleCart} className="cartBTN">
        {itemAmount > 0 ? (
          <span className="notification-icon">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
        ) : (
          <i className="fa-solid fa-cart-shopping"></i>
        )}
      </button>
    </>
  );
}

export default CartButton;
