import React, { Component } from 'react'

import Products from './Products'

export default class ListProducts extends Component {
    render() {
        return (
            <div className="row">
                <div>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
                    <Products/>
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
