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
          genero:'',
          ciudad:'',
          email:'',
          direccion:'',
          estado:false,
          profesion:'',
          otro:'',
          ano_experiencia:'',
          telefono:'',
          tipo_cuenta:'',
          numero_cuenta:'',
          banco:'',
          cedula:'',
          copiaCedula: '',
          copiaLicencia:'',
          descripcion:'',
          planilla_servicios:'',
          licencia:'',
          //modal
          showAlert:false,
          titleModal:'',
          bodyModal:'',
          profesiones:[],
          ciudades: [],

        };
      }

    componentDidMount(){
        this.cargarProfesiones();
        this.cargarCiudades()
      
    }

    cargarProfesiones=()=>{
        Api.getProfesiones().then(res=>{
            this.setState({
                profesiones : res.data
            })
        })

    }
    cargarCiudades =()=>{
        Api.getCiudades().then(res=>{
            this.setState({
                ciudades : res.data
            })
        })

    }

    validarCedula= (cedula)=>{

        if (typeof(cedula) == 'string' && cedula.length == 10 && /^\d+$/.test(cedula)) {
            var digitos = cedula.split('').map(Number);
            var codigo_provincia = digitos[0] * 10 + digitos[1];
        
            //if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30) && digitos[2] < 6) {
        
            if (codigo_provincia >= 1 && (codigo_provincia <= 24 || codigo_provincia == 30)) {
              var digito_verificador = digitos.pop();
        
              var digito_calculado = digitos.reduce(
                function (valorPrevio, valorActual, indice) {
                  return valorPrevio - (valorActual * (2 - indice % 2)) % 9 - (valorActual == 9) * 9;
                }, 1000) % 10;
              return digito_calculado === digito_verificador;
            }
        }
        return false;
    
    }



    revisarDatos=()=>{
        if(this.state.nombres.length==0 || this.state.apellidos.length==0 || this.state.ciudad.length==0 ||
            this.state.email.length==0 || this.state.profesion.length==0 ||
            this.state.ano_experiencia.length==0 ||this.state.telefono.length!==10 ||
            this.state.tipo_cuenta.length==0 || this.state.numero_cuenta.length==0 || this.state.banco.length==0 ||
            this.state.cedula.length==0 || this.state.direccion.length==2||this.state.licencia.length==0 ||
            this.state.copiaCedula==undefined || this.state.copiaCedula==null||
            this.state.genero.length==0 || this.state.descripcion==0){
            return false
        }else if(this.state.licencia==="Si" && (this.state.copiaLicencia===undefined ||this.state.copiaLicencia===null ||this.state.copiaLicencia==="" )){
            
            return false
        }else if(!this.validarCedula(this.state.cedula)){
            return false

        }
        else if(this.state.profesion=="Otra" && (this.state.otro =="" || this.state.otro ==undefined)){
            return false
        }
        else{
            return true
        }
        


        // if(this.state.nombres.length==0 && this.state.apellidos.length>0 && this.state.ciudad.length>0 && 
        //     this.state.email.length>0 && this.state.profesion.length>0 && 
        //     this.state.ano_experiencia.length>0 && this.state.telefono.length==10 && 
        //     this.state.tipo_cuenta.length>0 && this.state.numero_cuenta.length>0 && this.state.banco.length>0 && 
        //     this.state.cedula.length>0 && this.state.direccion.length>2
        //     &&this.state.licencia.length>0 && this.state.copiaCedula!==undefined && this.state.copiaCedula!==null && 
        //     this.state.genero.length>0){
        //     return true
        // }else if(this.state.licencia==="Si" && (this.state.copiaLicencia===undefined ||this.state.copiaLicencia===null ||this.state.copiaLicencia==="" )){
            
        //     return false
        // }else if(!this.validarCedula(this.state.cedula)){
        //     return false

        // }
        // else{
        //     return false
        // }
        
        
    }

    handleCloseModal = () =>{
        this.setState({showAlert:false})
    }

    enviarDatos=()=>{

        let formData = new FormData()
        formData.append("nombres",this.state.nombres)
        formData.append("apellidos",this.state.apellidos)
        formData.append("ciudad",this.state.ciudad)
        formData.append("direccion", this.state.direccion)
        formData.append("email", this.state.email)
        formData.append("telefono", this.state.telefono)
        if(this.state.profesion=="Otra"){
            if(this.state.otro.length >1){
                let profesionFormateada = String(this.state.otro).charAt(0).toUpperCase()+String(this.state.otro).slice(1)
                formData.append("profesion",profesionFormateada.trim())
            }else{
                formData.append("profesion",this.state.otro.trim())
            }
            
        }else{
            formData.append("profesion",this.state.profesion)
        }
        
        formData.append("ano_experiencia",this.state.ano_experiencia)
        formData.append("banco",this.state.banco)
        formData.append("numero_cuenta",this.state.numero_cuenta)
        formData.append("tipo_cuenta",this.state.tipo_cuenta)
        formData.append("genero",this.state.genero)
        formData.append("licencia", this.state.licencia)
        formData.append("cedula", this.state.cedula)
        formData.append("descripcion",this.state.descripcion
        )
        formData.append("copiaCedula", this.state.copiaCedula[0])

        if(this.state.copiaLicencia!=null && this.state.copiaLicencia!=null){
            formData.append("copiaLicencia", this.state.copiaLicencia[0])     
        }
        
        for(let file of this.state.planilla_servicios){
            formData.append("planilla_servicios",file)
        }

        console.log(formData.get("planilla_servicios"))
        
        console.log(this.state.copiaCedula[0])

        let check = this.revisarDatos()
        console.log(check)
        if(check){  
            Api.postProveedorPendiente(formData ).then(res=>{
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
                            <Form.Label column sm="2">
                            Nombres:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.nombres} onChange={e => this.setState({ nombres: e.target.value })} />
                            </Col>
                            
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="apellidos">
                        <Form.Label column sm="2">
                            Apellidos:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.apellidos} onChange={e => this.setState({ apellidos: e.target.value })}/>
                            </Col>
                     
                        </Form.Group>
                        

                        <Form.Group as={Col} className="mb-3 banco" controlId="genero">
                            <Form.Label column sm="2">
                            Género:
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice' sm="4" controlId="generoFloating" label="Género" value={this.state.genero} onChange={e => this.setState({ genero: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example" >
                                    <option className='text-form'>Seleccione Género</option>
                                    <option className='text-form' value="Hombre">Hombre</option>
                                    <option  className='text-form' value="Mujer">Mujer</option>
                                    <option  className='text-form' value="Otro">Otro</option>
                                </Form.Select>
                            </FloatingLabel>                        
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3 ciudad-formulario" controlId="ciudad">
                            <Form.Label column sm="2">
                            Ciudad:
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice'  sm="4" controlId="ciudadFloating" label="Ciudades" value={this.state.ciudad} onChange={e => this.setState({ ciudad: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example">
                                <option>Seleccione Ciudad</option>  
                    
                                {this.state.ciudades.map((ciudad,key)  => {
                                    return <option className='text-form' key={key}  value={ciudad.nombre}>{ciudad.nombre}</option> 
                                })}
                                </Form.Select>
                            </FloatingLabel>            
                            </Col>
                        </Form.Group>
{/* 
                        <Form.Group as={Col} className="mb-3" controlId="ciudad">
                            <Form.Label column sm="2">
                            Ciudad:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.ciudad} onChange={e => this.setState({ ciudad: e.target.value })}/>
                            </Col>
                            
                        </Form.Group> */}

                        <Form.Group as={Col} className="mb-3" controlId="direccion">
                         <Form.Label column sm="2">
                            Dirección:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" value={this.state.direccion} onChange={e => this.setState({ direccion: e.target.value })}/>
                            </Col>
                           
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="correo">
                            <Form.Label column sm="3">
                            Correo Electrónico:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
                            </Col>
                            
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="telefono">
                        <Form.Label column sm="2">
                            Teléfono:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.telefono} onChange={e => this.setState({ telefono: e.target.value })}/>
                            </Col>
                            
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="cedula">
                        <Form.Label column sm="2">
                            Cédula:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.cedula} onChange={e => this.setState({ cedula: e.target.value })}/>
                            </Col>
                            
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="file_cedula">
                        <Form.Label column sm="2">
                        Copia de Cédula:
                            </Form.Label>
                            {/* <label >Copia de Cédula:</label> */}
                            <Col sm="4">
                            <Form.Control  className='input-field-planilla' type="file" placeholder="" onChange={e => this.setState({ copiaCedula: e.target.files })} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="descripcion">
                            
                            {/* <Col sm="4">
                            <Form.Control className='input-field' type="text" value={this.state.descripcion} onChange={e => this.setState({ descripcion: e.target.value })}/>
                            </Col> */}
                            <Form.Label column sm="2">Descripción:</Form.Label>
                            <Form.Control as="textarea" rows={3} value={this.state.descripcion} onChange={e => this.setState({ descripcion: e.target.value })}/>
                            
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco" controlId="licencia">
                            <Form.Label column sm="2">
                            ¿Tiene licencia?
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice' sm="4" controlId="licenciaFloating" label="licencia" value={this.state.licencia} onChange={e => this.setState({ licencia: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example" >
                                    <option className='text-form'>Seleccione si posee licencia</option>
                                    <option className='text-form' value="Si">Si</option>
                                    <option  className='text-form' value="No">No</option>
                                </Form.Select>
                            </FloatingLabel>                        
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3" controlId="file_licencia">
                        <Form.Label column sm="3">
                        Copia de licencia:
                            </Form.Label>
                            {/* <label >Copia de licencia:</label> */}
                            <Col sm="4">
                            <Form.Control  className='input-field-planilla' type="file" placeholder="" onChange={e => this.setState({ copiaLicencia: e.target.files })} />
                            </Col>
                        </Form.Group>

                        </div>
                   
                        <div className='div-banco-formulario'>
                        <p className='label-form'>
                            Cuenta bancaria
                        </p>

                        <Form.Group as={Col} className="mb-3 banco" controlId="tipo_cuenta">
                            <Form.Label column sm="2">
                            Tipo de cuenta:
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

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="numero_cuenta">
                        <Form.Label  column sm="3">
                            Número de cuenta:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="number" placeholder="" value={this.state.numero_cuenta} onChange={e => this.setState({ numero_cuenta: e.target.value })}/>
                            </Col>
                            
                        </Form.Group>
                        


                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="banco">
                        <Form.Label column sm="2">
                            Banco:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control className='input-field' type="text" placeholder="" value={this.state.banco} onChange={e => this.setState({ banco: e.target.value })} />
                            </Col>
                            
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="profesion">
                            <Form.Label column sm="2">
                            Profesión:
                            </Form.Label>
                            <Col sm="4">
                            <FloatingLabel className='label-multiple-choice'  sm="4" controlId="profesionFloating" label="Profesiones" value={this.state.profesion} onChange={e => this.setState({ profesion: e.target.value })}>
                                <Form.Select className='text-form' sm="4" aria-label="Floating label select example">
                                <option>Seleccione Profesión</option>  
                                {this.state.profesiones.map((profesion,key)  => {
                                    return <option className='text-form'key={key}  value={profesion.nombre}>{profesion.nombre}</option> 
                                })}
                                 <option>Otra</option> 
                                </Form.Select>
                            </FloatingLabel>            
                            </Col>
                            {this.state.profesion=="Otra" &&
                                <Form.Group as={Col} className="mb-3" controlId="Otro" >
                                <Form.Label column sm="2">
                                Otro:
                                </Form.Label>
                                <Form.Control className='input-field' type="text" value={this.state.otro} onChange={e => this.setState({ otro: e.target.value })}/>
          
                           
                                 </Form.Group>
                            }
                        </Form.Group>



                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="ano_experiencia">
                        <Form.Label column sm="4">
                            Años de experiencia:
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control  className='input-field' type="number" min="0" placeholder="" value={this.state.ano_experiencia} onChange={e => this.setState({ ano_experiencia: e.target.value })}/>
                            </Col>
                            
                        </Form.Group>


                        <Form.Group as={Col} className="mb-3 banco-formulario" controlId="file_planilla">
                        <Form.Label column>
                            Documentación (Planillas de Servicios,etc):
                            </Form.Label>
                            <Col sm="4">
                            <Form.Control  className='input-field-planilla' type="file" multiple="multiple"  placeholder="" onChange={e => this.setState({ planilla_servicios: e.target.files })} />
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