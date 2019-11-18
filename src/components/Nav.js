import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link className="nav-link" to="/products">Products</Link></li>
                        <li><Link className="nav-link" to="/CreateProducts">Crear Producto</Link></li>
                        <li><Link className="nav-link" to="/"> JavaScript</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
