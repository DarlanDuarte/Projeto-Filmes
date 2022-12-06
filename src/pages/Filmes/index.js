import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

import './filme-info.css'
import api from "../../services/api";

export default function Filmes(){
    const { id } = useParams()
    
    const navigate = useNavigate()


    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        
        async function loadFilmes(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            //console.log(response.data)

            if(response.data.length === 0){
                navigate('/')
                return;
            }


            setFilmes(response.data)
            setLoading(false)

        }

        loadFilmes()


    }, [id, navigate])


    function salvarFilmes(){
        const minhaLista = localStorage.getItem('filmes')
        
        let filmesSalvos = JSON.parse(minhaLista) || [];

        
        /* Se tiver algum filme salvo com o mesmo id deve ser ignorado... */
        // some = Se tiver algum filme salvo dentro do array
        // sove = devolve um true ou um false
        const repeatFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filmes.id )

        if(repeatFilme){
            alert('Voce ja possui esse filme Salvo')
            return;
        }

        filmesSalvos.push(filmes)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        alert('Filme Salvo com Sucesso')

        


    }









    if(loading === true){
        return(
            <div className="filme-info">
                <h1>Sua Pagina Está Carregando</h1>
            </div>
        )
    }

        return(
            <div className="filme-info">
                <h1 className="titulo">{filmes.nome}</h1>
                <img className="img" src= {filmes.foto} alt = {filmes.nome} />

                <h3>Sinopse</h3>
                {filmes.sinopse}

                <div className="botoes">
                    <button onClick={ salvarFilmes }>Salvar</button>
                    <button>
                        <a href={`https://www.youtube.com/results?search_query=${filmes.nome}`} target = '__black' >Trailer</a> 
                    </button>
                </div>
            </div>
        )
    }

    