import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
import api from "../../services/api"
import './home.css'

const Home   = () =>{
    const [filme, setFilme] = useState([])


    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get('/r-api/?api=filmes')
            //console.log(response.data)
            setFilme(response.data)

        }

        loadFilmes()

    }, [])



    return(
        <div className="container">
            <div className="list-filmes">
                {filme.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt ={filme.nome} />
                            <Link to= {`/filme/${filme.id}`} >Acessar</Link>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}

export default Home