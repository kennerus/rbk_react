import React from 'react';

export default class Header extends React.Component {
    render() {

        return (
            <header className="header header_index">
                <div className="top-line">
                    <div className="container container_index">
                        <div className="logo">
                            <a href="http://rbc.ru/" className="logo-img">
                                <img src="img/rbc-logo.svg" alt=""/>
                            </a>
                            <p className="special-project">Специальный партнёрский проект</p>
                        </div>

                        <div className="logo_mob">
                            <a href="http://rbc.ru/"><img src="img/logo-mob.svg" alt=""/></a>
                            <span className="divider"></span>
                            <h1 className="title_mob"><a href="/">Цифровая Россия</a></h1>
                        </div>

                        <div className="menu-mob">
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="bottom-line">
                    <div className="container container_index">
                        <h1 className="title"><a href="/">Цифровая Россия</a></h1>

                        <div className="social">
                            <a className="js_linkShareHeader" data-soc="facebook" onclick="Share.facebook(
          'http://rbk-gazprom.dgprod.ru/',
          'Цифровая Россия',
          'http://rbk-gazprom.dgprod.ru/img/article-page/1-fin.jpg',
          '«Индустрия 4.0» представляет собой серьезный вызов для международного сообщества. В специальном партнерском проекте рассказываем, как компании по всему миру и в России готовятся к цифровой трансформации.')">
                                <img src="img/icons/fb.svg" alt=""/>
                            </a>
                            <a className="js_linkShareHeader" data-soc="vk" onclick="Share.vkontakte(
          'http://rbk-gazprom.dgprod.ru/',
          'Цифровая Россия',
          'http://rbk-gazprom.dgprod.ru/img/article-page/1-fin.jpg',
          '«Индустрия 4.0» представляет собой серьезный вызов для международного сообщества. В специальном партнерском проекте рассказываем, как компании по всему миру и в России готовятся к цифровой трансформации.')">
                                <img src="img/icons/vk.svg" alt=""/>
                            </a>
                            <a className="js_linkShareHeader" data-soc="twitter" onclick="Share.twitter(
          'http://rbk-gazprom.dgprod.ru/',
          'Цифровая Россия')">
                                <img src="img/icons/fb.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <nav className="header__menu">
                    <div className="container container_index">
                        <div className="dropdown__wrap">
                            <a className="header__menu-link js_dropdown" href="#">Индустрия 4.0</a>
                            <button className="js_more-btn more-btn">></button>

                            <div className="dropdown__container">
                                <ul className="dropdown">
                                    <li className="dropdown__li"><a
                                        className="header__menu-link header__menu-link_dropdown js_link-menu"
                                        href="article-page_2.html">Как России не пропустить технологическую
                                        революцию</a></li>
                                    <li className="dropdown__li"><a
                                        className="header__menu-link header__menu-link_dropdown js_link-menu"
                                        href="article-page_3.html">Объединяя бизнес в единое целое в единое целое</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a className="header__menu-link js_link-menu" href="article-page_6.html">Big data</a>
                        <a className="header__menu-link js_link-menu" href="article-page_8.html">Интернет вещей</a>
                        <a className="header__menu-link js_link-menu" href="article-page_7.html">Блокчейн</a>
                        <a className="header__menu-link js_link-menu" href="article-page_9.html">Нейросети</a>
                        <a className="header__menu-link js_link-menu" href="article-page_5.html">Искусственный
                            интеллект</a>
                        <a className="header__menu-link js_link-menu" href="article-page_11.html">Цифровой двойник</a>
                        <a className="header__menu-link js_link-menu" href="article-page_4.html">Цифровой бэк-офис</a>
                        <a className="header__menu-link js_link-menu" href="article-page_10.html">Омниканальность</a>
                        <a className="header__menu-link js_link-menu" href="article-page_12.html">VR/AR</a>
                        <a className="header__menu-link js_link-menu" href="article-page_1.html">Роботы</a>
                    </div>
                </nav>

                <nav className="header__menu-mob">

                    <div className="header__menu-rubrics">
                        <a className="header__menu-link" href="https://rbc.ru">РБК</a>
                        <a className="header__menu-link" href="https://tv.rbc.ru">Телеканал</a>
                        <a className="header__menu-link" href="https://rbc.ru/newspaper">Газета</a>
                        <a className="header__menu-link" href="https://rbc.ru/magazine">Журнал</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://quote.rbc.ru">Quote</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://sport.rbc.ru">Спорт</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://realty.rbc.ru">Недвижимость</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://style.rbc.ru">Стиль</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://cnews.ru">C-news</a>
                        <a className="header__menu-link header__menu-link_gray" href="https://markerting.rbc.ru">Маркетинг</a>
                        <a className="header__menu-link header__menu-link_gray" href="#">Продажа бизнеса</a>

                    </div>

                    <div className="header__menu-main">
                        <div className="dropdown__wrap">
                            <a className="header__main-links js_dropdown" href="#">Индустрия 4.0</a>
                            <button className="js_more-btn more-btn">></button>

                            <div className="dropdown__container">
                                <ul className="dropdown">
                                    <li className="dropdown__li"><a
                                        className="header__menu-link header__menu-link_dropdown js_link-menu"
                                        href="article-page_2.html">Как России не пропустить технологическую
                                        революцию</a></li>
                                    <li className="dropdown__li"><a
                                        className="header__menu-link header__menu-link_dropdown js_link-menu"
                                        href="article-page_3.html">Объединяя бизнес в единое целое в единое целое</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <a className="header__main-links js_link-menu" href="article-page_6.html">Big data</a>
                        <a className="header__main-links js_link-menu" href="article-page_8.html">Интернет вещей</a>
                        <a className="header__main-links js_link-menu" href="article-page_7.html">Блокчейн</a>
                        <a className="header__main-links js_link-menu" href="article-page_9.html">Нейросети</a>
                        <a className="header__main-links js_link-menu" href="article-page_5.html">Искусственный
                            интеллект</a>
                        <a className="header__main-links js_link-menu" href="article-page_11.html">Цифровой двойник</a>
                        <a className="header__main-links js_link-menu" href="article-page_4.html">Цифровой бэк-офис</a>
                        <a className="header__main-links js_link-menu" href="article-page_10.html">Омниканальность</a>
                        <a className="header__main-links js_link-menu" href="article-page_12.html">VR/AR</a>
                        <a className="header__main-links js_link-menu" href="article-page_1.html">Роботы</a>
                    </div>
                </nav>
            </header>
        )
    }
}