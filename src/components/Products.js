import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import img from '../Img/flowers-on-person-s-back-3164333.jpg'
 
export default class Products extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="col s6 m4 l3">
                        <div className="card">
                            <div className="card-image">
                                <img src={img} />
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-action">
                                <div className="row">
                                    <Link className="nav-link" to="/">Detalles</Link>
                                    <a>Precio:</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

