import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './Items';
import '../../../css/PaginatedItems.css';
import { demandeReservationContext } from './DemandeReservation';

export default function PaginatedItems({demandeReservations}) {
    const {
        afficherStatus,
        itemsPerPage,
        currentPage,
        setCurrentPage
    } = useContext(demandeReservationContext);

    // Directly calculate current items based on current page
    const currentItems = demandeReservations.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );

    //const pageCount = Math.ceil(reservations.length / itemsPerPage);
    const pageCount = Math.max(1, Math.ceil(demandeReservations.length / itemsPerPage));

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full services array */}
                <Items items={currentItems} />
                
               {demandeReservations.length > 0 && (
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