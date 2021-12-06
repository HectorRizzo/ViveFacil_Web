import React, { Component } from 'react'
import  Api  from '../../helpers/api';
//importar componente CardColumn de Bootstrap
import { CardGroup,Card, Row } from 'react-bootstrap';

//css
import './promociones.css'
export default class Promociones extends Component {


    constructor(props) {
        super(props);
        this.state = {
            promociones: [],
            
        }

        Api.getPromociones().then(res => {
            this.setState({promociones: res.data})
        })
        
    }    

    
    render() {

        

        const url = "https://tomesoft1.pythonanywhere.com";

        
        return (
            <div>                
                <div className='container-promociones'>
                    {this.state.promociones.map(promocion => (
                        <>
                        <div className='container-promocion'>
                            <img className='img-promocion' src={url+promocion.foto} alt="imagen" />
                            <div>
                                <h3 className='promocion-titulo'>{promocion.titulo}</h3>
                                <p className='promocion-descripcion'> {promocion.descripcion}</p>
                                <div className='codigo'>
                                    <p>Código: {promocion.codigo}</p>
                                </div>
                            </div>
                        </div>
                        
                        </>
                    ))}
                    
                </div>
                
            </div>
        )
    }
}
