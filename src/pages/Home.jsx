import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom';

const Home = () => {
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
  <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>контакты</NavLink></li>
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
      </header>
      <section className="section">
        <div className="section-content">
          <div className="section-content-text">
          <h2>
  <span style={{ color: 'rgba(1, 174, 231, 1)' }}>TRUE</span> FITNESS
</h2>
            <div className="linee"></div>
            <h3>Современное и надежное оборудование для фитнес-клубов</h3>
            <div className="arrow">
            <h4>КАРдио тренажеры</h4>
            <img src="arr.png" alt="" />
            </div>
            <img src="5 dot.png" alt=""  className='dot'/>
          </div>
          <div className="section-content-img">
              <img src="img.png" alt="" />
            </div>
            <img src="img1.png" alt="" className='immg' />
        </div>
        <div className="sections-content">
         <div className="recniz"> 
         <div className="rec">
            <h2>Лучшие характеристики</h2>
            <div className="linesc"></div>
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
          <div className="niz">
            <h2>Низкая СТОИМОСТЬ ВЛАДЕНИЕ</h2>
            <div className="linecs"></div>
            <p>Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.</p>
          </div>
        </div>
        </div>
        <div className="recniz1"> 
        <div className="niz1">
            <h2>Низкая СТОИМОСТЬ ВЛАДЕНИЕ</h2>
            <div className="linecs1"></div>
            <p>Надежность оборудования обеспечивает низкие затраты на сервисное обслуживание, так по стоимости затрат на эксплуатацию TRUE выигрывает у конкурентов.</p>
          </div>
         <div className="rec1">
            <h2>Лучшие характеристики</h2>
            <div className="linesc1"></div>
            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
          </div>
        </div>
      </section>
      <section className="section1">
        <h1>Мы предлагаем полный комплекс услуг</h1>
        <div className="section-caards">
        <div className="section-cards">
          <div className="section-card">
            <img src="c.png" alt="" />
            <h2>КОНСАЛТИНГ</h2>
            <p>Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.</p>
          </div>
          <div className="section-card">
            <img src="c1.png" alt="" />
            <h2>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h2>
            <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
          </div>
        </div>
        <div className="section-cards1">
          <div className="section-card">
            <img src="c2.png" alt="" />
            <h2>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h2>
            <p>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
          </div>
          <div className="section-card">
            <img src="c3.png" alt="" />
            <h2>ФИРМЕННЫЙ SHOW-ROOM</h2>
            <p>Пройдите тест-драйв оборудования перед приобретением.</p>
          </div>
        </div>
        <div className="section-cards1">
          <div className="section-card">
            <img src="c4.png" alt="" />
            <h2>ПОСТАВКА ЗАПЧАСТЕЙ</h2>
            <p>Поставка как гарантийных, так и постгарантийных запчастей.</p>
          </div>
          <div className="section-card">
            <img src="c5.png" alt="" />
            <h2>Доставка по всему Узбекистану</h2>
            <p>Мы доставляем оборудование по всему Узбекистану.</p>
          </div>
        </div>
        </div>
        <div className="section-img">
          <img src="run.png" alt="" />
        </div>
      </section>
      <div className="pipec">
      <section className="posledniy">
        <div className="form-box">
          <h2>
            ПОЛУЧИТЕ ЭКСКЛЮЗИВНОЕ<br />
            ПРЕДЛОЖЕНИЕ НА ТРЕНАЖЕРЫ<br />
            TRUE FITNESS
          </h2>
          <p>Мы будем рады проконсультировать вас и помочь с подбором оборудования</p>
          <input type="text" placeholder="ИМЯ" />
          <input type="email" placeholder="EMAIL" />
          <input type="tel" placeholder="+998 (99)-999-99-99" />
          <button>ОТПРАВИТЬ</button>
          <small>
            Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с
            политикой конфиденциальности
          </small>
        </div>
      </section>

      <footer className="footer-box">
        <div className="column">
          <h4>КАТАЛОГ ТОВАРОВ</h4>
          <p>Кардио тренажеры</p>
          <p>Composite Strength</p>
          <p>True Stretch</p>
          <p>Сайклиты</p>
          <p>Групповые тренировки</p>
          <p>Силовые тренажеры</p>
          <p>Консоли</p>
        </div>
        <div className="column">
          <h4>ИНФОРМАЦИЯ</h4>
          <p>О бренде</p>
          <p>Преимущества</p>
          <p>Открыть клуб</p>
          <p>Продукция</p>
          <p>Контакты</p>
        </div>
        <div className="column">
          <h4>КОНТАКТЫ</h4>
          <p>Политика конфиденциальности</p>
          <p>Контакты</p>
        </div>
        <div className="column">
          <h4>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</h4>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default Home
