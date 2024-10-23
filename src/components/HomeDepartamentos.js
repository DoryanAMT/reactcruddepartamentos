import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingImage from './../assets/images/loading.jpg'
import { NavLink } from 'react-router-dom'


export default class HomeDepartamentos extends Component {
    state = {
        status: false,
        departamentos: [],
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        let request = "api/departamentos";
        let url = Global.apiUrlDepartamentos+request

        axios.get(url).then(response => {
            this.setState({
                departamentos : response.data,
                status: true
            })
        })
        
    }

    // deleteDepartamento = (idDepartamento) => {
    //     let request = "api/departamentos/" + idDepartamento;
    //     let url = Global.apiUrlDepartamentos + request;
    //     console.log(url)

    //     axios.delete(url).then(response => {
    //         console.log("Deletee....")
    //     })
    // }

    componentDidMount = () => {
        this.loadDepartamentos();
    }



  render() {
    if (this.state.status == false){
        return(<img src={loadingImage}/>);
    }else{
        return(
            <div>
                <h1>Home Departamentos</h1>

                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Id departamento</th>
                            <th>Nombre</th>
                            <th>Localidad</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.departamentos.map((dept, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{dept.numero}</td>
                                        <td>{dept.nombre}</td>
                                        <td>{dept.localidad}</td>
                                        <td>
                                            <NavLink to={"/detalles/"+dept.numero} className="btn btn-info">Detalles</NavLink>
                                            <NavLink to={"/update/"+dept.numero+"/"+dept.nombre+"/"+dept.localidad} className="btn btn-warning">Update</NavLink>
                                            <NavLink to={"/delete/"+dept.numero} className="btn btn-danger">Delete</NavLink>
                                            {/* <button onClick={ () => {this.deleteDepartamento(dept.numero)}} className='btn btn-danger'>Delete</button> */}
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>

                </table>
            </div>

        );
    }
  }
}
