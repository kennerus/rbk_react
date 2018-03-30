import React from 'react';
import './layout.css';
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    render() {

        return(
            <div className="layout">
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}