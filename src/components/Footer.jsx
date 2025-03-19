import React from "react";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <div className="subscribe"></div>
        <div className="footer_navigation">
          <div className="footer_menu">
            <div className="item">
              <div className="caption">Покупателям</div>
              <ul className="menu_list">
                <li>
                  <a href="/html/category.html">Каталог</a>
                </li>
                <li>
                  <a href="/about/arktika-servis/">Расрочка/Кредиты</a>
                </li>
                <li>
                  <a href="/about/bonus-program/">Бонусная программа</a>
                </li>
                <li>
                  <a href="/about/podarochnye-karty/">Подарочные карты</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <div className="caption">Информация</div>
              <ul className="menu_list">
                <li>
                  <a href="/information/oplata/">Как оплатить</a>
                </li>
                <li>
                  <a href="/information/feedback/">Обратная связь</a>
                </li>
                <li>
                  <a href="/information/jobs/">Гарантия качества</a>
                </li>
                <li>
                  <a href="contacts.html">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="item">
              <div className="caption">Наши услуги</div>
              <ul className="menu_list">
                <li>
                  <a href="dostavkatext.html">Доставка</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact_info">
            <div className="phone">
              <a href="tel:8 (918) 827-20-12">8 (918) 827-20-12</a> (с 09:30 до
              19:00)
            </div>
            <div className="address">
              Адрес магазина:
              <br />
              ул. Астана Кесаева, 33"а, Владикавказ <br />
              Респ. Северная Осетия — Алания
            </div>
            <div className="copyright">&copy; 1996—2024, ТК «Декор центр»</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
