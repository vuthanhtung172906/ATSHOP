import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        return (
            <div className="colors">
                {
                                this.props.item.colors.map((color,index)=>(
                                    <button key={index} style={{background: color}}></button>
                                ))
                }
            </div>
        )
    }
}
export default Colors

