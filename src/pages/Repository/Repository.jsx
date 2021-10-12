import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../styles/RepositoryPage.css';
import repositories from "../../store/repositories";
import {observer} from "mobx-react-lite";

const Repository = observer(() => {
    let { login, name } = useParams();

    useEffect(() => {
        // fetchRepository()
        repositories.getRepByName(login, name)

        return () => {
            repositories.repositories.clear()
        }
    }, [])

    return (
        <div className="repository__wrapper">
            <img src={repositories.list[0]?.avatar} alt=""/>
            <Link to="/" className="back">Назад</Link>
        </div>
    );
});

export default Repository;