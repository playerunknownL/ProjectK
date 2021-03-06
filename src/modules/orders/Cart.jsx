import React from 'react'
import {Link} from 'react-router-dom'

function Cart(props) {
  const {items}=props
  return (
    <React.Fragment>
      <h1>Items Added to the cart</h1>
      <div className="container">
        <div className="row">
            
            {
        items.map((items)=>(
          <div key={items.id} className="col-lg-3 py-3 px-3">
            <div className="card">
            <img src={items.img} alt="" />
            <h2>{items.name}</h2>
            <h1>{items.price}</h1>
          </div>
          </div>
        ))
      }
     
            
          
        </div>
      </div>
      
      <Link to="./Checkout">
        <button className="btn btn-success">Proceed to Checkout </button>
        </Link>
      
    </React.Fragment>
  )
}

export default Cart
