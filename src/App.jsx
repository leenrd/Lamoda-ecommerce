import "../styles/utilities.css";
import Homepage from "../src/pages/Homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import Items from "./pages/Items/items";
import About from "./pages/About/about";
import Location from "./pages/Location/Location";
import PageNotFound from "./pages/PageNotFound/page-not-found";
import Footer from "./components/Footer/footer";
import AuthPage from "./pages/auth/AuthPage";
import { ShopContextProvider } from "./context/ShopContext";
import ScrollToTop from "./components/scrollRestore";
export const CartContext = createContext();

function App() {
  const [cartOn, setCartOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [GauthClicked, setGauthClicked] = useState(false);
  const [userVerify, setUserVerify] = useState(false);

  const handleVerification = () => {
    setUserVerify((prev) => !prev);
  };

  const handleGAuth = () => {
    setGauthClicked((prev) => !prev);
  };

  const handleBuy = () => {
    setOpenModal((prev) => !prev);
  };
  const handleCart = () => {
    setCartOn((prevOn) => !prevOn);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <ShopContextProvider>
          <CartContext.Provider
            value={{
              cartOn,
              setCartOn,
              handleCart,
              handleBuy,
              openModal,
              setOpenModal,
            }}
          >
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/items" element={<Items />} />
              <Route path="/about" element={<About />} />
              <Route path="/location" element={<Location />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/auth"
                element={
                  <AuthPage
                    GauthClicked={GauthClicked}
                    handleGAuth={handleGAuth}
                    handleVerification={handleVerification}
                    setGauthClicked={setGauthClicked}
                    userVerify={userVerify}
                  />
                }
              />
            </Routes>
            <Footer />
          </CartContext.Provider>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
