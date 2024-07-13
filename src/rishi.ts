rishi.css  

 
import './App.css';
 
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
 
 const router = createBrowserRouter([
    {path:  "/general",
      element:<News pageSize = {4} category = "general" />
    } ,
    {path:  "/sports",
      element:<News pageSize = {4} category = "sports" />
    } ,
    {path:  "/entertainment",
      element:<News pageSize = {4} category = "entertainment" />
    } ,
    {path:  "/health",
      element:<News pageSize = {4} category = "health" />
    } ,
    {path:  "/business",
      element:<News pageSize = {4} category = "business" />
    } ,
    {path:  "/technology",
      element:<News pageSize = {4} category = "technology" />
    } ,
    {path:  "/science",
      element:<News pageSize = {4} category = "science" />
    } 
    
  ])
export default class App extends Component {
 

  render() {
    return ( <>
     
      <div>
        <Navbar/>
       
       
        <RouterProvider router={router} />
      </div>
      </>
    )
  }
}