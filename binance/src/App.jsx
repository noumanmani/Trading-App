import React from 'react'
import './index.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import Transation from './Pages/Transactions/Transaction'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Supports from './Pages/Supports/Supports';

function App() {
const router = createBrowserRouter([
  {
path:"/",
element:<Dashboard/>
  },
    {
      path:"/transaction",
      element:<Transation/>
    },
    {
      path:"/supports",
      element:<Supports/>
    }
  ])

  return (
    <>
  

  <RouterProvider router={router} />      
      
    </>
  )
}

export default App
