import React, { Component } from 'react'
import M from 'materialize-css'
import img from '../Img/flowers-on-person-s-back-3164333.jpg'

export default class Products extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {

        const { imgCard = '../Img/flowers-on-person-s-back-3164333.jpg'} = this.props
        const { titleCard = 'Titulo carta' } = this.props
        const { cardDetails = '#' } = this.props
        const { priceCard = '$none'} = this.props

        return (
            <div>
                <div>
                    <div >
                        <div className="col s6 m4 l3 xl2">
                            <div className="card ">
                                <div className="card-image">
                                    <img src={imgCard} />
                                    <span className="card-title">
                                        {titleCard}
                                    </span>
                                </div>
                            </div>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">Detalles</div>
                                    <div className="collapsible-body"><span>{cardDetails}</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Precio</div>
                                    <div className="collapsible-body"><span>{priceCard}</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

