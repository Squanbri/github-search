import React, {useState} from 'react';
import '../../styles/Input.css';

const Input = ({setRequest, fetchRepositories}) => {
    const [search, setSearch] = useState('jetrockets')

    const toFetch = () => {
        setRequest(search)
        fetchRepositories(search)
    }

    return (
        <div>
            <h1>Поиск репозитория</h1>
            <span>Введите название репозитория</span>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? toFetch(search) : ''}
            />
            <button onClick={() => toFetch()}>Искать</button>
        </div>
    );
};

export default Input;