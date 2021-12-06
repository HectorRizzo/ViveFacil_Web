import axios from 'axios';
import { API_URL } from "./Constant";


export default class Api{

 static instanceAxios = axios.create({
    baseURL: API_URL,
    });

  //categorias
  static getCategorias = () => {
    return Api.instanceAxios.get('/categorias' , {
      headers: {
      'Content-Type': 'application/json'
      }
    }
    );
  }
  
    //Proveedores pendientes
  static  getProveedoresPendientes = () => {
    return Api.instanceAxios.get("/proveedor_pendiente/")
  }; 

  static postProveedorPendiente = (data) =>{
    return Api.instanceAxios.post('/proveedor_pendiente/',data)
  }

  //promociones
  static getPromociones = () =>{
    return Api.instanceAxios.get('/promociones/')
  }

  //servicios
  static getServicios = () =>{
    return Api.instanceAxios.get('/servicios/')
  }




}
