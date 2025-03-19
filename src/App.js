import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  return (
    <div className="app-container">
      <Header
        toggleCart={() => setShowCart((prev) => !prev)}
        toggleAccount={() => setShowAccount((prev) => !prev)}
        toggleCatalog={() => setShowCatalog((prev) => !prev)}
      />

      {showCatalog && <Catalog onClose={() => setShowCatalog(false)} />}

      {/* Добавьте аналогично для корзины и аккаунта */}

      <Footer />
    </div>
  );
}
