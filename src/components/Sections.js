import React, { Component } from 'react'
import Products from "./section/Products"
import Details from "./section/Detail"
import {Route} from 'react-router-dom'
export class Sections extends Component {
    render() {
        return (
            <section>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
            </section>
        )
    }
}

export default Sections
