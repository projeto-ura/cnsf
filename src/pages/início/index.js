import React, { Component } from 'react'


// Styles
import './início.scss';

// Componentes
import Carousel from './carousel/index';
import Metologia from './metologia/index';
import Card from './cards/index';
import Contador from './contador/index';
import Footer from '../../components/footer/index';



export default  class Início extends Component {
    render() {
        return (
            <div className="início-container">

                <div className="banner-container">

                </div>


                <div className="carousel-container">
                    <Carousel />
                </div>                      

                    <Metologia />
                
                    <Card />
                
                    <Contador />

                    <Footer />


            </div>
        )
    }
}