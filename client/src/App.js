import './App.css';
import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import ActivityForm from './components/ActivityForm/ActivityForm';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from './actions'
import Countrydetails from './components/CountryDetails/CountryDetails';


function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), [dispatch])
  



  return (

    <React.Fragment>

      
      < Route exact path='/' component={Landing} />
      < Route path='/Home' component={NavBar} /> 
      < Route exact path='/Home' component={Home} />
      < Route exact path='/NavBar' component={NavBar} />
      < Route exact path="/ActivityForm" component={ActivityForm} />
      < Route path='/CountryDetails/:id' component={Countrydetails} />


    </React.Fragment>
  )
}

export default App;

