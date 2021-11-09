import React from 'react';
import './Pagination.css';
export default function Pagination({countriesInPage, totalElements, paginate}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil (totalElements / countriesInPage); i++) {
    pageNumbers.push (i);
  }

  return (
    <div className="pagination">

      {pageNumbers.map (num => (
        <div className="display" key={num}>
          {' '} <button className="button" onClick={e => paginate (e, num)}>
            {num}
          </button>
        </div>
      ))}

    </div>
  );
}
