import React, { Component } from 'react';

// Styles
import './card.scss';

// Image
import Smile from '../../../img/smile.png';
import Idea from '../../../img/idea.png';
import Lamp from '../../../img/lamp.png';

export default class Card extends Component {
    render() {
        return (
            <div className="card-content">

                <div className="comp-content">
                    <h1 className="comp-title">Competências emocionais</h1>
                    <img src={Smile} className="comp-img" />
                    <p className="comp-text">o trabalho em equipe, a empatia, a comunicação são pilares fundamentais para o crescimento pessoal e profissional.</p>
                </div>


                <div className="pens-content">
                    <h1 className="pens-title">Mudança de Pensamento</h1>
                    <img src={Idea} className="pens-img" />
                    <p className="pens-text">despertando criações sem barreiras</p>

                </div>


                <div className="amb-content">
                    <h1 className="amb-title">Ambientes de inovação</h1>
                    <img src={Lamp} className="amb-img"></img>
                    <p className="amb-text">oficinas em ambientes reais, possibilitando novas crenças e quebra de paradigmas.</p>

                </div>





            </div>
        )
    }
}
