import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { Profile } from "./Pages/Profile.jsx"
import {Cart} from "./Pages/Cart.jsx"
import {Orders} from './Pages/Orders.jsx'
const router=createBrowserRouter([
  { 
    path:"/",
    element:<App/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },{
    path:"/orders",
    element:<Orders/>
  }
  ,{
    path:"/cart",
    element:<Cart/>
  }
  
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
