import React, { Component } from 'react'

import Products from './Products'

export default class CreateProducts extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12 m3 l4">
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text"/>
                        <label htmlFor="input_text">Producto</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text"/>
                        <label htmlFor="input_text">Precio</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text"/>
                        <label htmlFor="input_text">Talla</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <textarea id="input_text" className="materialize-textarea" />
                        <label htmlFor="input_text">Caracteristicas</label>
                    </div>
                    <div className="col s8 m6 l6 offset-s4 offset-m3 offset-l6">
                        <a className="waves-effect waves-light btn">Guardar</a>
                    </div>
                </form>
                <div className="col s12 m9 l8">
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                </div>
            </div>
        )
    }
}
