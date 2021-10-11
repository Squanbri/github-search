import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../styles/RepositoryPage.css';
import RepositoryService from "../../API/RepositoryService";

const Repository = () => {
    const [repository, setRepository] = useState()
    let { login, name } = useParams();

    useEffect(() => {
        fetchRepository()
    }, [])

    async function fetchRepository() {
        const response =  await RepositoryService.getRepository(login, name)
        console.log(response)
        setRepository(response)
    }


    return (
        <div className="repository__wrapper">
            <img src={repository?.owner?.avatar_url} alt=""/>
            <Link to="/" className="back">Назад</Link>
        </div>
    );
};

export default Repository;