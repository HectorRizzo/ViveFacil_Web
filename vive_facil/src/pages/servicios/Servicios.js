import React, { Component } from 'react'
import Api from '../../helpers/api'
//css
import './servicio.css'

//icons

export default class Servicios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            servicios: [
            ],
            categorias: [
            ],
            tiposCategorias: [
            ]
        }

        //llama a la funcion que carga los servicios
        Api.getServicios('/servicios').then(response => {
            this.setState({
                servicios: response.data,
            })

            //guarda el tipo de categoria (id) en un array para despues compararlo con el array de categorias para mostrar los servicios
            response.data.map((servicio, index) => {
                this.setState({
                    tiposCategorias: [...this.state.tiposCategorias, servicio.categoria]
                })
            }) 

        })

        //llama a la funcion que carga las categorias
        Api.getCategorias().then(res => {
            this.setState({
                categorias: res.data
            })
        })

        

        
    }

    
    render() {

       let cargarServicios =  () => {

        let url = "https://tomesoft1.pythonanywhere.com";

        //recorre el array de categorias
            return this.state.categorias.map((categoria, index) => {
                console.log(categoria)

                //comprueba que la categoria exista en el array de tipos de categorias
                if(this.state.tiposCategorias.includes(categoria.id)){

                    return (
                       
                        <div className='container-servicio'>
                            {/*Imagen de la categoria */}
                           <div className='container-img'>
                               <img className='foto-categoria' src={url + categoria.foto2} alt=""/>
                               <p className='nombre-categoria'>{categoria.nombre}</p>
                           </div>
                           {/*Recorre el array de servicios para poner los servicios que entren en esa categoria */}
                           <div className='container-list-servicios'>
                               {this.state.servicios.map((servicio, index) => {
                                   if(categoria.id == servicio.categoria){
                                       return (
                                           
                                               <div className='div-servicios' >
                                                   <div className='div-servicio-nombre'>
                                                       <h5>{servicio.nombre}</h5>
                                                   </div>
                                                   <div className='div-servicio-descripcion'>
                                                       <p>{servicio.descripcion}</p>
                                                   </div>
   
                                               </div>
                                           
                                   )}
                           })}
                           </div>
                        </div>
                    )

                }
                  
                 
            })
        }
                
        return (
            <div>
                
                <div className='div-container-servicios'>
                    {cargarServicios()}
                    </div>
                
            </div>
        )
    }
}
