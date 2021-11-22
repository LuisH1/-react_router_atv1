import React from 'react';
import { HeaderComponent, DivHeader,Ul } from './style';
import { Link} from 'react-router-dom'


function Header(){


    return(
       <HeaderComponent>
            
            <DivHeader>
                <h1>Logo</h1>
                <Ul>
                <li><Link to="/home">Home </Link></li>
                <li><Link to="/music">Musica</Link></li>
                <li><Link to="/city">Cidade</Link></li>            
                </Ul>
            </DivHeader>

        </HeaderComponent>

    )
}


export default Header