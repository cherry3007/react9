import React from 'react';
import "./Contact.css";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
          <div className="flag">
            <img src="flag.png" alt="" />
            <h2>+998 (90)-606-66-66</h2>
          </div>
          <button className='btnnv'>оставить заявку</button>
          <div className="line"></div>
          <ul className="ul">
  <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>о бренде</NavLink></li>
  <li><NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>продукции</NavLink></li>
  <li><NavLink to="/advantage" className={({ isActive }) => isActive ? "active-link" : ""}>преимущества</NavLink></li>
  <li><NavLink to="/club" className={({ isActive }) => isActive ? "active-link" : ""}>открыть клуб</NavLink></li>
  <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>контакты</NavLink></li>
</ul>
        </nav>
        <div className="header-content">
          <img src="pause.png" alt="" />
          <h2>TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США</h2>
        </div>
        <div className="headers-content">
          <div className="liine"></div>
          <h2>TRUE - ведущий мировой производитель премиального фитнес оборудования</h2>
          <div className="liine2"></div>
        </div>
      </header>    <section className="gym-wrapper">
      {/* Слайдер */}
      <div className="slider">
        <button className="arrow left">‹</button>
        <img
          src="https://i.ibb.co/yh2vHhR/gym.jpg"
          alt="gym"
          className="slider-img"
        />
        <button className="arrow right">›</button>
        <div className="dots">
          {[...Array(6)].map((_, i) => (
            <span key={i} className={`dot ${i === 2 ? "active" : ""}`} />
          ))}
        </div>
      </div>

      {/* Контакты и карта */}
      <div className="info-section">
        <div className="map-block">
          <img
            src="https://i.ibb.co/ncVwqxL/map.png"
            alt="map"
            className="map-img"
          />
        </div>
        <div className="contact-info">
          <h3>ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТЕР В УЗБЕКИСТАНЕ - PROWELLNESS</h3>
          <p>+998 (90)-606-66-66</p>
          <p><a href="mailto:info@prowellness.uz">info@prowellness.uz</a></p>
          <p>
            Адрес: Ташкент Сити, Бульвард, <br />
            Ул. Окрутая 2А
          </p>
          <p className="work-hours">
            <span className="blue">ПН-СБ С 9:00-19:00</span><br />
            <span className="blue">ВС НЕ РАБОЧИЙ</span>
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
