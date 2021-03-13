import React, { useState, useEffect } from 'react'
import { PaginationWapper } from './Pagination.style'
import ReactPaginate from 'react-paginate'
type PaginationProps = {}
const Pagination: React.FC<PaginationProps> = (props) => {
  return (
    <PaginationWapper>
      <ReactPaginate
        pageClassName={'button-style'}
        pageCount={5}
        pageRangeDisplayed={10}
        marginPagesDisplayed={5}
      />
    </PaginationWapper>
  )
}

export default Pagination
