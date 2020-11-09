import React from "react";
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import {Header, RepositoryInfo, Issues} from './styles'
import logoImg from '../../assets/logo.svg'

interface RepositoryParams{
    repository: string
} 

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();

    return (
        <>
        <Header>
            <img src={logoImg} alt="Github Explorer"/>
            <Link to='/'>
                <FiChevronLeft size={16}/>
                Voltar
            </Link>
        </Header>

        <RepositoryInfo>
            <header>
                <img src="https://avatars1.githubusercontent.com/u/47759922?s=460&u=0ee91ebdbcd0fbe63ec8b5a32f2c723c0f5cb702&v=4" alt="Naga"/>
                <div>
                    <strong>Ricardo repo</strong>
                    <p>descrição minha :)</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1809</strong>
                    <span>stars</span>
                </li>
                <li>
                    <strong>48</strong>
                    <span>forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>issues abertas</span>
                </li>
            </ul>
        </RepositoryInfo>

        <Issues>
            <Link to='#'>
               <div>
                 <strong>strongstrong</strong>
                 <p>ppppp</p>
               </div>
                <FiChevronRight size={20}/>
            </Link>
        </Issues>
        </>
    )
}

export default Repository;