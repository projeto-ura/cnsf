import React, { Component } from 'react';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import Styles from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue/index';


// Styles
import './metologia.scss';


// Images

import Image from '../../../img/metologia.jpg';

export default class Metologia extends Component {
    render() {
        return (
            <div className="container-content">
                <div className="container-text">
                    <h1 className="title-content">Quem Somos</h1>
                    <p className="text-content">Acreditamos que a escola deve ser o lugar onde os alunos despertem sua criatividade, deem vidas aos seus sonhos e construam o seu próprio futuro. Além disso, atuamos com abordagens de ensino capazes de estimular o pensamento empreendedor na construção de conhecimentos, projetos e propósitos de vida!</p>
                    <a href="#" className="a-btn">< AwesomeButton type="primary" size="large" className="somos-button">Saiba Mais</ AwesomeButton></a>

                </div>

                <div className="container-image">

                    <img src={Image} className="image-content"></img>


                </div>
            </div>
        )
    }
}