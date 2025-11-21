import {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import { useFetch_Object } from '../useFetch/useFetch_Object'
{/*  */}
export  function Profile() {
  
const[data,setErr,setData]=useFetch_Object('http://localhost:3000/profile')

const [error,setError]=useState({})

const handlechange=(e)=>{
setData({
  ...data,
  [e.target.name]:e.target.value
  
  
})
}

const handleupdate=(e)=>{
e.preventDefault()

let list_Error={};
if(!data.names){
  list_Error.names="Name Cannot Be Empty"
}
if(!data.email.includes("@")){
list_Error.email="Email Is Not valid"
}

if(!data.password ){
  list_Error.password="Password Cannot Be Empty"
}
else if(data.password.length <8){
list_Error.password="Password atleast more than 8 Characters"
}
if(data.zip.length<=5 ){
  list_Error.zip="Zip Cannot Be Empty"
}
else if(!/^\d{6}$/.test(data.zip)) {
  list_Error.zip = "Zip must be 6 digits"
}

if(!data.city){
  list_Error.city="City Cannot Be Empty"
}
if(!data.address){
    list_Error.address="Address 1 Cannot Be Empty"

}
if(!data.address2){
    list_Error.address2="Address 2  Cannot Be Empty"

}
if(Object.keys(list_Error).length>0){
  setError(list_Error)
  return
}

setError({})
axios.put('http://localhost:3000/profile',data)
.then(()=>alert('Profile Updated Sucessfully'))
.catch((err)=>setErr(err))
}
  return (
    <>
<div className='m-5'> {/* Go back Button */}
 <Link className='btn btn-dark rounded-pill' to="/">Go Back</Link>
    </div>

       
<div> {/* Profile Details  */}
 {data ? (<div  >

<form   className="d-flex justify-content-center align-items-start mt-5 vh-100" onSubmit={handleupdate}>
  <div  className="w-50 p-4 rounded shadow-lg bg-white" >

    {/* Name (centered) */}
    <div className="mb-3 text-center" >
      <label htmlFor="inputName4" className="name_marign form-label d-block">Name</label>
      <input
        name='names'
        type="text"
        className=" form-control mx-auto w-40"
        id="inputName4"
        value={data.names}
        placeholder="Enter Your Name"
        onChange={handlechange}
      />
{error.names && <small className="text-danger">{error.names}</small>}
    </div>

    {/* Email & Password */}
    <div className="row">
      <div className="mb-3 col-md-6">
        <label htmlFor="inputEmail4" className="form-label">Email</label>
        <input
          name='email'
          type="text"
          className="form-control"
          id="inputEmail4"
          value={data.email}
          placeholder="Enter Your Email"
          onChange={handlechange}
        />
      {error.email && <small className='text-danger'>{error.email}</small>}
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="inputPassword4" className="form-label">Password</label>
        <input
          name='password'
          type="password"
          className="form-control"
          id="inputPassword4"
          value={data.password}
          placeholder="Enter Your Password"
          onChange={handlechange}
        />
        {error.password && <small className="text-danger">{error.password}</small>}
      </div>
    </div>

    {/* Address */}
    <div className="mb-3">
      <label htmlFor="inputAddress" className="form-label">Address</label>
      <input 
      name='address'
        type="text"
        className="form-control"
        id="inputAddress"
        value={data.address}
        placeholder="Enter Your Address"
        onChange={handlechange}
      />
      {error.address && <small className="text-danger">{error.address}</small>}

    </div>

    <div className="mb-3">
      <label htmlFor="inputAddress2" className="form-label">Address 2</label>
      <input
      name='address2'
        type="text"
        className="form-control"
        id="inputAddress2"
        value={data.address2}
        placeholder="Apartment, studio, or floor"
        onChange={handlechange}
      />
            {error.address2 && <small className="text-danger">{error.address2}</small>}

    </div>

    {/* City, State & Zip */}
    <div className="row">
      <div className="mb-3 col-md-6">
        <label htmlFor="inputCity" className="form-label">City</label>
        <input
        name='city'
          type='text'
          className="form-control"
          id="inputCity"
          value={data.city}
          placeholder="Enter Your City"
          onChange={handlechange}
        />
      </div>
        {error.city && <small className="text-danger">{error.city}</small>}


      <div className="mb-3 col-md-4">
        <label htmlFor="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select" name='state' value={data.state} onChange={handlechange}>
          <option>Choose Your State</option>
          <option>Tamil Nadu</option>
          <option>Kerala</option>
          <option>Karnataka</option>
          <option>Andhra Pradesh</option>
          <option>Maharashtra</option>
        </select>
      </div>

      <div className="mb-3 col-md-2">
        <label htmlFor="inputZip" className="form-label">Zip</label>
        <input
          name='zip'
          type="text"
          className="form-control"
          id="inputZip"
          value={data.zip}
          placeholder="Enter Zip Code"
          onChange={handlechange}
        />
      {error.zip && <small className="text-danger">{error.zip}</small>}

      </div>
    </div>
<div className='text-center'>
    <button type="submit" className=" btn_update_profil btn btn-primary">Update Profile</button>
    </div>
  </div>

</form>


 </div> ):(<div>Loading...</div> )} 

</div>
    
    
    
    </>
  )
}
