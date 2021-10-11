import React from 'react';
import '../../styles/Search.css';
import repositories from "../../store/repositories";
import {observer} from "mobx-react-lite";
import Button from "../../components/Button";

const Search = observer(() => {
    const {search, setSearch, sendFetch} = repositories

    return (
        <div className="search">
            <h1>Поиск репозитория</h1>
            <span>Введите название репозитория</span>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? sendFetch() : ''}
            />
            <Button
                style={{
                    height: '40px',
                    width: '18%',
                    marginLeft: '2%',
                }}
                onClick={sendFetch.bind(repositories)}
            >
                Искать
            </Button>
        </div>
    );
});

export default Search;