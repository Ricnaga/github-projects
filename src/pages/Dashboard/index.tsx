import React, {useState, FormEvent} from "react";
import {FiChevronRight} from 'react-icons/fi'
import api from '../../services/api'

import {Title, Form, Repositories} from './styles'
import logoImg from '../../assets/logo.svg'
import Repository from "../Repository";

interface Repository{
    full_name: string;
    description:string;
    owner:{
        avatar_url: string;
        login: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`)
        const repository = response.data

        setRepositories([...repositories, repository])
        setNewRepo('')
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input value={newRepo}
                onChange={(e) => setNewRepo(e.target.value)}
                placeholder="Digite o nome do respoitório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            <Repositories>
                {repositories.map(repository => (
                    <a  key={repository.full_name} href="#">
                        <img src={repository.owner.avatar_url} 
                        alt={repository.owner.login}/>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>    
                        <FiChevronRight size={20}/>
                    </a>
                ))}
                 
            </Repositories>
        </>
    )
}

export default Dashboard;