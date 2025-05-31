import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { BookStatusContext } from './IndexBookStatus';
import Items from './Items';
import '../../../css/PaginatedItems.css';

export default function PaginatedItems() {
    const {
      bookStatuses,
      itemsPerPage,
      currentPage,
      setCurrentPage
    } = useContext(BookStatusContext);

    const currentItems = bookStatuses.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const pageCount = Math.ceil(bookStatuses.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    return (
        <>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <Items items={currentItems} />
                {bookStatuses.length > itemsPerPage && (
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
