import React, { Component } from "react";
import{AiFillDelete}  from 'react-icons/ai'
export class Order extends Component {
   render() {
      return(
         <div className="item">
            <img src={'./img/' + this.props.item.img} />
         <h2>{this.props.item.title}</h2>
         <p>{this.props.item.desk}</p>
         <b>{this.props.item.price}$</b>
         <AiFillDelete className="delete-icon-basket" onClick ={()=>this.props.onDelete(this.props.item.id)}/>
         </div>
      )
   }
}