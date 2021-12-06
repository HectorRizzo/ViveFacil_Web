import { Navbar,Container,Nav } from 'react-bootstrap';
import React, {useState, useContext, useEffect}  from 'react';
import './App.css';
//import react 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './images/logo.png'

//iconos
//navbar
import bar from './images/iconos/Iconos web vive fácil-13.png'
import tabBar from './images/iconos/Iconos web vive fácil-10.png'
import servicios from './images/iconos/Iconos web vive fácil-07.png'
import promociones from './images/iconos/Iconos web vive fácil-05.png'
import afiliate from './images/iconos/Iconos web vive fácil-06.png'
import contacto from './images/iconos/Iconos web vive fácil-08.png'
import {Context} from './helpers/context';

// pages
import Home from './pages/home/Home';
import Servicio from './pages/servicios/Servicios';
import Contacto from './pages/contacto/Contacto';
import Promociones from './pages/promociones/Promociones';
import Afiliate from './pages/afiliate/Afiliate';

//componentes
import {footerPage} from './components/footer.js'
import {HeaderBar} from './components/header.js'
import State from './helpers/State';


function App() {
  const currentURL = window.location.href // returns the absolute URL of a page
  let arrayUrl = currentURL.split('/')
  let headTitle = arrayUrl[arrayUrl.length-1]
  console.log(headTitle)

  let crearHeader=()=>{
    const estado = new State('');

    return( 

      <HeaderBar titulo={headTitle.toUpperCase()}/>

    )
  }

  useEffect(() => {
    crearHeader();
  }, []);

  
  //usar state en function app

  return (
    <div>
      <header className='header-bar' fixed='top'>
      
         {crearHeader()}
      </header>
      <body className='main-container'>

        {/*Router de react-router-dom*/}
        
      <Router>
        <div>
          

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch  >
            <Route path="/servicios">
              <Servicio />
            </Route>
            <Route path="/afiliate">
              <Afiliate />
            </Route>
            <Route path="/contactos">
              <Contacto />
            </Route>
            <Route path="/promociones">
              <Promociones />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
    

      </body>

      <footer>
        {footerPage()}
      </footer>

    
      

    </div>
  );
}

export default App;
