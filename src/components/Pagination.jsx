import React from 'react';
import '../styles/Pagination.css';
import Button from "./Button";

const Pagination = ({pages, page, setPage}) => {

    return (
        <ul className="pagination">
            {pages?.map(num =>
                    <li key={num}>
                        <Button
                            active={page === num}
                            onClick={() => setPage(num)}
                        >
                            {num}
                        </Button>
                    </li>
                )
            }
        </ul>
    );
};

export default Pagination;