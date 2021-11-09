import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import './SearchBar.css'

export default function SearchBar() {

    const countries = useSelector(state => state.allCountries)

    const [input, setInput] = useState("")

    const history = useHistory();


    function handleChange(e) {
        setInput(e.target.value);
    }
    console.log(countries)
    ///////////////////////////////////


    function handleSubmit(e) {
        e.preventDefault();
        // let filter = countries.filter(elem => elem === e.target.value);
        // if (filter === "") {
        //     alert("El pais ingresado no existe")
        //     console.log(countries)
        // } else {
        let id = countries.find((c) => c.name.toLowerCase() === input.toLowerCase()).id;
        history.push("/CountryDetails/" + id)
        // }


        /////////////////////////////////////////

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class='search'>
                    <label className='label'>Buscar Pais</label>
                    </div>
                    <div id='search'>
                        <input className='input' placeholder='Ingrese el Pais'
                            onChange={handleChange} value={input}></input>
                        <button className='boton'>Buscar</button>
                    
                </div>
            </form>
        </div>

    )
}