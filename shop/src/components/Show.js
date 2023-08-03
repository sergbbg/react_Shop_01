import React, { Component } from "react";

export class Show extends Component {
   render () {
      return(
         <div className="item_click"> 
            <div> 
                <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
                 <h2>{this.props.item.title}</h2>
                 <p>{this.props.item.desk}</p>
                 <b>{this.props.item.price}$</b>
                 <div className='add-to-cart'  onClick ={()=>this.props.onAdd(this.props.item)} >+</div>  
               </div>
         
         </div>
      )
   }
}

export default Show   