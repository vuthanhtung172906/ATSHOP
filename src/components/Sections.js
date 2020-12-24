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
                <Route path="/" component={Products} exact/>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/cart" component={Cart} />
                <Route path="/Payment" component={Payment} />
                <Route path="/about" component={NothingPage} />
                <Route path="/contact" component={NothingPage} />
                <Route path="/login" component={NothingPage} />
            </section>
        )
    }
}

export default Sections
