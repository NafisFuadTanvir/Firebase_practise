import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Signin from './Components/Signin.jsx';
import profile from "./Components/profile.jsx"
import Authprovider from './Provider/Authprovider.jsx';
import Orders from './Components/Orders.jsx';

import Privateroute from './Components/Privateroute.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signin",
        element:<Signin></Signin>
      },
      {
        path:"/orders",
        element:<Privateroute><Orders></Orders></Privateroute>
      },
      {
        path:"/profile",
        element: <Privateroute> <profile></profile> </Privateroute>
      }



    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>

    <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
