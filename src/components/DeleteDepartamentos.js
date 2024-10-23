import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class DeleteDepartamentos extends Component {

    deleteDepartamento = (idDepartamento) => {
        let request = "api/departamentos/" + idDepartamento;
        let url = Global.apiUrlDepartamentos + request;
        console.log(url)

        axios.delete(url).then(response => {
            console.log("Deletee....")
        })
    }

    confimacionBorrado = (confirmacion) => {
        if (confirmacion) {
            this.deleteDepartamento(this.props.id);
        }else{
            <Navigate to="/"/>
        }

    }

  render() {
    return (
      <div>
        <h4>Estas seguro que quieres borrar el departamento: {this.props.id}</h4>
        <form>
            <button onClick={() => {this.confimacionBorrado(true)}}>Si</button>
            <button onClick={() => {this.confimacionBorrado(false)}}>No</button>
        </form>
      </div>
    )
  }
}
