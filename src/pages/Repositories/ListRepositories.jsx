import React from 'react';
import Repository from "./Repository";
import '../../styles/ListRepositories.css'
import repositoriesStore from "../../store/repositories";
import {observer} from "mobx-react-lite";

const ListRepositories = observer(() => {
    const {isEmpty, list} = repositoriesStore

    return (
        <div>
            <ul className="list__repositories">
                { isEmpty
                    ? <div> Мы не нашли репзиториев по вашему запросу </div>
                    :
                        list?.map(rep =>
                            <Repository repository={rep} key={rep.id}/>
                        )
                }
            </ul>
        </div>
    );
});

export default ListRepositories;