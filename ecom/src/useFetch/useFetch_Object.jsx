import axios from "axios"
import {useEffect, useState} from 'react'
import { data } from "react-router"

export  function useFetch_Object(url) {

const[data,setData]=useState(null)
const[err,setErr]=useState()

useEffect(()=>{
axios.get(url)
.then((res)=>setData(res.data))
.catch((err)=>setErr(err))

},[url])


  return [data,setErr,setData]
}
