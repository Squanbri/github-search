import React, {useMemo, useState} from "react";
import RepositoryService from "../API/RepositoryService";
import Input from "../components/repositories/Input";
import ListRepositories from "../components/repositories/ListRepositories";
import Pagination from "../components/repositories/Pagination";
import '../styles/Repositories.css'
import Loader from "../components/general/Loader";

function Repositories() {
    const [request, setRequest] = useState('jetrockets')
    const [repositories, setRepositories] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)
    const [isLoading, setIsLoading] = useState(false)

    useMemo(() => {
        fetchRepositories(request, page)
    }, [page])

    async function fetchRepositories(request, page) {
        setIsLoading(true)
        const data = await RepositoryService.getRepositories(request, page, limit);

        setRepositories(data?.items || [])
        setTotalCount(data?.total_count)
        setIsLoading(false)
    }

    return (
        <div>
            <Input setRequest={setRequest} fetchRepositories={fetchRepositories} />
            <span className="repositories__count">Репозиториев найдено {totalCount}</span>

            <div className="list__wrapper">
                {isLoading
                    ? <Loader/>
                    : (
                        <div>
                            <ListRepositories repositories={repositories} />
                            <Pagination totalCount={totalCount} limit={limit} page={page} setPage={setPage} />
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default Repositories;