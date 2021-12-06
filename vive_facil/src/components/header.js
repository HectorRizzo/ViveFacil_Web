

import React,{useContext} from 'react'
import bar from './../images/iconos/Iconos web vive fácil-13.png'
import tabBar from './../images/iconos/Iconos web vive fácil-10.png'
import { Navbar,Container,Nav } from 'react-bootstrap';
import servicios from './../images/iconos/Iconos web vive fácil-07.png'
import promociones from './../images/iconos/Iconos web vive fácil-05.png'
import afiliate from './../images/iconos/Iconos web vive fácil-06.png'
import contacto from './../images/iconos/Iconos web vive fácil-08.png'
import lineaAmarilla from './../images/iconos/Iconos web vive fácil-14.png'
import servicios_select from './../images/iconos/Iconos web vive fácil-03.png'
import promociones_select from './../images/iconos/Iconos web vive fácil-01.png'
import afiliate_select from './../images/iconos/Iconos web vive fácil-02.png'
import contacto_select from './../images/iconos/Iconos web vive fácil-04.png'

import logo from './../images/logo.png'
import {Context} from './../helpers/context'

import State from './../helpers/State'
import './header.css'

export const HeaderBar = props => {

    let {titulo} = props
    //si titulo = '' entonces no se muestra el titulo
    let showTitulo = titulo === '' ? false : true
    let promocionesIcon= titulo === 'PROMOCIONES' ? promociones_select : promociones
    let serviciosIcon = titulo === 'SERVICIOS' ? servicios_select : servicios
    let afiliateIcon = titulo === 'AFILIATE' ? afiliate_select : afiliate
    let contactoIcon = titulo === 'CONTACTO' ? contacto_select : contacto

    

   
    
    return (
        <div>
                <img src={lineaAmarilla} className='linea-amarilla'  alt="logo"/>

        {showTitulo && <img src={tabBar} className='bar-nav yellow-info' alt="logo"/>}
        
      <img src={bar} className='bar-nav'  alt="logo"/>


      <p className='titulo-tab'> {titulo} </p>


      
      <Navbar collapseOnSelect expand="lg" fixed='top' bg="*" className='header-nav' onSelect={(e)=>{console.log(e)}}>
            <Container className='nav-container'>

              <Navbar.Toggle aria-controls="responsive-navbar-nav nav" />
              <Navbar.Collapse className='nav'>
              <Nav className="me-auto nav">
                <Nav.Link  href="/">
                  <img src={logo} className='icon-nav logo' alt="logo"/>
                  </Nav.Link>
                <Nav.Link  href="/servicios"> <img src={serviciosIcon} className="icon-nav" alt="servicios" /> </Nav.Link>
                <Nav.Link  href="/promociones"><img src={promocionesIcon}  className="icon-nav" alt="promociones" /></Nav.Link>
                <Nav.Link  href="/afiliate"><img src={afiliateIcon} className="icon-nav" alt="afiliate" /></Nav.Link>
                <Nav.Link  href="/contactos"> <img src={contactoIcon} className="icon-nav" alt="contacto" /></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
            
        </div>
    )
}
