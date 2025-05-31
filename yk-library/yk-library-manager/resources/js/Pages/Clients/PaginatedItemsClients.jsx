import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Items from './ItemsClients';
import '../../../css/PaginatedItems.css';
import { ClientsContext } from './IndexClients';
import ItemsRoles from './ItemsClients';
import ItemsClients from './ItemsClients';

export default function PaginatedItemsClients() {
    const {
        clients,
        itemsPerPage,
        currentPage,
        setCurrentPage
    } = useContext(ClientsContext);

    // Directly calculate current items based on current page
    const currentItems = clients.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );

    const pageCount = Math.ceil(clients.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full clients array */}
                <ItemsClients items={currentItems} />
                
                {clients.length > itemsPerPage && (
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