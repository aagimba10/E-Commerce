import { useState } from "react"
import {Link} from "react-router-dom"
export  function Header({search,setSearch}) {

  const search_unlock=(e)=>{
setSearch(e.target.value)
  }
 

  return (
<div className="" style={{minHeight:"30vh"}}>
<header className="position-fixed  w-100  bg-white shadow" style={{ zIndex: 20,height:"125px"}}>
    
<div className="mt-3 d-flex justify-content-between align-items-center  "> {/*1.Logo*/}
    <div className="d-flex  ms-4 ">
<i className=" font-size-icon bi bi-amazon  me-4 "></i>
<h4 className="font-size-icon">ArcadeShop</h4>
    </div>

<div className="d-flex " style={{height:"35px"}}>
<input className="  rounded" type="text " placeholder=" Search The Products..." 
value={search} onChange={search_unlock}
style={{width:"700px"}} />

<button  className="btn btn-primary ms-3 "><i className="bi bi-search "></i></button>

</div>

<div className="d-flex me-3 navbar   ">
 <ol>
       
<h6 className="me-4 "><i className="bi bi-person-fill"></i> 
<Link className="" to="/profile" >View Profile</Link> </h6>

<h6 className="my-3"> <i className="bi bi-cart4"></i>  
<Link className="" to="/cart" >View Cart</Link> </h6>

<h6 > <i className="bi bi-heart"> </i>
<Link className="" to="/orders" >View Orders</Link> </h6>

</ol>
</div>


</div>



</header>

</div>  )
}
