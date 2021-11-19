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
    

    function handleSubmit(e) {
        e.preventDefault();
        let filter = countries.filter(elem => elem.name.toLowerCase() === input.toLowerCase());
        if (filter.length === 0) {
            alert('El pais ingresado no existe')
            } else {
        let id = countries.find((c) => c.name.toLowerCase() === input.toLowerCase()).id;
        history.push("/CountryDetails/" + id)
        }
        console.log(filter)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='searchbar'>
                    <label className='label'>Buscar Pais</label>
                    </div>
                    <div id='search'>
                        <input className='input' placeholder='Ingrese el Pais'
                            onChange={handleChange} value={input}></input>
                        <button type= "submit" className='btn-submit'>Buscar</button>
                    
                </div>
            </form>
        </div>

    )
}