import { use, useEffect, useState,createContext } from "react"
import { useNavigate } from 'react-router-dom';
import { useFetch } from "./useFetch/useFetch_Array"
import axios from "axios"
import { Orders } from "./Pages/Orders";
import { App } from "./App";
export const child=createContext()
export  function Products_Fetch({search}) {

 const[data,err]=useFetch('https://dummyjson.com/products?limit=100')
const[cart,setCart]=useState("add cart")
const[buy,setBuy]=useState("Buy")

{/* Search using prod.title*/}

 const filteredProducts = Array.isArray(data) 
 ?data.filter((items) =>
    items.title.toLowerCase().includes(search.toLowerCase()))
:[]
  

 const nav=useNavigate()

  const postUpdate=(prod)=>{


axios.post('http://localhost:4000/cart',{id:String(prod.id),"title":prod.title,"image":prod.thumbnail,"category":prod.category,"price":prod.price,"desc":prod.description})
.then(alert('Added cart'))

 }

 const buy_Click=(prod)=>{
  axios.post('http://localhost:5000/orders',
    {id:String(prod.id),"title":prod.title,"price":prod.price,"delivery_In":"delivery within 2 days","image":prod.thumbnail,"category":prod.category,"desc":prod.description})
    .then(alert("Processing..."))
    .then(nav('/orders'))
 }
  return (
<div className=" card_mstart ">
  
<div>
{data.length >0 ?(
<div className="container ">
  <div className="row">
  {filteredProducts.map((prod)=>{
    
return(<div className=" col-3  mb-4 mt-3 " key={prod.id}>

<div className="card  " style={{width: "18rem"}}>

  <img src={prod.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">


<div className="text-center"> {/* Products Details Div */}
    <h5 className="card-title ">{prod.title}</h5>
    <p className="card-text">{prod.description}</p>
{/*ICons And Emoji */}
  <p> Price : ₹ {prod.price}</p>
  <p> Rating : <i className="bi bi-star-fill text-warning"></i> {prod.rating}</p>
  <p> Stock : <i className="bi bi-box-seam text-danger"></i> {prod.stock} </p> 
  <p> Brand  : <span className="text-secondary">&reg;</span>  {prod.brand} </p>
  <p> Category : <i className="bi bi-tag-fill"></i> {prod.category}</p>

  {/*Buttons  */}
  
  <button  className="btn btn-success me-3" onClick={()=>buy_Click(prod)} >{buy}</button>
  <button onClick={()=>postUpdate(prod)} className="btn btn-warning">{cart}</button>

</div>

  </div>
</div>

  
  

  </div>)
  })} </div>
</div>
)
:(
<div className="d-flex justify-content-center">
{err ? (<h2 className="text-danger">{err}</h2>) : (<h2 >Loading...</h2>)}  
</div>
)}
</div>

</div>  )
}
