import React from 'react'
import "./Club.css"
import { NavLink } from 'react-router-dom';

const Club = () => {
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
        <div className="headers-content">
          <h3>КЛУБ TRUE</h3>
          <h2>Открыть клуб вместе с TRUE</h2>
        </div>
        <img src="dom.png" alt=""  className='domm'/>
      </header>
      <section className="sectioon">
        <h1>Отправить заявку</h1>
        <div className="sectioon-content">
            <div className="froom">
            <label>ВАШЕ ИМЯ</label>
      <input type="text" placeholder="ИМЯ" />
      <div className="lane"></div>
            </div>
            <div className="froom">
            <label>E-MAIL:</label>
      <input type="text" placeholder="E-MAIL:" />
      <div className="lane"></div>
            </div>
            <div className="froom">
            <label>Номер телефона</label>
      <input type="text" placeholder=" +998 (99)-999-99-99" />
      <div className="lane"></div>
            </div>
            <div className="froom">
            <label>Город</label>
      <input type="text" placeholder="Город" />
      <div className="lane"></div>
            </div>
        </div>
        <div className="radio-group">
        <label>ХОТИТЕ ОТКРЫТЬ:</label>
        <div>
          <input type="radio" name="open" /> <span>Фитнес клуб</span>
        </div>
        <div>
          <input type="radio" name="open" /> <span>Отельный клуб</span>
        </div>
        <div>
          <input type="radio" name="open" /> <span>Домашний спортзал</span>
        </div>
        <div>
          <input type="radio" name="open" /> <span>Тренажерный зал в Отеле, Санатории</span>
        </div>
        <div>
          <input type="radio" name="open" /> <span>Корпоративный спортзал</span>
        </div>
      </div>

      <div className="radio-group">
        <label>ПЛАНИРУЕМЫЙ СРОК ЗАПУСКА ПРОЕКТА:</label>
        <div>
          <input type="radio" name="date" /> <span>Отпуск сразу</span>
        </div>
        <div>
          <input type="radio" name="date" /> <span>Через месяц</span>
        </div>
        <div>
          <input type="radio" name="date" /> <span>Зависит от этапа строительства</span>
        </div>
        <div>
          <input type="radio" name="date" /> <span>Коммерческий спортзал</span>
        </div>
      </div>

      <div className="checkbox-group">
        <label>КАКИЕ УСЛУГИ ВАС ИНТЕРЕСУЮТ:</label>
        <div>
          <input type="checkbox" /> <span>Консультация</span>
        </div>
        <div>
          <input type="checkbox" /> <span>Подбор оборудования</span>
        </div>
        <div>
          <input type="checkbox" /> <span>Поставка, Транспортировка и Пуск</span>
        </div>
        <div>
          <input type="checkbox" /> <span>Дизайн</span>
        </div>
      </div>
      <div className="dont">
      <label>ЗАГРУЗИТЬ ПЛАН ПОМЕЩЕНИЯ</label>
      <button className="add-files">ADD FILES</button>
      </div>
      <div className="froom">
            <label>КОММЕНТАРИЙ</label>
      <input type="text" placeholder="" />
      <div className="lane"></div>
      <button className="submit-btn">ОТПРАВИТЬ</button>
            </div>
      </section>
<footer className="footer1-box">
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
  )
}

export default Club
