import React from 'react';
import { NavLink } from 'react-router-dom';
import { getActivitiesByName } from '../../actions';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div class='flex-container'>
                    <div id='country'>
                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to='/Home'> Countries App</NavLink>
                    </div>
                    <div>
                        <button id='button-nav' onClick={getActivitiesByName}> <NavLink style={{ textDecoration: 'none', color: 'black' }}
                            to="/ActivityForm">Agregar Actividad</NavLink></button>
                    </div>
                    <div id='searchbar'>
                        <SearchBar />
                    </div>

                </div>
            </nav>
        </header>
    )

}