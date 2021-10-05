import React from 'react';
import Repository from "../repository/Repository";
import '../../styles/ListRepositories.css'
import repositories from "../../state/repositories";
import {observer} from "mobx-react-lite";

const ListRepositories = observer(() => {
    return (
        <div>
            <ul className="list__repositories">
                { repositories.repositories.length === 0
                    ? <div> Мы не нашли репзиториев по вашему запросу </div>
                    :
                    repositories.repositories.map(repository =>
                            <Repository repository={repository} key={repository.id}/>
                        )
                }
            </ul>
        </div>
    );
});

export default ListRepositories;