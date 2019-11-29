import React, { Component } from 'react';

import './header.css';

import Logotipo from '../../img/logotipo.png';
import Facebook from '../../img/facebook.png';
import Twitter from '../../img/twitter.png';

export default class Header extends Component {
    render() {
        return (
            <header className="header-container">
                <div className="header-content">
                    <div className="header-logo">
                                <a href="/" className="main-logo"><img src={Logotipo} className="img-logo" alt=""></img></a>
                    </div>
                    <nav className="main-nav">
                                <ul className="ul-nav">
                                    <li><a href="/" className="btn_início">Início</a></li>
                                    <li><a href="/colégio" className="btn_colégio">Colégio</a></li>
                                    <li><a href="/notíciais" className="btn_notíciais">Notíciais</a></li>
                                    <li><a href="/serviços" className="btn_serviços">Serviços</a></li>
                                    <li><a href="/contato" className="btn_contato">Contato</a></li>
                                </ul>
                    </nav>
                    <div className="social-bar">
                        <a href="#"><img src={Facebook} className="logo-facebook"></img></a>
                        <a href="#"><img src={Twitter} className="logo-instagram"></img></a>
                    </div>
                </div>    
            </header>
        )
    }
}