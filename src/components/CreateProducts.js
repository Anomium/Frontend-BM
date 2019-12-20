import React, { Component } from 'react'
import axios from 'axios';
import M from 'materialize-css'
import Products from './Products'


export default class CreateProducts extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        this.getProducts()
    }

    state = {
        products: [],
        id: '',
        image: '',
        title: '',
        details: '',
        price: ''
    }


    getProducts = async () => {
        const res = await axios.get('http://localhost:4000/api/articulo')
        this.setState({ products: res.data })
        console.log(this.state.products)
    }

    onChangeImage = (e) => {
        const image = e.target.value
        this.setState({ image })
    }

    onChangeTitle = (e) => {
        const title = e.target.value
        this.setState({ title })
    }

    onChangeDetails = (e) => {
        const details = e.target.value
        this.setState({ details })
    }

    onChangePrice = (e) => {
        const price = e.target.value
        this.setState({ price })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:4000/api/articulo', {
            image: this.state.image,
            title: this.state.title,
            details: this.state.details,
            price: this.state.price
        })
        this.getProducts()
        this.setState({
            image: '',
            title: '',
            details: '',
            price: ''
        })
        console.log(res)
    }

    render() {
        return (
            <div className="row">
                <form onSubmit={this.onSubmit} className="col s12 m3 l4">
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='product' onChange={this.onChangeTitle} />
                        <label htmlFor="input_text">Producto</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='price' onChange={this.onChangePrice} />
                        <label htmlFor="input_text">Precio</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <textarea id="input_text" className="materialize-textarea" name='details' type="text" onChange={this.onChangeDetails} />
                        <label htmlFor="input_text">Detalles</label>
                    </div>
                    <div className="input-field col s11 m10 l10">
                        <input id="input_text" type="text" name='image' onChange={this.onChangeImage} />
                        <label htmlFor="input_text">Url</label>
                    </div>
                    <div className="col s8 m6 l6 offset-s4 offset-m3 offset-l6">
                        <button className="waves-effect waves-light btn" type="submit">Guardar</button>
                    </div>
                </form>
                <div className="col s12 m9 l8">
                    <div className="row ">
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
                </div>
            </div>
        )
    }
}
