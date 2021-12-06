import React from 'react'
import {Card} from 'react-bootstrap'
//images

import './footer.css'

//icons
import facebook from '../images/iconos/Iconos web vive fácil-24.png'
import instagram from '../images/iconos/Iconos web vive fácil-23.png'
import whatsapp from '../images/iconos/Iconos web vive fácil-22.png'
import googlePlay from '../images/iconos/Iconos web vive fácil-45.png'
import appStore from '../images/iconos/Iconos web vive fácil-44.png'
import proveedor from '../images/iconos/Iconos web vive fácil-35.png'
import solicitante from '../images/iconos/Iconos web vive fácil-34.png'
import lineaAmarilla from './../images/iconos/Iconos web vive fácil-14.png'


export const footerPage = () => {
    console.log('footer')

    return (
        <div className='container-footer'>
            <div>
                <h4>Redes Sociales</h4>
                <div className="redes-sociales">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={whatsapp} alt="whatsapp" />
                </div>

                <p className='correo-footer'>vivefacilec@gmail.com</p>
            </div>

            <div>
                <h4>Nuestras App</h4>
                <div className='app-container'>
                    <div className='solicitante-container'>
                        <div className='head-app-container'>
                            <img className='label-app' src={proveedor} alt="solicitante" />           
                        </div>
                        <div className='app-content'>
                            <Card.Img variant="top" className='app-img' src={googlePlay} />
                            <Card.Img variant="top" className='app-img' src={appStore} />
                        </div>
                        
                    </div>

                    <div className='solicitante-container'>
                        <div className='head-app-container'>
                            <img className='label-app' src={solicitante} alt="solicitante" />           
                        </div>
                        <div className='app-content'>
                            <Card.Img variant="top" className='app-img' src={googlePlay} />
                            <Card.Img variant="top" className='app-img' src={appStore} />
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>

            <div>
                <h4>Ubicación</h4>
                <div className='ubicacion-content'>

                <div className='ubicacion-descripcion'>
                        <p>
                            Av. Víctor Emilio Estrada 505
                        </p>
                        <p>
                            Guayaquil, Ecuador
                        </p>
                    </div>

                    <div className='map'>
                        <iframe className='frame-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375.5181269895804!2d-79.90934403581176!3d-2.170448097030309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6df2b852aedd%3A0x553167a7783c3f37!2sAv.%20V%C3%ADctor%20Emilio%20Estrada%20505%2C%20Guayaquil%20090511!5e0!3m2!1ses!2sec!4v1636712509265!5m2!1ses!2sec"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                
                    
                </div>
            </div>
            
        </div>
    )
}




