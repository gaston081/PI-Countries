import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination';
import './Cards.css'


export default function Cards({ elementsToDisplay }) {


    let countriesInPage = 10;
    let [page, setPage] = useState(1);

    useEffect(() => { setPage(1) }, [])

    let currentPage
    let indexLastPage = page * countriesInPage;
    let indexFirstPage = indexLastPage - countriesInPage;

    if (elementsToDisplay.length > 10) {
        currentPage = elementsToDisplay.slice(indexFirstPage, indexLastPage);
    }
    else currentPage = elementsToDisplay



    function Paginate(e, num) {
        e.preventDefault();
        setPage(num)
    }


    return (
        <div >

            <div className='container-cards'>
                {currentPage.map((elem) =><div key={elem.id}><Card
                    name={elem.name}
                    image={elem.image}
                    continent={elem.continent}
                    id={elem.id}
                /></div>)}
            </div>


            <div>
                <Pagination countriesInPage={countriesInPage} totalElements={elementsToDisplay.length}
                    paginate={Paginate} />
            </div>

        </div>
    )

}