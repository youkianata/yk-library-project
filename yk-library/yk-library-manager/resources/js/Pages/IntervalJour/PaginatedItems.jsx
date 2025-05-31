import React, { useContext, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Items from "./Items";
import { intervalJourContext } from "./Index";
import "../../../css/PaginatedItems.css";

export default function PaginatedItems({ currentPage, itemsPerPage }) {
    const { intervals } = useContext(intervalJourContext);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Array.isArray(intervals)
        ? intervals.slice(itemOffset, endOffset)
        : [];

    const pageCount = Math.ceil(intervals.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % intervals.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
        if (pageCount <= 5) {
            setItemOffset(0);
        }
    }, [pageCount]);
    useEffect(() => {
        console.log(intervals);
    }, []);

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full services array */}
                <Items currentItems={currentItems} />

                {intervals.length > itemsPerPage && (
                    <tr>
                        <td colSpan={5}>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="Suivant >"
                                forcePage={currentPage}
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< Précédent"
                                renderOnZeroPageCount={null}
                                containerClassName="pagination"
                                pageLinkClassName="page-num"
                                previousLinkClassName="page-num"
                                nextLinkClassName="page-num"
                                activeLinkClassName="active"
                            />
                        </td>
                    </tr>
                )}
            </tbody>
        </>
    );
}
