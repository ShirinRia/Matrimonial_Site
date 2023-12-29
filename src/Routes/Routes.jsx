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
            },
           
            {
                path: "/users",
                element: <Content/>,
            },
           
            {
                path: "/chat",
                element: <Content/>,
            },
           
            {
                path: "/social",
                element: <Content/>,
            },
           
            {
                path: "/portal",
                element: <Content/>,
            },
           
            {
                path: "/event",
                element: <Content/>,
            },
           
            {
                path: "/content",
                element: <Content/>,
            },
           
            {
                path: "/support",
                element: <Content/>,
            },
           
            {
                path: "/payment",
                element: <Content/>,
            },
           
        ],

    },
   
    
]);

export default Routes;
// SwiperJS , React Slick