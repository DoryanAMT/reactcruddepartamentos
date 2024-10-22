import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import loadingImage from './../assets/images/loading.jpg'


export default class DetalleDepartamento extends Component {
    state = {
        departamento: []
    }

    findDepartamento = () => {
        let idDepartamento = this.props.id;
        let request = "api/departamentos/"+idDepartamento; 
        let url = Global.apiUrlDepartamentos + request;

        axios.get(url).then(response => {
            // console.log(response.data)
            this.setState({
                departamento: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findDepartamento()
    }

  render() {
    return (
      <div>
        <h1>Hola</h1>
        <NavLink to="/">Back to list</NavLink>
        {
            this.state.departamento ?
            (<ul className='list-group'>
                <li className='list-group-item'>Número: {this.state.departamento.localidad}</li>
                <li className='list-group-item'>Nombre: {this.state.departamento.nombre}</li>
                <li className='list-group-item'>Localidad: {this.state.departamento.numero}</li>
            </ul>) :
            (<img src={loadingImage}/>)
            
        }
        
      </div>
    )
  }
}
