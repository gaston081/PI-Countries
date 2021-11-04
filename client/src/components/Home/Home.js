import React, { useEffect, useState } from 'react';

import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getByOrder } from '../../actions';




export default function Home() {

    let dispatch = useDispatch();

    var allCountriesFromState = useSelector(state => state.allCountries);

    let orderedFromState = useSelector(state => state.ordered);

    let [elementsToShow, setElementsToShow] = useState(allCountriesFromState)

    let [control, setControl] = useState('default')


    function handleChange(e) {
       
        if (e.target.value !== 'default') {
            dispatch(getByOrder(e.target.value));
            
        }
        setControl(e.target.value)
    }
    
    useEffect(() => {
        if (control !== 'default') setElementsToShow(orderedFromState)
        else setElementsToShow(allCountriesFromState)
    }, [control, orderedFromState, allCountriesFromState, setControl])





    return (

        <div>
            <select onChange={handleChange} >
                <option value="default">ORDENAR</option>
                <option value="ASC"  >Ascendente A-Z</option>
                <option value="DESC">Descendente Z-A</option>
                <option value="popAsc">Menor Poblacion</option>
                <option value="popDesc">Mayor Poblacion</option>
            </select>
            {/*-------------------------------------------------------------------------------- */}
            <Cards elementsToShow={elementsToShow} />
        </div>
    )

}
