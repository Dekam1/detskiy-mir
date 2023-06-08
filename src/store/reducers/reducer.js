import initialState from "../initialState";
import ACTIONS from "../actions";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        default: return state
    }
}