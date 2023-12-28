import { ShopContext } from "../../context/ShopContext";
import "./style-cart.css";
import { sampleBread } from "../../data/breadsData";
import { useContext } from "react";

function Cart({ cartFunction, userVerify }) {
  const { cartItems, removeItem, TotalCart } = useContext(ShopContext);
  const itemAmount = Object.values(cartItems).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <>
      <div
        className="screenOverlay"
        onClick={(e) => {
          if (!e.target.closest(".cartSheet")) {
            cartFunction();
          }
        }}
      >
        <div className="cartSheet">
          {!userVerify ? (
            <h2>pls sign in to see your items</h2>
          ) : (
            <div>
              <div className="headCart">
                <div className="cart">Cart({0 || itemAmount})</div>
                {/* <button
                  className="closeCart btn-primary"
                  onClick={() => cartFunction()}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button> */}
              </div>
              <hr />
              {itemAmount < 1 ? (
                <CartEmpty cartFunction={cartFunction} />
              ) : (
                <>
                  <div className="cartItems">
                    {sampleBread.map((bread) => {
                      if (cartItems[bread.id] !== 0) {
                        return (
                          <CartItem
                            image={bread.imageName}
                            name={bread.name}
                            inStock={bread.inStock}
                            price={bread.price}
                            imageAlt={bread.imageAlt}
                            removeItemFromCart={() => removeItem(bread.id)}
                            key={bread.id}
                            id={bread.id}
                          />
                        );
                      }
                    })}
                  </div>
                  <TransactionInfo totalFunction={() => TotalCart()} />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;

const CartItem = ({
  id,
  image,
  name,
  inStock,
  price,
  imageAlt,
  removeItemFromCart,
}) => {
  const { cartItems, addToCart, removeToCart } = useContext(ShopContext);
  const itemAmount = cartItems[id];

  return (
    <div className="boxContainer">
      <div className="boxItem">
        <img src={`assets/items/${image}`} alt={imageAlt} />
        <div className="Cartgrid">
          <div className="Cartleft">
            <span className="itemName">{name}</span>
            <span className="tick">{inStock}</span>
          </div>
          <div className="Cartright">
            <span>{price} ₽/pc</span>
            <div className="operations">
              <div className="adder">
                <button className="plus" onClick={() => addToCart(id)}>
                  +
                </button>
                <span className="counter">{itemAmount}</span>
                <button className="minus" onClick={() => removeToCart(id)}>
                  -
                </button>
              </div>
              <button
                className="remove btn-primary"
                onClick={removeItemFromCart}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionInfo = ({ totalFunction }) => {
  const subTotal = totalFunction();
  const vat = (5 / 100) * subTotal;
  const total = subTotal + vat;
  return (
    <div className="transaction">
      <hr />
      <div className="subtotal text-flex">
        <span>Subtotal</span>
        <p>₽ {subTotal}</p>
      </div>
      <div className="shipping text-flex">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="taxes text-flex">
        <span>Taxes(VAT)</span>
        <span>5% upon Checkout</span>
      </div>
      <hr />
      <div className="total text-flex">
        <span>Total</span>
        <span>₽ {total}</span>
      </div>
      <button className="checkOut ">Proceed to Checkout</button>
    </div>
  );
};

const CartEmpty = ({ cartFunction }) => {
  return (
    <div className="cartEmpty">
      <img
        src="/assets/UnboxingDoodle.png"
        alt=""
        className="emptyStateImage"
      />
      <h1 className="emptyText">Your cart is empty</h1>
    </div>
  );
};
