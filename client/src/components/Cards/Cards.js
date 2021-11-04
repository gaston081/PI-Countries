import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination';



export default function Cards({elementsToShow}) {


    let countriesInPage = 10;
    let [page, setPage] = useState(1);

    useEffect(() => { setPage(1) }, [])

    let indexLastPage = page * countriesInPage;
    let indexFirstPage = indexLastPage - countriesInPage;
    let currentPage = elementsToShow.slice(indexFirstPage, indexLastPage);

    function Paginate(e, num) {
        e.preventDefault();
        setPage(num)
    }


    return (
        <div>

            <div>
                {currentPage.map((elem) => <Card
                    key={elem.id}
                    name={elem.name}
                    image={elem.image}
                    continent={elem.continent}
                    id={elem.id}
                />)}
            </div>


            <div>
                <Pagination countriesInPage={countriesInPage} totalElements={elementsToShow.length}
                    paginate={Paginate} />
            </div>

        </div>
    )

}