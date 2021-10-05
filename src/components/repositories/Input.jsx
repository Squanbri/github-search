import React from 'react';
import '../../styles/Input.css';
import repositories from "../../state/repositories";
import {observer} from "mobx-react-lite";

const Input = observer(() => {
    return (
        <div>
            <h1>Поиск репозитория</h1>
            <span>Введите название репозитория</span>
            <input
                type="text"
                value={repositories.search}
                onChange={e => repositories.setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? repositories.sendFetch() : ''}
            />
            <button onClick={() => repositories.sendFetch()}>Искать</button>
        </div>
    );
});

export default Input;