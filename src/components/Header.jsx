import React from 'react';
import '../styles/Header.css';
import { ReactComponent as ReactSvg } from '../assets/icons/react.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <a href="https://ru.reactjs.org" className="header__logo">
                <ReactSvg/>
                <span>React</span>
            </a>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Поиск</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;