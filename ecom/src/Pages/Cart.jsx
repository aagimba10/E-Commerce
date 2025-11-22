import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Products_Fetch } from '../Products_Fetch'
import { useNavigate } from 'react-router-dom';

import {Link} from "react-router-dom"
{/* how delte cart */}
export  function Cart() {
  const [cart,setCart]=useState([])

  const[click_cart,setClick_cart]=useState(true)
 const nav=useNavigate()

  useEffect(()=>{
  axios.get('http://localhost:4000/cart')
.then((res)=>setCart(res.data))
.catch((err)=>console.log(err))

  },[click_cart])

 
  
 const product_delete = (id) => {
  axios.delete(`http://localhost:4000/cart/${id}`)
    .then(() => alert("Cart removed"))
    .then(()=>setClick_cart(!click_cart))
}

const buy=(c)=>{
  axios.post(`http://localhost:5000/orders`,{
    "title":c.title,
    "image":c.image,
    id:c.id,
    "price":c.price,
    "desc":c.desc
    ,"category":c.category
  })
  .then(()=>nav('/orders'))
}

  return (
    <div >
    <Link className='btn btn-dark rounded-pill m-5' to="/">Go Back</Link>
   
    <div className='container text-center my-5'>
      <div className="row g-5 justify-content-center ">
    {cart.map((c)=>{
    return(
    <div key={c.id} className='col-12 col-md-6 col-lg-4 '> 
   <div className="card" style={{width: "25rem"}}>
  <img className="card-img-top" src={c.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{c.title}</h5>
    <p className="card-text">Category :{c.category}</p>
    <p className='card-text fw-bold'> ₹{c.price}</p>
    <button onClick={()=>{buy(c)}} className='btn btn-success me-5'>Buy</button>
    {/* <p>{c.desc}</p> */}
    <button  onClick={()=>{product_delete(c.id)}} className="btn btn-danger"><i className="bi bi-cart-dash"></i> Remove </button>
  </div>
</div>
    <br/>  </div> 
    )
  })
  }
  </div>
  </div>
  </div>
  )
}
