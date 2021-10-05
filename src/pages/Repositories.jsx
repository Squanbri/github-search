import React from "react";
import Input from "../components/repositories/Input";
import ListRepositories from "../components/repositories/ListRepositories";
import Pagination from "../components/repositories/Pagination";
import '../styles/Repositories.css'
import Loader from "../components/general/Loader";
import repositories from "../state/repositories";
import {observer} from "mobx-react-lite";

const Repositories = observer(() => {

    const {countRepositories, isLoading, page} = repositories

    return (
        <div>
            <Input />
            <span className="repositories__count">Репозиториев найдено {countRepositories}</span>

            <div className="list__wrapper">
                {isLoading
                    ? <Loader/>
                    : (
                        <div>
                            <ListRepositories/>
                            <Pagination
                                totalCount={countRepositories}
                                limit={10}
                                page={page}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
});

export default Repositories;