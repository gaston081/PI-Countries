const axios = require('axios')

export function getCountries() {
    return async function (dispatch) {
        let response = await axios.get('http://localhost:3001/api/country/')
        dispatch({ type: "GET_COUNTRIES", data: response.data })

    }

}

export function getByOrder(order) {
    return async function (dispatch) {
        let response = await axios.get('http://localhost:3001/api/country?order=' + order)
        dispatch({type: "ORDERED", data: response.data})
    }
}

