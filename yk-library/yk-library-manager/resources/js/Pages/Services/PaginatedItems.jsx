import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ServicesContext } from './Index';
import Items from './Items';
import '../../../css/PaginatedItems.css';

export default function PaginatedItems() {
    const {
        services,
        itemsPerPage,
        currentPage,
        setCurrentPage
    } = useContext(ServicesContext);

    // Directly calculate current items based on current page
    const currentItems = services.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );

    const pageCount = Math.ceil(services.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full services array */}
                <Items items={currentItems} />
                
                {services.length > 0 && (
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