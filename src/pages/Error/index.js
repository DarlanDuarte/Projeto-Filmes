import { Link } from "react-router-dom"
import './error.css'


export default function Error(){
    return(
        <div className="error-div">
            <h1>Essa pagina nao existe</h1>
            <h2>volte para a pagina principal</h2>
            <Link to='/' className="error-btn" >Página Principal</Link>
        </div>
    )


}