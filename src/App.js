

import Router from "./routes";
import { ToastContainer } from "react-toastify";

import './style.css'
import 'react-toastify/dist/ReactToastify.css';




const App = () =>{
  return(
    <div className="app">
      <Router />
      <ToastContainer autoClose ={2000} />
    </div>
  )
}


export default App