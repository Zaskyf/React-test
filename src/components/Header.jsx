// Header.jsx
import CatalogButton from "./CatalogButton";
import SearchBar from "./SearchBar";
import IconButton from "./IconButton";

export default function Header({ toggleCart, toggleAccount }) {
  return (
    <header>
      <div className="header-container">
        <CatalogButton />
        <SearchBar />
        <IconButton iconClass="fa-shopping-cart" onClick={toggleCart} />
        <IconButton iconClass="fa-user" onClick={toggleAccount} />
      </div>
    </header>
  );
}
