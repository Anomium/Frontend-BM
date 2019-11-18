import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div div className="row"></div>
                <div div className="row"></div>
                <div className="row">
                <div className="col s4 m4 l4"></div>
                    <div className="col s6 m4 l3">
                        <div className="card-panel ">
                            <form className="container justify-content center">
                                <div className="input-field">
                                    <input id="input_text" type="text" />
                                    <label htmlFor="input_text">Usuario</label>
                                </div>
                                <div className="input-field">
                                    <input id="input_text" type="text" />
                                    <label htmlFor="input_text">Contraseña</label>
                                </div>
                                <a className="waves-effect waves-light btn">Iniciar</a>
                            </form>
                        </div>
                    </div>
                    <div className="col s4 m4 l3"></div>
                </div>
                <div div className="row"></div>
            </div>
        )
    }
}
