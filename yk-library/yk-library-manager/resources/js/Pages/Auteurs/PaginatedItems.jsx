import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { AuteursContext } from './IndexAuteur';
import Items from './Items';
import '../../../css/PaginatedItems.css';

export default function PaginatedItems() {
    const {
      auteurs,
      itemsPerPage,
      currentPage,
      setCurrentPage
    } = useContext(AuteursContext);

    const currentItems = auteurs.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const pageCount = Math.ceil(auteurs.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <Items items={currentItems} />
                {auteurs.length > itemsPerPage && (
                    <tr>
                        <td colSpan={8}>
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
