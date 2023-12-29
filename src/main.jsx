import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {

  RouterProvider
} from "react-router-dom";
import Routes from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

        <div >
         <RouterProvider router={Routes} />
        </div>
 

  </React.StrictMode>,
)