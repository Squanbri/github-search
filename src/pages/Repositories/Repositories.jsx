import React from "react";
import Search from "./Search";
import ListRepositories from "./ListRepositories";
import Pagination from "../../components/Pagination";
import '../../styles/Repositories.css'
import Loader from "../../components/Loader";
import repositories from "../../store/repositories";
import {observer} from "mobx-react-lite";

const Repositories = observer(() => {

    const {countRepositories, isLoading, page, pages, setPage} = repositories

    return (
        <div>
            <Search />
            <span className="repositories__count">Репозиториев найдено {countRepositories}</span>

            <div className="list__wrapper">
                {isLoading
                    ? <Loader/>
                    : (
                        <div>
                            <ListRepositories/>

                            <Pagination
                                pages={pages}
                                page={page}
                                setPage={setPage}
                            />
                        </div>
                    )
                }

            </div>
        </div>
    );
});

export default Repositories;