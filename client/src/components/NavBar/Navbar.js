import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'

export default function Navbar() {
    return (
        <header>
            <nav>
                <div>
                   <NavLink to= '/Home'> Country App</NavLink>
                </div>
                <div>
                    <NavLink to = "/ActivityForm"> Add Activity</NavLink>
                    <SearchBar/>
                </div>
            </nav>
        </header>
    )

}