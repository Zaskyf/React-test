// SearchBar.jsx
export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="search" name="search" placeholder="Поиск товаров" />
      <button type="submit">
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
