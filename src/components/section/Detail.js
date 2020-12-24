import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
export class Details extends Component {
    state = {
        product: []
    }
    static contextType = DataContext;
    getProduct = ()=>{
        if(this.props.match.params.id){
            const data = this.context.products.filter(item => {
                return item._id === this.props.match.params.id 
            })
            this.setState({
                product:data
            })
        }

    }
    componentDidMount(){
        this.getProduct();
    }
    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
            {
                product.map(item => (
                    <div className="details" key = {item._id}>
                        <img src={item.src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price}</span>
                            </div>
                            <Colors item = {item}/>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <Link to="/cart" className="cart" onClick={()=>{addCart(item._id)}}>
                            Add to cart
                            </Link>
                        </div>
                    </div>
                ))
            }
            </>
        )
    }
}

export default Details
