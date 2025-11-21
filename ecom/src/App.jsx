import { useState } from "react"
import { Header } from "./Header/Header"
import {Products_Fetch} from "./Products_Fetch"
export function App() {
  const[search,setSearch]=useState("")
  return (
    <>
    
    <Header search={search} setSearch={setSearch}/>
    <Products_Fetch search={search}/> 
     

 </>
 
  )
}

