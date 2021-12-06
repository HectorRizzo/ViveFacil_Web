import React, { Component } from 'react'
import {Form, Row, Col, FloatingLabel, Button, Label, Modal} from 'react-bootstrap'
import  Api  from '../../helpers/api';
//css
import './Afiliate.css'
import icono_enviar from '../../images/iconos/Iconos web vive fácil-38.png'

export default class Afiliate extends Component {

    constructor(props) {
        super(props);
        
        
        this.state = {
          nombres: '',
          apellidos:'',
          ciudad:'',
          email:'',
          estado:false,
          profesion:'',
          ano_experiencia:'',
          telefono:'',
          tipo_cuenta:'',
          numero_cuenta:'',
          banco:'',
          cedula:'',
          planilla_servicios:'',
          //modal
          showAlert:false,
          titleModal:'',
          bodyModal:'',

        };
      }

    revisarDatos=()=>{
        if(this.state.nombres.length>0 && this.state.apellidos.length>0 && this.state.ciudad.length>0 && this.state.email.length>0 && this.state.profesion.length>0 && this.state.ano_experiencia.length>0 && this.state.telefono.length>0 && this.state.tipo_cuenta.length>0 && this.state.numero_cuenta.length>0 && this.state.banco.length>0 && this.state.cedula.length>0 && this.state.planilla_servicios.length>0){
            return true
        }
        return false
    }

    handleCloseModal = () =>{
        this.setState({showAlert:false})
    }

    enviarDatos=()=>{
        console.log(this.state.planilla_servicios)
        let data= {
            "nombres": this.state.nombres,
            "apellidos":  this.state.apellidos,
            "ciudad":  this.state.ciudad,
            "email":  this.state.email,
            "telefono":  this.state.telefono,
            "cedula":  this.state.cedula,
            "estado":  this.state.estado,
            "profesion":  this.state.profesion,
            "ano_experiencia":  this.state.ano_experiencia,
            "banco":  this.state.banco,
            "numero_cuenta":  this.state.numero_cuenta,
            "tipo_cuenta":  this.state.tipo_cuenta,
            "planilla_servicios":this.state.planilla_servicios
        }
        console.log(data)

        let check = this.revisarDatos()
        console.log(check)
        if(check){  
            Api.postProveedorPendiente(data ).then(res=>{
                console.log(res)
                if(res.status===200){
                    this.setState({
                        showAlert:true,
                        titleModal:'¡Éxito!',
                        bodyModal:'Se ha enviado la información correctamente'
                    })
                }else{
                    this.setState({
                        showAlert:true,
                        titleModal:'¡Error!',
                        bodyModal:'No se ha podido enviar la información'
                    })
                }
            })
        }else{
            this.setState({
                titleModal:'Error', 
                bodyModal:'Por favor llene todos los campos',
                showAlert:true,
            })
        }


        
    }

    render() {
        let dat = Api.getProveedoresPendientes().then(res =>{
            console.log(res)
        }
           
        )
        console.log(dat)
        
        //getApi('proveedor_pendiente/').then(res=>{console.log(res)})
    


        return (
            <div>

                <div className='contenedor'>
                   
                    <p>
                        Si eres proveedor de algun servicio o quieres formar parte de nuestra empresa
                        brindanos tus datos para contactarte.
                        
                    </p>

                </div>

                <Modal show={this.state.showAlert} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.state.titleModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.bodyModal}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Ok
                    </Button>
                    
                    </Modal.Footer>
                </Modal>

                <div className="container-formulario">
                    <Form className='formulario'>
                        <div className='datos-formulario'>
                        <p className='label-form'>Datos Personales </p>
                        <Form.Group as={Col} className="mb-3" controlId={this.state.nombres}>
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.nombres} onChange={e => this.setState({ nombres: e.target.value })} />
                            </Col>
                            <Form.Label column sm="2">
                            Nombres
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="apellidos">
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.apellidos} onChange={e => this.setState({ apellidos: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Apellidos
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="apellidos">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.ciudad} onChange={e => this.setState({ ciudad: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Ciudad
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="correo">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Correo Electrónico
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="telefono">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.telefono} onChange={e => this.setState({ telefono: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Teléfono
                            </Form.Label>
                        </Form.Group>
                        </div>
                   
                        <div className='div-banco-formulario'>
                        <p className='label-form'>
                            Cuenta bancaria
                        </p>

                        <Form.Group as={Col} className="mb-3 banco" controlId="cedula">
                            <Form.Label column sm="2">
                            Tipo de cuenta
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice' sm="4" controlId="profesionFloating" label="Tipo de Cuenta" value={this.state.tipo_cuenta} onChange={e => this.setState({ tipo_cuenta: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example" >
                                    <option className='text-form'>Seleccione el tipo de cuenta</option>
                                    <option className='text-form' value="Ahorro">Ahorro</option>
                                    <option  className='text-form' value="Corriente">Corriente</option>
                                </Form.Select>
                            </FloatingLabel>                        
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.numero_cuenta} onChange={e => this.setState({ numero_cuenta: e.target.value })}/>
                            </Col>
                            <Form.Label  column sm="2">
                            Número de cuenta
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.banco} onChange={e => this.setState({ banco: e.target.value })} />
                            </Col>
                            <Form.Label column sm="2">
                            Banco
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                            
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.cedula} onChange={e => this.setState({ cedula: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Cedula
                            </Form.Label>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                            <Form.Label column sm="2">
                            Profesión
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice'  sm="4" controlId="profesionFloating" label="Profesiones" value={this.state.profesion} onChange={e => this.setState({ profesion: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example">
                                    <option className='text-form' >Seleccione la profesión de interés</option>
                                    <option className='text-form' value="Mecánico">Mecánico</option>
                                    <option className='text-form' value="Pintor">Pintor</option>
                                    <option className='text-form' value="Electricista">Electricista</option>
                                </Form.Select>
                            </FloatingLabel>                        
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                            
                            <Col sm="4">
                            <Form.Control  className='input-field' type="number" placeholder="" value={this.state.ano_experiencia} onChange={e => this.setState({ ano_experiencia: e.target.value })}/>
                            </Col>
                            <Form.Label column sm="2">
                            Años de experiencia
                            </Form.Label>
                        </Form.Group>


                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="file_planilla">
                            <Form.Label className='label-multiple-choice'  column sm="2">
                            Planilla de luz o agua
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control  className='input-field-planilla' type="file" placeholder="" onChange={e => this.setState({ planilla_servicios: e.target.value })} />
                            </Col>
                        </Form.Group>

                        </div>
                       

                        
                    </Form>

                    <div className="boton">
                        <Button className='boton-enviar' onClick={()=>{this.enviarDatos()}} size="sm">
                            <img className='enviar-datos' src={icono_enviar} alt=""/>
                        </Button>
                    </div>

                </div>
                
                
            </div>
        )
    }
}