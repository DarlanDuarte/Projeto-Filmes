import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './filme-info.css'
import api from "../../services/api";

export default function Filmes(){
    const { id } = useParams()
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        
        async function loadFilmes(){
            const response = await api.get(`/r-api/?api=filmes/${id}`)
            // console.log(response.data)
            setFilmes(response.data)
            setLoading(false)

        }

        loadFilmes()


    }, [id])

    if(loading === true){
        return(
            <div className="filme-info">
                <h1>Sua Pagina Está Carregando</h1>
            </div>
        )
    }

        return(
            <div className="filme-info">
                <h1>Pagina Detalhes { id }</h1>
            </div>
        )
    }