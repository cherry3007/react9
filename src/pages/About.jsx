import React from 'react'
import "./About.css"

const About = () => {
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
            <li>о бренде</li>
            <li>продукции</li>
            <li>преимущества</li>
            <li>открыть клуб</li>
            <li>контакты</li>
          </ul>
        </nav>
        <div className="headers-content">
          <h3>О НАШЕМ БРЕНДЕ</h3>
          <h2>TRUE - СОВЕРШЕННОE ФИТНЕС-ОБОРУДОВАНИЕ</h2>
        </div>
        <div className="header-cotent">
          <div className="tekst">
            <h1>Это совершенство обеспечивается высококачественными, долговечными материалами и технологиями, которые мы используем для производстве наших машин. Но оно также создается и благодаря нашей преданности клиентам и их потребностям.</h1>
            <h2>Наша опытная команда предлагает комплексное обслуживание, начиная от планирования объекта до технического обслуживания и оснащения ваших залов новейшими технологиями. Являясь вашим надежным партнером, мы делаем все возможное, чтобы ваше предприятие продолжало эффективно работать годы и годы.</h2>
            <h3>Вы можете рассчитывать на нас в предоставлении одних из лучших услуг в отрасли. Мы ориентированы на оптимизацию срока службы вашего фитнес-оборудования. Мы всегда ищем способы расширить сферу взаимодействия с нашими клиентами, будь то предоставление учебных материалов для ваших сотрудников и инструкторов, или разработка технологических решений, отвечающих потребностям современных пользователей.</h3>
            <h4>Свяжитесь с нами, чтобы узнать, как партнерство с TRUE может помочь вашей компании добиться успеха.</h4>
          </div>
        </div>
      </header>
      <div className="section">
  <h2 className="section-title">НАШИ ИННОВАЦИИ</h2>
  <div className="cards">
    <div className="card">
      <img src="in.png" alt="Тренажер 1" />
      <p>ТРЕНАЖЕР ЛЕСТНИЦА TRUE PALISADE</p>
      <div className="line"></div>
    </div>
    <div className="card">
      <img src="in1.png" alt="Тренажер 2" />
      <p>ФУНКЦИОНАЛЬНЫЙ ТРЕНИНГ С COMPOSITE STRENGTH</p>
      <div className="linee"></div>
    </div>
    <div className="card">
      <img src="in2.png" alt="Тренажер 2" />
      <p>Рамы для стрейтчинга TRUE Stretch</p>
      <div className="linee"></div>
    </div>
    <div className="card">
      <img src="in3.png" alt="Тренажер 2" />
      <p>Латеральный тренажер TRUE Traverse</p>
      <div className="linee"></div>
    </div>
    <div className="card">
      <img src="in4.png" alt="Тренажер 2" />
      <p>Беговая дорожка TRUE Alpine Runner</p>
      <div className="linee"></div>
    </div>
    <div className="card">
      <img src="in5.png" alt="Тренажер 2" />
      <p>Эллиптический тренажер TRUE Spectrum</p>
      <div className="linee"></div>
    </div>
  </div>
</div>
<section className="form-section">
  <div className="form-bg">
    <div className="form-content">
      <p className="form-small-title">TRUE FITNESS</p>
      <h2 className="form-title">
        ПОЛУЧИТЕ <br />
        <span className="blue">ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</span> <br />
        НА ТРЕНАЖЕРЫ <span className="blue">TRUE FITNESS</span>
      </h2>
      <p className="form-subtitle">
        Мы будем рады проконсультировать вас и помочь с подбором оборудования
      </p>

      <form className="form-inputs">
        <input type="text" placeholder="Имя" />
        <input type="tel" placeholder="+998 (__) ___-__-__" />
        <input type="email" placeholder="E-mail" />
        <button type="submit">ОТПРАВИТЬ</button>
      </form>

      <p className="form-note">
        *Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности*
      </p>
    </div>
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
  )
}

export default About
