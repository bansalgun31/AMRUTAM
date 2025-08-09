import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Forum from "./pages/Forum";
import ProductPage from "./components/ProductPage";
import IngredientPage from "./components/IngredientPage";

import {
  createBrowserRouter ,
  RouterProvider
  
   } from "react-router-dom";
let router =createBrowserRouter(
  [
    {
      path:"/",
    element:<Navbar/>,
    },
    {
      path:"/shop",
    element:<Shop/>,
    },
    {
      path:"/forum",
    element:<Forum/>,
    },
    {
      path:"/product/:id",
    element:<ProductPage />,
    },
    {
      path:"/ingredient/:id",
    element:<IngredientPage />,
    },
    


    
  ]

);






function App() {
  
  return (


    <>
    

    
    {/*<Header/> */}
    <RouterProvider router={router}/>
    
  
   </>   
  );
}

export default App