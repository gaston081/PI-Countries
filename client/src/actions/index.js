const axios = require('axios')

export function getCountries() {
    return async function (dispatch) {
        let response = await axios.get('http://localhost:3001/api/country/')    
        dispatch({ type: "GET_COUNTRIES", data: response.data });
    }

}

export function getByOrder(order) {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/api/country?order=${order}`)
        dispatch({ type: "ORDERED", data: response.data })
    }
}

 export function getCountryById(id) {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/api/country/${id}`)
        dispatch({ type: "COUNTRY_ID", data: response.data })

    }
} 

export function getCountryByContinent(data) {
    return function (dispatch) {
        dispatch({ type: "BY_CONTINENT", data })
    }
}

export function getActivitiesByName(name) {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/api/activity?name=${name}`)
        dispatch({ type: "ACTIVITIES_BY_NAME", data: response.data });console.log(response.data)
}
}

export function getActivities() {
    return async function (dispatch) {
        let response = await axios.get(`http://localhost:3001/api/activity/`)
        dispatch({ type: "ACTIVITIES", data: response.data })
    }
}


