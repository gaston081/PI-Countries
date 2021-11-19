import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {getCountryById} from '../../actions';
import NavBar from '../NavBar/NavBar';
import './CountryDetails.css';

export default function Countrydetails () {
 
  let {id} = useParams ();
  let dispatch = useDispatch ();

  useEffect (
    () => { dispatch (getCountryById (id));
    },
    [dispatch, id]
  );

  let country = useSelector (state => state.countryId);

  return (
    <div>
      <NavBar />

      <div className="container-details">
        <div className="content">
          <div className="box1">
            <img id="flag" src={country.image} alt="Imagen no encontrada" />
            <div className="detail-content">   
                <div className='detail'>
                  <p>Pais</p>
                  <p>{country.name}</p>
                </div>
                <div className='detail'>
                  <p>Capital</p>
                  <p>{country.capital}</p>
                </div>
                <div className='detail'>
                  <p>Codigo de pais</p>
                  <p>{country.id}</p>
                </div>
                <div className='detail'>
                  <p>Continente</p>
                  <p>{country.continent}</p>
                </div>
                <div>
                  <p className='detail'>Area</p>
                  <p>{country.area} KM²</p>
                </div>
                <div>
                  <p className='detail'>Poblacion</p>
                  <p>{country.population}</p>
                </div>
             </div>
          </div>
        </div>
        <div className='container-activity-cards'>

          <h2 id='title-act'>Actividades</h2>

          <div >
            {country.activities
              ? country.activities.map (act => (
                  <div id="activity-card" key={act.name} >
                    <div className='detail'>
                      <p>Actividad</p>
                      <p>{act.name}</p>
                    </div>
                    <div className='detail'> 
                      <p>Nivel de Dificultad</p>
                      <p>{act.dificult}</p>
                    </div>
                    <div className='detail'>
                      <p>Duracion</p>
                      <p>{act.duration}</p>
                    </div>
                    <div className='detail'>
                      <p>Temporada</p>
                      <p>{act.season}</p>
                    </div>
                  </div>
                ))
              : 'Aun no se han ingresado actividades para este pais'}
          </div>
        </div>
      </div>
    </div>
  );
}
