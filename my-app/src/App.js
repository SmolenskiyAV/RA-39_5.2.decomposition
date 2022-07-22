/* eslint-disable jsx-a11y/anchor-is-valid */
import "./css/main.css";
import Form from "./components/Form/form";
import News from "./components/News/news";
import Advertisement from "./components/Advertisement/Advertisement";
import Weather from "./components/Weather/Weather";
import ContentBox from "./components/ContentBox/ContentBox";

function App() {
 
  const labelSrc = "https://yastatic.net/s3/home-static/_/x/Q/xk8YidkhGjIGOrFm_dL5781YA.svg";

  const politicNews = [
    {
      id: 1,
      svg: '/newspaper_icon-icons.com_57398.svg',
      text: 'Путин подписал приказ о присвоении языку JavaScript статуса государственного',
      src: '#',
    }, {
      id: 2,
      svg: '/newspaper_icon-icons.com_57398.svg',
      text: 'В команде зеленского отрицают факт регулярного употребления мухоморов',
      src: '#',
    }, {
      id: 3,
      svg: '/newspaper_icon-icons.com_57398.svg',
      text: 'Преподавателей-передовиков "Нетологии" наградят гос.премиями в Кремле',
      src: '#',
    },{
      id: 4,
      svg: '/newspaper_icon-icons.com_57398.svg',
      text: 'Набиулина призналась в том, что она агент влияния Фед.Резерва в России',
      src: '#',
    }, {
      id: 5,
      svg: '/newspaper_icon-icons.com_57398.svg',
      text: 'На Украине предложили засадить Марс дубами',
      src: '#',
    },
  ]; 

  const currencyExchangeNews = [
    {
      id: 'a1',
      currencyName: ' USD',
      currencyValue: '0.5 RUB',
    }, {
      id: 'a2',
      currencyName: ' EUR',
      currencyValue: '0.1 RUB',
    },
  ];

  const content = {
      id: 5938386,
      svg: '/News_icon-icons.com_74697.png',
      title: 'Изучай REACT - будь мужиком!',
      text: 'Только тех, кто любит труд - программистами зовут!',
      src: '#',
  };

  const pictureBanner = '/og_og_1536156867297025441.jpg';

  const weather = {
    svg: '/snowfall_frost_rain_hail_sleet_snowy_icon_220101.svg',   
    temperatureNow: '+17', 
    temperatureMorning: '+10', 
    temperatureEvening: '+18', 
  };

  const contentBox1 ={
    title: 'Посещаемое',
    src: '#',
    contentNews: [
      'Недвижимость - о сталинках',
      'Маркет - люстры и светильники',
      'Авто.ру - привод 4Х4 до 500 000'
    ],
  };

  const contentBox2 ={
    title: 'Карта Германии',
    src: '#',
    contentNews: [
      'Расписания',
    ],
  };

  const contentBox3 ={
    title: 'Эфир',
    src: '#',
    contentNews: [
      'Управление как искусство',
      'Ночь. Мир в это время',
      'Андрей Вознесенский...'
    ],
  }

  return (
 <>
  <header>
     <a href="https://mail.yandex.ru/">Войти в почту</a>
  </header>

  <main> 
    <div className="afterHeader">
      <News politicNews={politicNews} currencyExchangeNews={currencyExchangeNews} />
      <Advertisement content={content}/>
    </div>
    
    <nav>
      <ul className="menu-main">
        <li><a href='#'>Видео</a></li>
        <li><a href='#'>Картинки</a></li>
        <li><a href='#'>Новости</a></li>
        <li><a href='#'>Карты</a></li>
        <li><a href='#'>Макет</a></li>
        <li><a href='#'>ещё</a></li>
      </ul>
    </nav>

    <Form labelSrc={labelSrc} />
    <span>Яндекс.Такси — найдется всё, кроме твоего подъезда и сдачи.</span>
    <img href="#" className="pictureBanner" src={pictureBanner} alt=""/>

    <div className="preFooter">
      <Weather weather={weather} />
      <ContentBox contentBox={contentBox1} />
      <ContentBox contentBox={contentBox2} />
      <ContentBox contentBox={contentBox3} />
    </div>
  </main>

  <footer>
    
  </footer>
</>
  );
}

export default App;
