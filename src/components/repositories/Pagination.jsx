import React, {useMemo} from 'react';
import '../../styles/Pagination.css';
import repositories from "../../state/repositories";

const Pagination = ({totalCount, limit, page}) => {
    const pages = []
    const getPages = () => {
        const totalPage = Math.ceil(totalCount / limit)
        for (let i = page - 2; i <= page + 2; i++) {
            if (i >= 1 && i <= totalPage) {
                pages.push(i)
            }
        }
    }

    useMemo(() => {
        getPages()
    }, [totalCount, page])

    return (
        <ul className="pagination">
            {pages.length > 1
                ? pages.map(num =>
                        <li
                            className={page === num ? "pagination__button active" : "pagination__button"}
                            key={num}
                            onClick={() => repositories.setPage(num)}
                        >
                            {num}
                        </li>
                    )
                : ''
            }
        </ul>
    );
};

export default Pagination;