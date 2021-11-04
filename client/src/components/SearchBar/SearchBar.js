import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";


export default function SearchBar() {

    let countries = useSelector(state => state.allCountries)

    let [input, setInput] = useState("")

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let countryDetail= countries.find(input)

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Buscar Pais</label>
                <input placeholder='Ingrese el Pais' onChange={handleChange} value ={input}></input>
                <button>Buscar</button>
            </form>
        </div>

    )
}