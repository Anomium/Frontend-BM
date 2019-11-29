import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link className="nav-link" to="/Home">Inicio</Link></li>
                        <li><Link className="nav-link" to="/ListProducts">Productos</Link></li>
                        <li><Link className="nav-link" to="/CreateProducts">Crear Producto</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
