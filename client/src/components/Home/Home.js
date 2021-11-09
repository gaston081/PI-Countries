import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, getActivitiesByName, getByOrder, getCountries, getCountryByContinent } from '../../actions';

import './Home.css'


export default function Home() {

    const dispatch = useDispatch();

    const activities = useSelector(state => state.activities)

    const allCountriesFromState = useSelector(state => state.allCountries);

    const orderedFromState = useSelector(state => state.ordered);

    const [elementsToDisplay, setElementsToDisplay] = useState(allCountriesFromState)

    const [control, setControl] = useState("default")



    useEffect(() => dispatch(getActivities()), [dispatch])

    function handleChange(e) {

        if (e.target.value === 'default') {
            dispatch(getCountries())
            setControl(e.target.value)
        }

        if (e.target.name === 'continent') {
            dispatch(getCountryByContinent(e.target.value));
            setControl(e.target.value)
        }

        if (e.target.name === 'activities') {
            if (e.target.value === "default") {
                setControl("default")
            } else {
                setControl(e.target.value)
                dispatch(getActivitiesByName(e.target.value))
            }

        }

        if (e.target.name === 'order') {
            dispatch(getByOrder(e.target.value));
            setControl(e.target.value)
        }
    }


    useEffect(() => {
        if (control !== 'default') setElementsToDisplay(orderedFromState)
        else setElementsToDisplay(allCountriesFromState)
    }, [control, orderedFromState, allCountriesFromState])


    let activitiesMap = activities.map(item => {
        return item.name
    });
    var activitiesMapArr = activitiesMap.filter((item, index) => {
        return activitiesMap.indexOf(item) === index;
    })





    return (

        <div class='Home'>
            <div class='filter-container'>
                <div>
                    <div>
                        <label>Busqueda por Alfabeto/Poblacion </label>
                    </div>
                    <div className='select'>
                        <select name="order" onChange={handleChange} >
                            <option value="default">ORDENAR</option>
                            <option value="ASC"  >Ascendente A-Z</option>
                            <option value="DESC">Descendente Z-A</option>
                            <option value="popDesc">Mayor Poblacion</option>
                            <option value="popAsc">Menor Poblacion</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label>Busqueda por Continente </label><br />
                    <div className='select'>
                    <select name="continent" onChange={handleChange} >
                        <option value="default">ORDENAR</option>
                        <option value="Asia"> Asia</option>
                        <option value="Europe">Europa</option>
                        <option value="Africa">Africa</option>
                        <option value="South America">America del Sur</option>
                        <option value="North America">America del Norte</option>
                    </select>
                    </div>
                </div>


                <div>
                    <label>Busqueda por Actividades </label><br />
                    <div className='select'>
                    <select name='activities' onChange={handleChange} >
                        <option value="default">ORDENAR</option>
                        {activitiesMapArr.map((elem, i) => <option key={i} value={elem}>{elem}</option>)}
                    </select>
                    </div>
                </div>
                <br />
            </div>

            
            <div>
                <Cards elementsToDisplay={elementsToDisplay} orderedFromState={orderedFromState} />
            </div>

        </div>
    )
}