import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getByOrder, getCountryByContinent } from '../../actions';




export default function Home() {

    let dispatch = useDispatch();

    var allCountriesFromState = useSelector(state => state.allCountries);

    let orderedFromState = useSelector(state => state.ordered);

    let [elementsToShow, setElementsToShow] = useState(allCountriesFromState)

    let [control, setControl] = useState('default')

    let orders = {
       
        "ASC": "ASC",
        "DESC": "DESC",
        "popAsc": "popAsc",
        "popDesc": "popDesc"

    }

    let continents = {
        
        "asia": "Asia",
        "Europe": "Europe",
        "Africa": "Africa",
        "South America": "South America",
        "North America": "North America",
        "Antartica": "Antartica"
    }

    function handleChange(e) {

        if (e.target.value !== 'default') {

            if (orders[e.target.value]) {
                dispatch(getByOrder(e.target.value));
            }
            else {
                dispatch(getCountryByContinent(e.target.value));
            }
        }
        setControl(e.target.value)
    }


getActivities()


    useEffect(() => {
        if (control !== 'default') setElementsToShow(orderedFromState)
        else setElementsToShow(allCountriesFromState)
    }, [control, orderedFromState, allCountriesFromState])





    return (

        <div>
            <label>Busqueda por Alfabeto/Poblacion </label>
            <select onChange={handleChange} >
                <option value="default">ORDENAR</option>
                <option value="ASC"  >Ascendente A-Z</option>
                <option value="DESC">Descendente Z-A</option>
                <option value="popDesc">Mayor Poblacion</option>
                <option value="popAsc">Menor Poblacion</option>
            </select>


            <div>
                <label>Busqueda por Continente </label>
                <select onChange={handleChange} >
                    <option value="default">ORDENAR</option>
                    <option value="Asia"> Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Africa">Africa</option>
                    <option value="South America">America del Sur</option>
                    <option value="North America">America del Norte</option>America del Norte
                    <option value="Antartica">Antartida</option>
                </select>
            </div>


            <div>
                <label>Busqueda por Actividades </label>
                <select onChange={handleChange} >
                    <option value="default">ORDENAR</option>
                   { <option value="Asia"> Asia</option> }
                </select>
            </div>






            {/*-------------------------------------------------------------------------------- */}
            <Cards elementsToShow={elementsToShow} />
        </div>
    )

}