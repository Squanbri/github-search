import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../styles/RepositoryPage.css';
import repositories from "../../store/repositories";
import {observer} from "mobx-react-lite";

const Repository = observer(() => {
    const { login, name } = useParams();

    useEffect(() => {
        repositories.getRepByName(login, name)

        return () => {
            repositories.repositories.clear()
        }
    }, [])

    return (
        <div className="repository__wrapper">
            <img src={repositories.list[0]?.avatar} alt=""/>
            <p>{repositories.list[0]?.description}</p>
            <Link to="/" className="back">Назад</Link>
        </div>
    );
});

export default Repository;