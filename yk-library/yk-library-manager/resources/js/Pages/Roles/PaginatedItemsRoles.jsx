import React, { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../../../css/PaginatedItems.css';
import { RolesContext } from './IndexRole';
import ItemsRoles from './ItemsRoles';

export default function PaginatedItemsRoles() {
    const {
        roles,
        itemsPerPage,
        currentPage,
        setCurrentPage
    } = useContext(RolesContext);

    // Directly calculate current items based on current page
    const currentItems = roles.slice(
        currentPage * itemsPerPage, 
        (currentPage + 1) * itemsPerPage
    );

    const pageCount = Math.ceil(roles.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody>
                {/* Pass currentItems instead of full roles array */}
                <ItemsRoles items={currentItems} />
                
                {roles.length > itemsPerPage && (
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