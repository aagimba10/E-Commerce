import axios from "axios"
import { useEffect, useState } from "react"
export  function useFetch(url) {

  const [data,setData]=useState([])
  const[err,setErr]=useState(null)

  
  useEffect(()=>{

    axios.get(url)
    .then((res)=>{
      setData(res.data.products)   
  })
     
    .catch((err)=>{
if(err.response){
  setErr("Server Issued")
   {/* Response is success and request server give but in eroor why beacuse name wrong*/}
}
else if(err.request){
  setErr("Network Issue ")
  {/* why error is newtoerk error */}
}
    })
    
   
  },[url])
  return [data,err]
}
