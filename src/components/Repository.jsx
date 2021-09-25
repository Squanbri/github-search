import React from 'react';
import '../styles/Repository.css'
import {ReactComponent as StarSvg} from '../assets/icons/star.svg'
import {ReactComponent as RepositorySvg} from '../assets/icons/repository.svg'
import {Link} from "react-router-dom";

const Repository = ({repository}) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const changeFormatDate = (update_at) => {
        const date = update_at.split('T')[0]
        const year = date[0]
        const mounth = date[1]
        const day = date[2]

        return `Updated on ${day} ${months[mounth]} ${year}`
    }

    return (
        <li>
            <Link to={`/repository/${repository.owner.login}/${repository.name}`} className="repository__item">
                <div className="repository__logo">
                    <RepositorySvg/>
                </div>

                <div className="repository__content">
                    <span className="repository__name">
                        {repository.owner.login}/{repository.name}
                    </span>

                    <span className="repository__description">
                      {repository.description}
                    </span>

                    <div className="repository__params">
                    <span
                        className= {repository.stargazers_count !== 0
                            ? "repository__stars"
                            : "repository__stars hide"
                        }
                    >
                        <StarSvg/>
                        {repository.stargazers_count}
                    </span>

                        <span className="repository__update_at">
                        {changeFormatDate(repository.updated_at)}
                    </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default Repository;