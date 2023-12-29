import { createBrowserRouter } from "react-router-dom";

import Content from "../Layout/Dashboard/Content/Content";
import Dashboard from "../Layout/Dashboard/Dashboard";



const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
        // errorElement: <Errorpage/>,
        children: [
           
            {
                path: "/dashboard",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/users",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/chat",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/social",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/portal",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/event",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/content",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/support",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
            {
                path: "/payment",
                element: <Content/>,
                // loader:() =>fetch('/partnership.json'),
            },
           
        ],

    },
   
    
]);

export default Routes;
// SwiperJS , React Slick