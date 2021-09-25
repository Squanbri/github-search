import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import RepositoryService from "../API/RepositoryService";
import '../styles/RepositoryPage.css';

const Repository = () => {
    const [repository, setRepository] = useState()
    let { owner, name } = useParams();

    useEffect(() => {
        fetchRepository()
    }, [])

    async function fetchRepository() {
        const response =  await RepositoryService.getRepository(owner, name)
        setRepository(response)
    }

    return (
        <div className="repository__wrapper">
            <img src={repository?.owner?.avatar_url} alt=""/>
            <Link to="/repositories" className="back">Назад</Link>
        </div>
    );
};

export default Repository;