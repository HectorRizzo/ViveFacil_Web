import React, { Component } from 'react'
import {Card} from 'react-bootstrap'


import { footerPage } from '../../components/footer'
import './contacto.css'

//iconos
import datos from '../../images/iconos/Iconos web vive fácil-29.png'
import nuestrasRedes from '../../images/iconos/Iconos web vive fácil-16.png'
import facebook from '../../images/iconos/Iconos web vive fácil-21.png'
import twitter from '../../images/iconos/Iconos web vive fácil-22.png'
import instagram from '../../images/iconos/Iconos web vive fácil-23.png'
import whatsapp from '../../images/iconos/Iconos web vive fácil-24.png'
import lineaHead from '../../images/iconos/Iconos web vive fácil-12.png'


export default class Contacto extends Component {
    render() {
        return (
            <div>
                
                <div className='contenedor'>
                    
                    <p>
                    Si deseas contactarnos para brindarnos 
                    alguna sugerencia o para requerir más información acerca de la empresa.    
                    </p>
                </div> 
                <img src={lineaHead} className='linea-head' alt='linea'/> 

                <div className='container-datos'>
                    <div className='container-datos-contacto'>
                        <div>
                            <img className='bar-datos' src={datos} alt='info redes'/>
                        </div>
                        <div className='text-datos'>
                            <p> +593987654323</p>
                            <p> Guayaquil,Ecuador
                                    Av Victor Emilio Gonzalez #1234
                            </p>
                            <p> vivefacilec@gmail.com</p>

                        </div>
                    </div>
                    <div className='container-nuestras-redes-contacto'>
                        <img className='img-nuestras-redes-contacto' src={nuestrasRedes} alt='info redes'/>
                        <div className='list-redes-contacto'>
                            <img className='redes-sociales-contacto' src={facebook} alt='facebook'/>
                            <img className='redes-sociales-contacto' src={instagram} alt='instagram'/>
                            <img className='redes-sociales-contacto' src={whatsapp} alt='whatsapp'/>
                            <img className='redes-sociales-contacto' src={twitter} alt='twitter'/>
                        </div>
                    </div>
                </div>
                
                <footerPage />


            </div>
        )
    }
}
