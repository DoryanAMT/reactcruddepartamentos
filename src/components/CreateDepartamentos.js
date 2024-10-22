import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class CreateDepartamentos extends Component {
    //  declaramos la cajas
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    // creamos state

    state = {
        status: false
    }

    //creamos funcion para insertar con preventDefault
    insertarDepartamento = (e) => {
        e.preventDefault();
        // guardamos en variables las cajas
        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;
        // guardamos las variables en un array
        let departamento = {
            numero : id,
            nombre: nombre,
            localidad: localidad
        }

        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos + request

        axios.post(url,departamento).then(repose => {
            this.setState({
                status:true
            })
        })
    }


  render() {
    if (this.state.status == true) {
        return(<Navigate to="/"/>)
    } else {
        return(
        <div>
            <h1>Nuevo Departamento</h1>
            <form>
                <label>Id departamento</label>
                <input type='text' ref={this.cajaId} className='form-control'/>
                <label>Nombre: </label>
                <input type='text' ref={this.cajaNombre} className='form-control'/>
                <label>Localidad: </label>
                <input type='text' ref={this.cajaLocalidad} className='form-control'/>
                <button className='btn btn-warning' onClick={this.insertarDepartamento}>insertar departamento</button>
            </form>
        </div>
        );
    }
  }
}
