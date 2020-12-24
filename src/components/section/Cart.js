import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import Colors from './Colors'
import '../css/Details.css'
import '../css/Cart.css'
export class Cart extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.getBill();
    }
    render() {
        const {cart,totalBill,reduction, increasion,deleteitem} = this.context;
        if(cart.length === 0){
            return (<h2 style={{textAlign:"center"}}>NoThing in Cart</h2>)
        }else{
        return (
            <>
                {
                cart.map(item => (
                    <div className="details cart" key = {item._id}>
                        <img src={item.src} alt=""/>
                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>${item.price * item.count}</span>
                            </div>
                            <Colors item = {item}/>
                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <div className="amount">
                                <button onClick={()=>{reduction(item._id)}}>-</button>
                                <span>{item.count}</span>
                                <button onClick={()=>{increasion(item._id)}}>+</button>
                            </div>
                        </div>
                        <div className="delete" onClick={()=>deleteitem(item._id)}>X</div>
                    </div>
                
                ))               
             }
             <div className="total">
                <Link to="/ATSHOP/Payment" className="payment">Payment</Link>
                <h3>Total : $ {totalBill}</h3>
             </div>

            </>
        )
        }
    }
}

export default Cart
