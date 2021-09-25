import React, {useMemo, useState} from 'react';
import  '../styles/Pagination.css';

const Pagination = ({totalCount, limit, page, setPage}) => {
    const [pageNumbers, setPageNumbers] = useState([])

    const getPages = () => {
        const result = []
        const totalPage = Math.ceil(totalCount / limit)
        for (let i = page - 2; i <= page + 2; i++) {
            if (i >= 1 && i <= totalPage) {
                result.push(i)
            }
        }
        setPageNumbers([...result])
    }

    useMemo(() => {
        getPages()
    }, [totalCount, page])

    return (
        <ul className="pagination">
            {pageNumbers.length > 1
                ? pageNumbers.map(p =>
                        <li
                            className={page === p ? "pagination__button active" : "pagination__button"}
                            key={p}
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </li>
                    )
                : ''
            }
        </ul>
    );
};

export default Pagination;