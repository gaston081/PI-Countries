import axios from 'axios';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActivities} from '../../actions';
import NavBar from '../NavBar/NavBar';
import './ActivityForm.css';

export default function ActivityForm () {
  // manejo de errores en form
  let countries = useSelector (state => state.allCountries);
  var countryNamesAndId = countries
    .map (country => {
      return {
        name: country.name,
        id: country.id,
      };
    })
    .sort ((a, b) => (a.name > b.name ? 1 : -1));

  let dispatch = useDispatch ();

  const [input, setInput] = useState ({
    idCountry: '',
    name: '',
    dificult: '',
    duration: '',
    season: '',
    inputCountries: [],
  });

  function handleChange (e) {
    if (e.target.name !== 'countries') {
      setInput ({
        ...input,
        [e.target.name]: e.target.value,
      });
    } else {
      if (
        e.target.value !== 'Seleccione' &&
        !input.inputCountries.includes (e.target.value)
      ) {
        setInput ({
          ...input,
          inputCountries: [...input.inputCountries, e.target.value],
        });
      }
      // setErrors(validate({
      //     ...input,
      //     [e.target.name]: e.target.value
      // }));
    }
  }
  //----------------------------------------------------------------------------------
  const [errors, setErrors] = useState ({
    name: '',
    dificult: '',
    duration: '',
    season: '',
  });

  // //---------------------------------------------------------------------------------------
  function nameToId (name) {
    let finded = countryNamesAndId.find (c => c.name === name);
    return finded.id;
  }

  function onSubmit (e) {
    e.preventDefault ();
    let countriesMap = input.inputCountries.map ((count, index) => {
      // mapeo todos los paises ingresados en el array del state y
      return {
        // genero un obj x cada uno con sus actividades
        idCountry: nameToId (input.inputCountries[index]),
        name: input.name,
        dificult: input.dificult,
        duration: input.duration,
        season: input.season,
      };
    });

    try {
      countriesMap.map (elem => {
        axios.post ('http://localhost:3001/api/activity/post/', elem);
      });
    } catch (error) {
      console.log (error);
    }
  }

  dispatch (getActivities ());
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='title'>
          Agregar nueva actividad
        </div>
      <div className="activity-container">

       

            <form onSubmit={onSubmit}>

          <div className='act'>
            <label>Actividad</label>
          </div>
          <div className='act'>
            <input name="name" type="text" onChange={handleChange} />
          </div>

          <div className='act'>
            <label>Dificultad</label>
          </div>
          <div className='act'>
            <select name="dificult" type="text" onChange={handleChange}>
              <option value="Seleccione">Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className='act'>
            <label>Duracion</label>
          </div>
          <div className='act'>
            <select name="duration" onChange={handleChange}>
              <option value="Seleccione">Seleccione</option>
              <option value="1 Hora">1 hora</option>
              <option value="2 Horas">2 horas</option>
              <option value="3 Horas">3 horas</option>
              <option value="4 Horas">4 horas</option>
              <option value="5 Horas">5 horas</option>
            </select>
          </div>

          <div className='act'>
            <label>Temporada</label>
          </div>
          <div className='act'>
            <select name="season" onChange={handleChange}>
              <option value="Seleccione">Seleccione</option>
              <option value="Primavera">Primavera</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
            </select>
          </div>

          <div className='act'>
            <label>Pais</label>
          </div>
          <div className='act'>

            <select 
              multiple
              name="countries"
              type="text"
              onChange={handleChange}
            >
            {/* <option value="Seleccione">Seleccione</option> */}
              {countryNamesAndId
                .sort ((a, b) => a.name - b.name)
                .map (country => {
                  return (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className='act'>
            <button type="submit">AGREGAR</button>
          </div>
        </form>

      </div>

      <div className='act'>
        {input.inputCountries
          ? input.inputCountries.map ((elem, index) => (
              <p key={index}>{elem}</p>
            ))
          : <p>Agregue un pais</p>}
      </div>

    </div>
  );
}
