import React, { Component } from 'react' 
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import { HashRouter, Route, Link } from "react-router-dom";

import Styless from './react-awesome-button-master/src/styles/themes/theme-blue/index';


// Styles
import './header.scss'



//Images
import logo from '../../img/logotipo.png'





export default class Header extends Component {
    render() {
        return (
            
                <header className="main-header">

                    <div className="header-content">

                        <div className="header-logo">
                            <Link to="/cnsf" className="a-logo"><img src={logo} className="img-logo" alt=""></img></Link>
                        </div>


                        <nav className="main-nav">
                            <ul className="ul-nav">

                                <li className="list"><a  className="btn"><AwesomeButton type="primary" size="medium" >Colégio</AwesomeButton></a>

                                        <ul className="drop">
                                            <li><Link to="/metologia"><AwesomeButton type="primary" size="small">Metologia</AwesomeButton></Link></li>
                                            <li><Link to="/estrutura"><AwesomeButton type="primary" size="small">Estrutura</AwesomeButton></Link></li>
                                            <li><Link to="/fundação"><AwesomeButton type="primary" size="small">Fundação</AwesomeButton></Link></li>
                                        </ul>

                                </li>


                                <li><Link to="noticias" ><AwesomeButton type="primary" size="medium" >Notíciais</AwesomeButton></Link>
                                

                                </li>


                                <li><Link to="serviços" ></Link><AwesomeButton type="primary" size="medium" >Serviços</AwesomeButton>
                                
                                    <ul>
                                        <li><Link to="esportes"></Link><AwesomeButton type="primary" size="small">Esportes</AwesomeButton></li>
                                        <li><Link to="dança"></Link><AwesomeButton type="primary" size="small">Dança</AwesomeButton></li>
                                        <li><Link to="ballet"></Link><AwesomeButton type="primary" size="small">Ballet</AwesomeButton></li>
                                    </ul>
                                
                                
                                </li>



                                <li><Link to="pastoral"><AwesomeButton type="primary" size="medium" >Pastoral</AwesomeButton></Link></li>


                                <li><Link to="galeria"><AwesomeButton type="primary" size="medium" >Galeria</AwesomeButton></Link></li>


                                <li><Link to="contato"><AwesomeButton type="primary" size="medium" >Contato</AwesomeButton></Link></li>


                            </ul>
                        </nav>

                        
                    </div>

                    
                </header>
                
        )
    }
}
