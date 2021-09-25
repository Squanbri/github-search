import React, {useMemo, useState} from "react";
import RepositoryService from "../API/RepositoryService";
import Input from "../components/Input";
import ListRepositories from "../components/ListRepositories";
import '../styles/Repositories.css'
import Pagination from "../components/Pagination";

function Repositories() {
    const [request, setRequest] = useState('jetrockets')
    const [repositories, setRepositories] = useState([])
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(4)

    useMemo(() => {
        setPage(1)
    }, [request])

    useMemo(() => {
        fetchRepositories(request, page)
    }, [request, page])

    async function fetchRepositories(name, page) {
        const data = await RepositoryService.getRepositories(name, page, limit);

        console.log('fetch')
        setRepositories(data?.items || [])
        setTotalCount(data?.total_count)
    }

    return (
        <div>
            <Input setRequest={setRequest}/>
            <span className="repositories__count">Репозиториев найдено {totalCount}</span>

            <div className="list__wrapper">
                <ListRepositories repositories={repositories} />

                <Pagination totalCount={totalCount} limit={limit} page={page} setPage={setPage} />
            </div>
        </div>
    );
}

export default Repositories;