import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import './favoritos.css'

export default function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        const minhaLista = localStorage.getItem('filmes')
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])


    function handleDelete(id){
        //Devolve todos os filmes menos o que voce clicou para excluir
        let filtroFilmes = filmes.filter((item) =>{
            return (item.id !== id)
        })

        setFilmes(filtroFilmes)
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes))
        toast.success('Filme excluido com sucesso')
    }


    return(
        <div id="meus-filmes">
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui nemhum filme salvo </span>}

            <ul>
                {filmes.map((itens)=>{
                    return(
                        <li key={itens.id}>
                            <span>{itens.nome}</span>

                            <div>
                                <Link to={`/filme/${itens.id}`}>Ver Filme</Link>
                                <button onClick={()=> handleDelete(itens.id)}>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

/* OBS: Quando se passa um parametro dentro de uma funçao 
Ex: chamarFunçao(itens.id) o React chama a funçao automaticamente.

Quando chama uma funçao vazia ele so executa quando ela é chamada
EX: chamarFunçao(){

}
So é excutado quando chamar em baixo 
    chamarFunçao()


Para essa funçao que tem um parametro nao ser chamada automaticamente se deve
passar uma funçao anonima 
Ex: (() => chamarFunçao(itens.id))    
*/