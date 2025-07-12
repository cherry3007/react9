import React from 'react'
import "./Advantage.css"
import { Link } from 'react-router-dom';

const Advantage = () => {
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
  <li><Link to="/about">о бренде</Link></li>
  <li><Link to="/home">продукции</Link></li>
  <li><Link to="/advantage">преимущества</Link></li>
  <li><Link to="/club">открыть клуб</Link></li>
  <li><Link to="/">контакты</Link></li>
</ul>
        </nav>
        <div className="headers-content">
            <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
            <h2>Преимущества TRUE FITNESS</h2>    
            <p>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</p>
        </div>
      </header>
      <section className="advantage-section">
      <div className="advantage-container">
        <div className="advantage-card">
          <img src="h.png" alt="1" />
          <h3>ЛУЧШИЕ ХАРАКТЕРИСТИКИ В КЛАССЕ</h3>
          <p>Наши тренажёры имеют самые современные характеристики в классе, что увеличивает физические показатели до рекордных возможностей.</p>
        </div>
        <div className="advantage-card">
          <img src="h1.png" alt="2" />
          <h3>ВЫСОКАЯ НАДЁЖНОСТЬ ОБОРУДОВАНИЯ</h3>
          <p>Высокое качество тренажёров — это визитная карточка TRUE. Кроме того, TRUE предоставляет до 10 лет полной гарантии на кардио тренажёры.</p>
        </div>
        <div className="advantage-card">
          <img src="h2.png" alt="3" />
          <h3>НИЗКАЯ СТОИМОСТЬ ВЛАДЕНИЯ</h3>
          <p>Тренажёры способны выдержать серьёзную эксплуатационную нагрузку. Хорошее механическое качество и простота обслуживания обеспечивают минимальную стоимость владения.</p>
        </div>
        <div className="advantage-card">
          <img src="h3.png" alt="4" />
          <h3>КАЧЕСТВЕННЫЙ И ОПЕРАТИВНЫЙ СЕРВИС</h3>
          <p>Оборудование должно работать бесперебойно. Поэтому мы предлагаем качественный и оперативный сервис. У нас минимальные сроки технического реагирования.</p>
        </div>
        <div className="advantage-card">
          <img src="h4.png" alt="5" />
          <h3>ЦЕНЫ НИЖЕ, ЧЕМ У АНАЛОГОВ</h3>
          <p>Стоимость тренажёров вас приятно удивит. Несмотря на то, что по показателям превосходим конкурентов, наши цены ниже.</p>
        </div>
        <div className="advantage-card">
          <img src="h5.png" alt="6" />
          <h3>СОВЕРШЕННАЯ ПРОИЗВОДИТЕЛЬНОСТЬ</h3>
          <p>Тренажёры TRUE обеспечивают максимальную отдачу от тренировок благодаря правильной биомеханике. Больше результатов.</p>
        </div>
        <div className="advantage-card">
          <img src="h6.png" alt="7" />
          <h3>АБСОЛЮТНЫЕ ЛИДЕРЫ ПО КОЛИЧЕСТВУ ИННОВАЦИЙ</h3>
          <p>Наши тренажёры имеют самые технологичные и инновационные решения в индустрии. Мы — абсолютные лидеры по количеству инноваций.</p>
        </div>
        <div className="advantage-card">
          <img src="h7.png" alt="8" />
          <h3>МАКСИМАЛЬНОЕ УДОБСТВО И ФУНКЦИОНАЛЬНОСТЬ</h3>
          <p>Компания TRUE предлагает все технологии, чтобы тренажёры были максимально удобными и функциональными.</p>
        </div>
      </div>
      <div className="toop">
        <img src="top.png" alt="" />
        <h3>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h3>
        <img src="ssss.png" alt="" />
      </div>
    </section>
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

export default Advantage
