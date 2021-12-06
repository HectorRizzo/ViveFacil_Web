import React, { Component } from 'react'
import {Button, Carousel, Card} from 'react-bootstrap'

//images
import banner0 from '../../images/carousel-01.jpg'
import trabajaNosotros from '../../images/iconos/Iconos web vive fácil-25.png'
import facebook from '../../images/iconos/Iconos web vive fácil-24.png'
import instagram from '../../images/iconos/Iconos web vive fácil-23.png'
import whatsapp from '../../images/iconos/Iconos web vive fácil-22.png'
import googlePlay from '../../images/iconos/Iconos web vive fácil-45.png'
import appStore from '../../images/iconos/Iconos web vive fácil-44.png'
import afiliate from '../../images/carousel-02.jpg'
import contactanos from '../../images/carousel-03.jpg'

//icons
import afiliateButton from '../../images/iconos/Iconos web vive fácil-15.png'
import lineas from '../../images/iconos/Iconos web vive fácil-12.png'
import redesSociales from '../../images/iconos/Iconos web vive fácil-16.png'
import nuestrosServicios from '../../images/iconos/Iconos web vive fácil-39.png'
import nuestrasApp from '../../images/iconos/Iconos web vive fácil-17.png'
import Proveedor from '../../images/iconos/Iconos web vive fácil-34.png'
import Solicitante from '../../images/iconos/Iconos web vive fácil-35.png'

//css
import './Home.css'
import Api from '../../helpers/api'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorias: [],
        }
        Api.getCategorias().then(res => {
            console.log(res)
            this.setState({
                categorias: res.data
            })
        })
    }

    render() {

        const url = "https://tomesoft1.pythonanywhere.com";

        return (
            <div className='container'>
                <div className='center-home'>
                {/*Carousel*/}
                <div className='carrousel'>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="img-carrousel"
                            src={banner0}
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="img-carrousel"
                            src={contactanos}
                            alt="Second slide"
                            />

                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="img-carrousel"
                            src={afiliate}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                
                {/*Descripción de la empresa*/}
                <div className='vivefacil-content'>
                    <div className='vivefacil-title'>
                        <h1>¿Qué es Vive Fácil?</h1>
                            <p>Vive Fácil es una aplicación que te ayudará en los servicios de tu día a día.  Desde servicios 
                            mecánicos hasta servicios de limpieza, nosotros podemos ayudarte. Tenemos un riguroso 
                            proceso de selección de proveedores así como un sistema de verificación de que el proveedor 
                            asignado sea el que llega a tu casa, para que te encuentres tranquilo y seguro.
                            </p>
                            <h1 className='trabaja-nosotros-title'>Eres un profesional y deseas trabajar con nosotros</h1>
                    </div>
                </div>

                </div>

                {/*Trabaja con nosotros*/}
                <div className='trabaja-nosotros-container'>
                    <div className='div-trabaja-nosotros'>
                            <div className='trabaja-nosotros-info'>
                                <p>Si eres proveedor de algún servicio, cuentas con la capacidad técnica,
                                    equipo de trabajo disponible o si puedes ofrecer algún servicio al público en general que esté dentro de nuestro catálogo actual o próximo, envíanos tus datos aquí.
                                </p>
                                <div className='footer-trabaja-nosotros'> 
                                    <Button className='button-afiliate'> <img src={afiliateButton} alt='' className='img-button-afiliate'/> </Button>
                                    <img src={lineas} alt=''className='lineas'/>
                                </div>
                                
                            </div>
                            <Card.Img variant="top" className='trabaja-nosotros' src={trabajaNosotros} />

                    </div>

                </div>


                {/*Nuestras Redes Sociales*/}
                <div className='redes-sociales-container'>
                    <div className='redes-sociales-content'>
                    <img src={redesSociales} alt='' className='redes-sociales-img'/>
                    </div>

                    <div className='redes-sociales-icons'>
                        <Card.Img variant="top" className='redes-icon' src={facebook} />
                        <Card.Img variant="top" className='redes-icon' src={instagram} />
                        <Card.Img variant="top" className='redes-icon' src={whatsapp} />
                    </div>
                </div>

                {/*Nuestros servicios*/}
                <div className='redes-sociales-container'>
                    <div className='redes-sociales-content'>
                    <img src={nuestrosServicios} alt='' className='redes-sociales-img'/>

                    </div>

                    <div className='list-servicios'>

                    {this.state.categorias.map(servicio => (
                          <div className='servicios-container'>
                                <Card.Img variant="top" className='redes-icon' src={url+servicio.foto2} />
                                <p>{servicio.nombre}</p>
                            </div>
                        ))}
                        
                    </div>
                    
                       
                    
                </div>

                {/*Nuestras Apps*/}
                <div className='nuestras-app-container'>
                    <div className='nuestras-app-content'>
                        <img src={nuestrasApp} alt='' className='redes-sociales-img'/>
                    </div>

                    <div className='nuestras-app-icons'>
                        <div className='nuestras-app-icons-container'>
                        <img src={Solicitante} alt='' className='solicitante-app-img'/>
                        <div className='div-apps'>
                        <Card.Img variant="top" className='app-icon' src={googlePlay} />
                            <Card.Img variant="top" className='app-icon' src={appStore} />
                        </div>
                            
                        </div>
                        
                        <div className='nuestras-app-icons-container'>
                        <img src={Proveedor} alt='' className='solicitante-app-img'/>
                            <div className='div-apps'>
                            <Card.Img variant="top" className='app-icon' src={googlePlay} />
                            <Card.Img variant="top" className='app-icon' src={appStore} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

