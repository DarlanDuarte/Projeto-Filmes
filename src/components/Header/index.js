import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <Link className='titulo' to= '/'> Filmes</Link>
            <Link className='salvos' to = '/'>Salvos</Link>
        </header>
    )
}


export default Header