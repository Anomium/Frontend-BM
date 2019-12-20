import React, { Component } from 'react'
import axios from 'axios'

import Products from './Products'


export default class ListProducts extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        const res = await axios.get('http://localhost:4000/api/articulo')
        this.setState({ products: res.data })
        console.log(this.state.products)
    }

    render() {
        return (
            <div className="row">
                <div>
                    {
                        this.state.products.map(product => (
                            <Products
                                key={product._id}
                                imgCard={product.image}
                                titleCard={product.title}
                                cardDetails={product.details}
                                priceCard={product.price}
                            />
                        ))

                    }
                </div>
            </div>
        )
    }
}
