import './App.css';
import React from 'react'
import Navbar from './components/NavBar/Navbar';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import ActivityForm from './components/ActivityForm/ActivityForm';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCountries } from './actions'


function App() {

  const dispatch = useDispatch();
  useEffect(() => dispatch(getCountries()), []) //buscar solucion al warning
  
   // useEffect = (() => { setElementsToShow(allCountriesFromState) }, [handleChange])

    // useEffect = (() => { setElementsToShow(orderedFromState) }, [handleChange])




  return (

    <React.Fragment>
      
      < Route exact path='/' component={Landing} />
      < Route path = '/Home' component={Navbar}/>
      < Route exact path='/Home' component={Home} />
      < Route exact path='/NavBar' component={Navbar} />
      < Route exact path= "/ActivityForm" component={ActivityForm}/>
    
    </React.Fragment>
  )
}

export default App;

