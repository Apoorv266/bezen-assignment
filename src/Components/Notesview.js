import React, { useState, useEffect } from "react";
import Notescard from "./Notescard";
import "../Styles/Notes.css";
import ReactPaginate from "react-paginate";

const Notesview = ({
  Data,
  handleDelete,
  onPin,
  iconId,
  handleclose,
  setOpenModal,
  handleId,
}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(Data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {Data.length > 0 ? <div className="notes">
        {Data.length > 0 &&
          currentItems.map((item) => {
            return (
              <Notescard
                item={item}
                handleDelete={handleDelete}
                onPin={onPin}
                iconId={iconId}
                key={item.id}
                handleclose={handleclose}
                handlePageClick={handlePageClick}
                pageCount={pageCount}
                setOpenModal={setOpenModal}
                handleId={handleId}
              />
            );
          })} 
      </div> : <div className="no-msg"><h2>Nothing to preview</h2></div>}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassname="page-num"
        nextLinkClassname="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Notesview;
