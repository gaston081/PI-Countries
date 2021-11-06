import axios from "axios";
import { useState } from "react"
import { useSelector } from 'react-redux'
import Navbar from "../NavBar/Navbar";


export default function ActivityForm() { // manejo de errores en form
    let countries = useSelector(state => state.allCountries)
    var countryNamesAndId = countries.map(country => { return { name: country.name, id: country.id } })


    const [input, setInput] = useState({
        idCountry: "",
        name: "",
        dificult: "",
        duration: "",
        season: "",
        inputCountries: []
    })

    function handleChange(e) {
        if (e.target.name !== "countries") {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            })
        } else {
            if (e.target.value !== "Seleccione" && !input.inputCountries.includes(e.target.value)) {
                setInput({
                    ...input,
                    inputCountries: [...input.inputCountries, e.target.value]
                }
                )
            }
        }
    }
    //----------------------------------------------------------------------------------

    function handleClick(e) {
        setInput({
            ...input,
            inputCountries: input.inputCountries.filter(e => e.target.value)
        })
    }

    function nameToId(name) {
        let finded = countryNamesAndId.find(c => c.name === name);
        return finded.id

    }



    function onSubmit(e) {
        e.preventDefault();
        let countriesMap = input.inputCountries.map((count, index) => {// mapeo todos los paises ingresados en el array del state y 
            return {                                          // genero un obj x cada uno con sus actividades                                        
                idCountry: nameToId(input.inputCountries[index]),
                name: input.name,
                dificult: input.dificult,
                duration: input.duration,
                season: input.season

            }

        })
        console.log(countriesMap)
        try {
            countriesMap.map((elem) => {
                axios.post('http://localhost:3001/api/activity/post/', elem);

            })

        } catch (error) {
            console.log(error)
        }
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
                    <option value='2 Horas' >2 horas</option>
                    <option value='3 Horas' >3 horas</option>
                    <option value='4 Horas' >4 horas</option>
                    <option value='5 Horas' >5 horas</option>
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
                <select multiple name="countries" type="text" onChange={handleChange}>
                    <option value='Seleccione' >Seleccione</option>
                    {countryNamesAndId.sort((a, b) => a.name > b.name).map(country => {
                        return <option key={country.id} value={country.name} >
                            {country.name}</option>
                    })}
                </select>

                <br />
                <button type='submit'>AGREGAR</button>
            </form>


            <div>

                {input.inputCountries ?
                    input.inputCountries.map((elem, index) =>
                        <p key={index}>{elem}</p>)
                    : <p>Agregue un pais</p>}

            </div>
        </div>


    )
}
