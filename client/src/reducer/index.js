
const initialState = {
    allCountries: [],
    ordered: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                allCountries: action.data,
                
           };
       
        case "ORDERED":
            return{
                ...state,
                ordered: action.data, 
            };
        
        
           default: return state;
    }

}