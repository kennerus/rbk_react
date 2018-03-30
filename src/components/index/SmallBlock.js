import React from 'react';
import {importImages} from "../../controllers/ImportImages";

export default class BigBlock extends React.Component {
    render() {
        const images = importImages(require.context('./img', false, /\.(png|jpe?g|svg)$/));

        return (
            <div className="block__container">
                <div className="block__head block__head_single">
                    <a className="js_link-main" href="article-page_8.html"
                       data-name="Мир в сети: перспективы развития промышленного интернета вещей">
                        <img className="block__img" src="img/interner-of-things.jpg" alt=""/>
                    </a>

                    <div className="block__title">
                        <h4 className="green-title-article GraphikRBCLC-Semibold-Web">Интернет вещей</h4>
                        <h2 className="featured-title">
                            <a className="js_link-main" href="article-page_8.html"
                               data-name="Мир в сети: перспективы развития промышленного интернета вещей">Мир в
                                сети: перспективы развития промышленного интернета вещей</a>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
}