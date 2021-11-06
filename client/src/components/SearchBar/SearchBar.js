import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


export default function SearchBar() {

    let countries = useSelector(state => state.allCountries)

    let [input, setInput] = useState("")

    let history = useHistory();


    function handleChange(e) {
        setInput(e.target.value);
    }

///////////////////////////////////
    function handleSubmit(e) {
        e.preventDefault();
        let filter = countries.filter(elem => elem === e.target.value);
        if (filter === []) {
            alert("El pais ingresado no existe")
        } else {
            let id = countries.find((c) => c.name.toLowerCase() === input.toLowerCase()).id;
            history.push("/CountryDetails/" + id)
        }
/////////////////////////////////////////

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Buscar Pais</label>
                <input placeholder='Ingrese el Pais'
                    onChange={handleChange} value={input}></input>
                <button>Buscar</button>
            </form>
        </div>

    )
}