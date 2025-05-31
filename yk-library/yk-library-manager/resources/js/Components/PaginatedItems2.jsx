import Items2 from './Items2';
import React, { useEffect, useState, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import "../../css/ListColis.css";
import '../../css/PaginatedItems.css';



export default function PaginatedItems2({ itemsPerPage, items, currentPage, compteur }) {

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
    useEffect(() => {
      if (pageCount <= 5) {
        setItemOffset(0);
      }
    }, [pageCount]);



    return (
      <>
      <tbody>
        <Items2
            currentItems={currentItems}
            compteur={compteur}

        />
        <tr>
          <td colSpan={9}>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Suivant >"
            forcePage={currentPage}
            onPageChange={handlePageClick}
            pageRangeDisplayed={10}
            pageCount={pageCount}
            previousLabel="< Précèdent"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
          </td>
        </tr>
      </tbody>



      </>
    );
  }
