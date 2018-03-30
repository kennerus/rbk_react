import React from 'react';

export default class Footer extends React.Component {
    render() {

        return (
            <footer className="footer">
                <div className="container container_index">
                    <div className="copyright">
                        <p>© 1995–2018 РосБизнесКонсалтинг <span>Информационный партнер проекта — ПАО «Газпром нефть»</span></p>
                    </div>

                    <div className="social">
                        <a className="js_linkShareFooter" data-soc="facebook" onclick="Share.facebook(
        'http://rbk-gazprom.dgprod.ru/',
        'Цифровая Россия',
        'http://rbk-gazprom.dgprod.ru/img/article-page/1-fin.jpg',
        '«Индустрия 4.0» представляет собой серьезный вызов для международного сообщества. В специальном партнерском проекте рассказываем, как компании по всему миру и в России готовятся к цифровой трансформации.')">
                            <img src="img/icons/fb.svg" alt="" />
                        </a>
                        <a className="js_linkShareFooter" data-soc="vk" onclick="Share.vkontakte(
        'http://rbk-gazprom.dgprod.ru/',
        'Цифровая Россия',
        'http://rbk-gazprom.dgprod.ru/img/article-page/1-fin.jpg',
        '«Индустрия 4.0» представляет собой серьезный вызов для международного сообщества. В специальном партнерском проекте рассказываем, как компании по всему миру и в России готовятся к цифровой трансформации.')">
                            <img src="img/icons/vk.svg" alt="" />
                        </a>
                        <a className="js_linkShareFooter" data-soc="twitter" onclick="Share.twitter(
        'http://rbk-gazprom.dgprod.ru/',
        'Цифровая Россия')">
                            <img src="img/icons/fb.svg" alt="" />
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}