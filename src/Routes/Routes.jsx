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
           
        ],

    },
   
    
]);

export default Routes;
// SwiperJS , React Slick