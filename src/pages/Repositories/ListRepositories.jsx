import React from 'react';
import Repository from "./Repository";
import '../../styles/ListRepositories.css'
import repsStore from "../../store/repositories";
import {observer} from "mobx-react-lite";

const ListRepositories = observer(() => {
    const {isEmpty, list} = repsStore

    return (
        <div>
            <ul className="list__repositories">
                { isEmpty
                    ? <div> Мы не нашли репзиториев по вашему запросу </div>
                    :
                        list?.map(rep => {
                            const repository = repsStore.repositories.get(rep.id)
                            return <Repository repository={repository} key={rep.id}/>
                        })
                }
            </ul>
        </div>
    );
});

export default ListRepositories;