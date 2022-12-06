import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <Link className='titulo' to= '/'> Filmes</Link>
            <Link className='salvos' to = '/favoritos'>Salvos</Link>
        </header>
    )
}


export default Header