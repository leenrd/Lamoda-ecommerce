import "../styles/utilities.css";
import { ChatAiWidget } from "@sendbird/chat-ai-widget";
import "@sendbird/chat-ai-widget/dist/style.css";
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
import RegPage from "./pages/auth/RegPage";
import { ShopContextProvider } from "./context/ShopContext";
import ScrollToTop from "./components/scrollRestore";
import { UserProvider } from "./context/UserContext";
export const CartContext = createContext();

function App() {
  const [cartOn, setCartOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [GauthClicked, setGauthClicked] = useState(false);
  const [signClicked, setSignClicked] = useState(false);
  const [acc, setAcc] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleGAuth = () => {
    setGauthClicked((prev) => !prev);
  };

  const handleEmailSignIn = () => {
    setSignClicked((prev) => !prev);
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
          <UserProvider>
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
                      signClicked={signClicked}
                      handleGAuth={handleGAuth}
                      handleEmailSignIn={handleEmailSignIn}
                      setGauthClicked={setGauthClicked}
                      email={email}
                      password={password}
                      setEmail={setEmail}
                      setPass={setPass}
                    />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <RegPage
                      GauthClicked={signClicked}
                      handleGAuth={handleEmailSignIn}
                      setGauthClicked={setSignClicked}
                      acc={acc}
                      setAcc={setAcc}
                      email={email}
                      password={password}
                      setEmail={setEmail}
                      setPass={setPass}
                    />
                  }
                />
              </Routes>
              <ChatAiWidget
                applicationId={import.meta.env.VITE_CHAT_WIDGET_APP_ID}
                botId={import.meta.env.VITE_CHAT_WIDGET_BOT_ID}
              />
              <Footer />
            </CartContext.Provider>
          </UserProvider>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
