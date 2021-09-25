import React, {useState} from 'react';

const Input = ({setRequest}) => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <h1>Поиск репозитория</h1>
            <span>Введите название репозитория</span>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? setRequest(search) : ''}
            />
            <button onClick={() => {
                if (search) {
                    setRequest(search)
                }
            }}>Искать</button>
        </div>
    );
};

export default Input;