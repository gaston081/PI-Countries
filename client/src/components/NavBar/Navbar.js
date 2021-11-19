import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'


export default function Navbar() {
    return (
        <header>
            <nav className='nav'>
                <div className='flex-container'>
                    <div id='country'>
                        <NavLink style={{ textDecoration: 'none', color: 'rgb(9, 9, 78)' }} to='/Home'> Countries App</NavLink>
                    </div>
                    <div id= 'style-padding'>
                        <button id='button-nav'> <NavLink style={{ textDecoration: 'none', color: 'white'}}
                            to="/ActivityForm">Agregar Actividad</NavLink></button>
                        <button id='button-nav'> <NavLink style={{ textDecoration: 'none', color: 'white'}}
                                to="/About"> About </NavLink></button>
                    </div>
                    <div id='searchbar'>
                        <SearchBar />
                        
                    </div>

                </div>
            </nav>
        </header>
    )

}