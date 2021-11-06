import React from "react";
import './Pagination.css'
export default function Pagination({ countriesInPage, totalElements, paginate }){
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalElements / countriesInPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className= 'pagination'>
            <ul >
                {pageNumbers.map((num) => (
                    <div className= 'button' key={num}>  <button
                        onClick={(e) => paginate(e, num)}
                    >
                        {num}
                    </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

