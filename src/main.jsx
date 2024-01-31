import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className="md:max-w-screen-xl mx-auto ">
     <RouterProvider router={router} />
     </div>
  </React.StrictMode>,
)
