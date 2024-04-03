import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Head from './Head';
import About from './About';
import Login from './Login';
import Register from './Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/head",
        element:  <Head></Head> ,
      },
      {
        path: "/about",
        element: <About></About> ,
      },
      {
        path: "/login",
        element:  <Login></Login> ,
      },
      {
        path: "/register",
        element:  <Register></Register> ,
      },



    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
