import React, { Component } from 'react' 
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
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
                            <a href="/" className="a-logo"><img src={logo} className="img-logo" alt=""></img></a>
                        </div>


                        <nav className="main-nav">
                            <ul className="ul-nav">

                                <li className="list"><a  className="btn"><AwesomeButton type="primary" size="medium" >Colégio</AwesomeButton></a>

                                        <ul className="drop">
                                            <li><a href="#"><AwesomeButton type="primary" size="small">Metologia</AwesomeButton></a></li>
                                            <li><a href="#"><AwesomeButton type="primary" size="small">Estrutura</AwesomeButton></a></li>
                                            <li><a href="#"><AwesomeButton type="primary" size="small">Fundação</AwesomeButton></a></li>
                                        </ul>

                                </li>


                                <li><a href="/" ><AwesomeButton type="primary" size="medium" >Notíciais</AwesomeButton></a>
                                

                                </li>


                                <li><a href="/" ><AwesomeButton type="primary" size="medium" >Serviços</AwesomeButton></a>
                                
                                    <ul>
                                        <li><a href="#"><AwesomeButton type="primary" size="small">Esportes</AwesomeButton></a></li>
                                        <li><a href="#"><AwesomeButton type="primary" size="small">Dança</AwesomeButton></a></li>
                                        <li><a href="#"><AwesomeButton type="primary" size="small">Ballet</AwesomeButton></a></li>
                                    </ul>
                                
                                
                                </li>



                                <li><a href="/" ><AwesomeButton type="primary" size="medium" >Pastoral</AwesomeButton></a></li>


                                <li><a href="/" ><AwesomeButton type="primary" size="medium" >Galeria</AwesomeButton></a></li>


                                <li><a href="/" ><AwesomeButton type="primary" size="medium" >Contato</AwesomeButton></a></li>


                            </ul>
                        </nav>

                        
                    </div>

                    
                </header>    
        )
    }
}
