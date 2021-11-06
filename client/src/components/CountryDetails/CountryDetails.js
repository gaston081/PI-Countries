import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getCountryById } from '../../actions'
import Navbar from '../NavBar/Navbar'


export default function Countrydetails() {

    let { id } = useParams()
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountryById(id))
    }, [dispatch, id])


    let country = useSelector(state => state.countryId)
    

    return (
        <div>
            <Navbar />


            <div>
                <img src={country.image} alt='Imagen no enocontrada' />
                <p>Nombre</p>
                <p>{country.name}</p>
                <p>Codigo de pais</p>
                <p>{country.id}</p>
                <p>Continente</p>
                <p>{country.continent}</p>
                <p>Area</p>
                <p>{country.area} KM²</p>
                <p>Poblacion</p>
                <p>{country.population} Habitantes</p>
                <div>
                    <p>Actividades</p>
                    <div>{country.activities
                        ? country.activities.map(act => <div>
                            <p>Actividad</p>
                            <p>{act.name}</p>
                            <p>Nivel de Dificultad</p>
                             <p>{act.dificult}</p> 
                            <p>Duracion</p>
                            <p>{act.duration}</p>
                            <p>Temporada</p>
                     <p>{act.season}</p>
                        </div>)
                        : "Aun no se han ingresado actividades para este pais"}</div>
                </div>
            </div>
        </div>
    )
}
