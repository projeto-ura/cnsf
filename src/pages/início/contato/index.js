import React, { Component } from 'react';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial } from 'react-awesome-button';
import Styless from '../../../components/header/react-awesome-button-master/src/styles/themes/theme-blue';



// Styles
import './contato.scss';
import { Title } from './styles';


const mapStyles = {
    width: '100%',
    height: '100%',
  };

// Components

export default class Contato_Home extends Component {
    render() {
        return (
            <div className="contato-home-container">


                <div className="form-contato">

                    <form id="new-post">

                        <h1 className="title-form">Fale conosco</h1>
                        
                        
                        
                        <input
                            className="all"
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                        />

                        <input
                            className="all"
                            type="text"
                            name="email"
                            placeholder="Seu email"
                        />
                        <input
                            className="all"
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                        />
                        <input
                            className="msg"
                            type="text"
                            name="mensagem"
                            placeholder="Mensagem"
                            
                        />

                        <button type="submit" className="btn-enviar">Enviar</button>
                    </form>
                </div>



            </div>
        )
    }
}

