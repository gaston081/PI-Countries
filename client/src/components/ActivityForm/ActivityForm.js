import axios from "axios";
import { useState } from "react"
import { useSelector } from 'react-redux'
import Navbar from "../NavBar/Navbar";


export default function ActivityForm() {

    let countries = useSelector(state => state.allCountries)
    let countryNamesAndId = countries.map(country => { return { name: country.name, id: country.id } })
    
    //ver forumlarios controlados    


    const [input, setInput] = useState({
        idCountry: "",
        name: "",
        dificult: "",
        duration: "",
        season: ""

    })

    function handleChange(e) {

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        let countryId = countryNamesAndId.find(c => c.name === input.country)
        let inputCopy = Object.assign({}, input);
        inputCopy.idCountry = countryId.id
        
        axios.post('http://localhost:3001/api/activity/post/', inputCopy)
        .then(alert("Nueva actividad creada"))

    }


    return (

        <div>
            <div>
                <Navbar />
            </div>
            <div>Agregar nueva actividad</div>

            <form onSubmit={onSubmit}>
                <label>Actividad</label>
                <input name="name" type="text" onChange={handleChange} ></input>

                <br />
                <label>Dificultad</label>
                <select name="dificult" type="text" onChange={handleChange}>
                    <option value='Seleccione' >Seleccione</option>
                    <option value='1' >1</option>
                    <option value='2' >2</option>
                    <option value='3' >3</option>
                    <option value='4' >4</option>
                    <option value='5' >5</option>
                </select>

                <br />
                <label>Duracion</label>
                <select name="duration" onChange={handleChange}>
                    <option value='Seleccione' >Seleccione</option>
                    <option value='1 Hora' >1 hora</option>
                    <option value='2 Hora' >2 horas</option>
                    <option value='3 Hora' >3 horas</option>
                    <option value='4 Hora' >4 horas</option>
                    <option value='5 Hora' >5 horas</option>
                </select>

                <br />
                <label>Temporada</label>
                <select name="season" onChange={handleChange}>
                    <option value='Seleccione' >Seleccione</option>
                    <option value='Primavera' >Primavera</option>
                    <option value='Verano' >Verano</option>
                    <option value='Otoño' >Otoño</option>
                    <option value='Invierno' >Invierno</option>
                </select>

                <br />

                <label>Pais</label>
                <select name="country" type="text" onChange={handleChange}>
                    <option value='Seleccione' >Seleccione</option>
                    {countryNamesAndId.map(country => {
                        return <option key={country.id} value={country.name} >
                            {country.name}</option>
                    })}
                </select>

                <br />
                <button type='submit'>AGREGAR</button>
            </form>
        </div>
    )
}
