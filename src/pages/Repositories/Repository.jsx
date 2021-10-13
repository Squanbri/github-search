import React from 'react';
import '../../styles/Repository.css'
import {ReactComponent as StarSvg} from '../../assets/icons/star.svg'
import {ReactComponent as Favourite} from '../../assets/icons/like.svg'
import {ReactComponent as RepositorySvg} from '../../assets/icons/repository.svg'
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Repository = observer(({repository}) => {
    return (
        <li>
            <Link to={`/repository/${repository.login}/${repository.name}`} className="repository__item">
                <div className="repository__logo">
                    <RepositorySvg/>
                </div>

                <div className="repository__content">
                    <span className="repository__name">
                        {repository.login}/{repository.name}
                    </span>

                    <span className="repository__description">
                        {repository.description}
                    </span>

                    <span className="repository__favourite">
                        <Favourite
                            className={repository.isFavourite
                                ?"favourite"
                                :"not"
                            }
                            onClick={e => {
                                e.preventDefault()
                                repository.updateFavourite()
                            }}
                        />
                    </span>

                    <div className="repository__params">
                        <span
                            className= {repository.isStars
                                ? "repository__stars"
                                : "repository__stars hide"
                            }
                        >
                            <StarSvg/>
                            {repository.stars}
                        </span>

                        <span className="repository__update_at">
                        {repository.date}
                    </span>
                    </div>
                </div>
            </Link>
        </li>
    );
});

export default Repository;