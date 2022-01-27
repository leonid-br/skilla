import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import st from './Pagination.module.css';

function PaginatedItems({ itemsPerPage, data, currentRender }) {
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(
            `Loading items from ${itemOffset} to ${endOffset}`,
        );

        currentRender(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemsPerPage, data, itemOffset]);

    const handlePageClick = event => {
        const newOffset =
            (event.selected * itemsPerPage) % data.length;

        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`,
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName={st.number}
                breakClassName={st.dots}
                activeClassName={st.active}
                previousClassName={st.prev}
                nextClassName={st.next}
                pageLinkClassName={st.link}
            />
        </>
    );
}

export default PaginatedItems;
