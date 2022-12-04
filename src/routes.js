import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home";

import Header from "./components/Header";


const Router = () =>{ 
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element = {<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router