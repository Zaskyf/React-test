import React from "react";

const CategoryButton = ({ href, children, dataCategory }) => (
  <a href={href} style={{ textDecoration: "none", color: "black" }}>
    <button className="category-button" data-category={dataCategory}>
      <span>{children}</span>
      <i className="fas fa-chevron-right"></i>
    </button>
  </a>
);

const Popup = ({ onClose }) => (
  <div className="popup" id="popup">
    <span className="clobutton" onClick={onClose}>
      &times;
    </span>
    <h2 id="popupTitle"></h2>
    <ul id="popupContent"></ul>
  </div>
);

const Catalog = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const closePopup = () => setShowPopup(false);

  return (
    <>
      <div className="catalog" id="catalog">
        <h6>Каталог</h6>

        <CategoryButton href="wallpaper.html" dataCategory="1">
          Обои
        </CategoryButton>

        <CategoryButton href="categorysantexnica.html" dataCategory="2">
          Сантехника
        </CategoryButton>

        <CategoryButton href="floor.html" dataCategory="3">
          Напольные покрытия
        </CategoryButton>

        <CategoryButton href="furniture.html" dataCategory="4">
          Мебель
        </CategoryButton>

        <CategoryButton href="dishes.html" dataCategory="5">
          Посуда
        </CategoryButton>

        <CategoryButton href="textile.html" dataCategory="6">
          Текстиль
        </CategoryButton>

        <CategoryButton href="householdappliances.html" dataCategory="7">
          Бытовая техника
        </CategoryButton>

        <CategoryButton href="decor.html" dataCategory="8">
          Декор
        </CategoryButton>

        <CategoryButton href="tools.html" dataCategory="9">
          Инструменты
        </CategoryButton>
      </div>

      {showPopup && <Popup onClose={closePopup} />}
    </>
  );
};

export default Catalog;
