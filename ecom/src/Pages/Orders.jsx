import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from "react-router-dom"

export  function Orders() {

  const nav=useNavigate()
const [order_Data,setOrder_Data]=useState([])
const [buys,setBuys]=useState([])
const [btn,setBtn]=useState(1)
const [refresh, setRefresh] = useState(false);


{/* Now class to classname*/ }

useEffect(()=>{
axios.get("http://localhost:5000/orders")
.then(res=>setOrder_Data(res.data))
  .catch(err => {
    console.log(err); });
   
    axios.get("http://localhost:5000/order_buy")
 .then((res)=>setBuys(res.data))
 .catch(err=>console.log(err))

},[refresh])



const buy=(order)=>{
  alert(`Order Placed Successfully ${order.title}`)
  axios.post(`http://localhost:5000/order_buy`,{
    "name":order.title,
    "image":order.image,
    id:order.id,
    "price":order.price,
    "Delivery":"Delivery With In 2 Days"

  })
  .then(()=>{
 return axios.delete(`http://localhost:5000/orders/${order.id}`)

  }
)
  .then(()=>{setRefresh(!refresh)})

}

const cancel=(order)=>{
   const msg=window.confirm("Are You Sure To Cancel")

   if(msg){
  nav('/')
  axios.delete(`http://localhost:5000/orders/${order.id}`)
   .then(()=>{
       alert("order Canceling ...")}

  )
 

   }

   else {
  nav('/orders')
   }
   

}
const goback=(e)=>{
 e.preventDefault()
const go_msg = window.confirm("Are You Sure To Exit")

if(go_msg){
nav('/')
}

else{
  nav('/orders')

}

}

const add=()=>{
  setBtn(btn+1)
}

const sub=()=>{
  if(btn>1){
    setBtn(btn-1)
}
else{
  alert("Quantity cannot be less than 1")
}

}

const Handletrack=(con_ord)=>{

alert(`Delivery Status: ${con_ord.Delivery} `)
}

const Handlecancel=(id)=>{
  
  axios.delete(`http://localhost:5000/order_buy/${id}`)
  .then(()=>{
     alert("Order Cancel Successfully");
      setRefresh(!refresh)
  })
}
  return (<>
    <div className='m-3'>


     
      <button onClick={goback} className='btn btn-warning rounded-5'>Go Back</button>
      <div className='container  '>
       {buys.length>0 && <h2 className='text-primary text-center m-5'>Order Details</h2>}

{buys.length>0 ?(<div className='row g-5 '>
{buys.map((con_ord)=>(

  <div className='col-lg-6 d-flex justify-content-center text-center' key={con_ord.id}>
 <div className="card" style={{width: "500px"}}>
  <img className="card-img-top" src={con_ord.image} alt="Card image cap"/>
  <div className="card-body ">
    <div className='p-3'>
    <h5 className="card-title ">Brand :{con_ord.name}</h5>
    <b className=' '>Price :{con_ord.price}</b> 
    </div>
    <button onClick={()=>{Handletrack(con_ord)}} className="btn btn-success me-5">Track Order </button> 
    <button  className=" btn btn-danger" onClick={()=>{Handlecancel(con_ord.id)}}>Cancel</button>

  </div>
</div>

</div>
))}

</div>
)
:(<div>

</div>
)}


<div>

</div>

</div>
<br/>
    <div>

{order_Data.length>0 ?(
  <div>
    {order_Data.map((order)=>(
      <div key={order.id}>
     
<div className="container my-5">
  <div className="card shadow-lg rounded-3 p-3">
    <div className="row g-3">
      
      <div className="col-md-6 text-center">
        <img src={order.image} 
             className="img-fluid rounded-3" alt="Product Image"/>
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h3 className="fw-bold"> {order.title}</h3>
        <p className="text-muted mb-2">Category {order.category}</p>
        <h4 className="text-success fw-bold mb-3">₹  {order.price}</h4>

        <div className="d-flex align-items-center mb-3">
          <button className="btn btn-outline-secondary" onClick={sub}>-</button>
          <span className="mx-3 fw-bold">{btn}</span>
          <button className="btn btn-outline-secondary" onClick={add}>+</button>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-success flex-grow-1 " onClick={()=>{buy(order)}} >Confrim</button>
          <button className="btn  btn-danger flex-grow-1" onClick={()=>{cancel(order)}}>Cancel</button>
        </div>
      </div>

    </div>

    <div className="mt-4">
      <h5>Product Details</h5>
      <p className="text-muted">
        {order.desc}
      </p>
    </div>
  </div>
</div>

      </div>
     
     ))}
     
  </div>

):(
  <div>
<h3 className='text-primary m-5 text-center'>No Pending Orders</h3>
  </div>
)}
</div>


    </div>
    </>
  )
}
