import React, { Component } from 'react'
import Products from "./section/Products"
import Details from "./section/Detail"
import Payment from "./section/Payment"
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
import NothingPage from './section/NothingPage'
export class Sections extends Component {
    render() {
        return (
            <section>
                <Route path="/ATSHOP" component={Products} exact/>
                <Route path="/ATSHOP" component={Products} exact/>
                <Route path="/ATSHOP/product" component={Products} exact/>
                <Route path="/ATSHOP/product/:id" component={Details}/>
                <Route path="/ATSHOP/cart" component={Cart} />
                <Route path="/ATSHOP/Payment" component={Payment} />
                <Route path="/ATSHOP/about" component={NothingPage} />
                <Route path="/ATSHOP/contact" component={NothingPage} />
                <Route path="/ATSHOP/login" component={NothingPage} />
            </section>
        )
    }
}

export default Sections
