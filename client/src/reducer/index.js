
const initialState = {
    allCountries: [],
    ordered: [],
    countryId: {},
    activities: []
    
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                allCountries: action.data,

            };
        case "ORDERED":
            return {
                ...state,
                ordered: action.data,
            };

        case "COUNTRY_ID":
            return {
                ...state,
                countryId: action.data,
            }

        case "BY_CONTINENT":
            return {
                ...state,
                ordered: state.allCountries.filter((c) => c.continent === action.data)
            }

        case "ACTIVITIES_BY_NAME":
            return {
                ...state,
                ordered: action.data[0].countries
            }

        case "ACTIVITIES":
            return {
                ...state,
                activities: action.data
            }

        default: return state;
    }

}