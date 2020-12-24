import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Menu from './svg/bars-solid.svg'
import Cart from './svg/shopping-cart-solid.svg'
import Close from './svg/times-solid.svg'
import './css/Header.css'
import {DataContext} from "./Context"
class Header extends Component {
    state = {
        toggle : false
    }
    clickToggle = ()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    static contextType = DataContext;
    render() {
        const {cart} = this.context;
        return (
            <header> 
                <div className="menu" onClick={this.clickToggle}>
                    <img src={Menu} alt = "" width = "20"/>
                </div>
                <div className="logo">
                    <h1><Link to ="/ATSHOP/">AT shop</Link></h1>
                </div>
                <nav>
                    <ul className={this.state.toggle ? "toggle" : ''}>
                        <li><Link to="/ATSHOP/">Home</Link></li>
                        <li><Link to="/ATSHOP/product">Product</Link></li>
                        <li><Link to="/ATSHOP/contact">Contact</Link></li>
                        <li><Link to="/ATSHOP/about">About</Link></li>
                        <li><Link to="/ATSHOP/login">Login/Register</Link></li>
                        <li className = "close"><img src={Close} width="20" alt="" onClick={this.clickToggle}/></li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/ATSHOP/cart">
                            <img src={Cart} alt = '' width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header
