import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items';
import '../../../css/PaginatedItems.css';
import { ReservationContext } from './Reservation';

export default function PaginatedItems({reservations,itemsPerPage}) {
const {     
        currentPage,
        setCurrentPage
    } = useContext(ReservationContext);

    // Directly calculate current items based on current page
    const currentItems = reservations.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );
 
    //const pageCount = Math.ceil(reservations.length / itemsPerPage);
    const pageCount = Math.max(1, Math.ceil(reservations.length / itemsPerPage));

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full services array */}
                <Items items={currentItems} />
                
               {reservations.length > 0 && (
                    <tr>
                            <td colSpan={12}>
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