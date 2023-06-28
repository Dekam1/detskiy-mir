import initialState from "../initialState";
import ACTIONS from "../actions";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        case ACTIONS.SET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }

        case ACTIONS.SET_ONE_PRODUCT:
            return {
                ...state,
                product: action.payload
            }

        case ACTIONS.SET_PAGE:
            return {
                ...state,
                dataPagination: {
                    ...state.dataPagination,
                    page: action.payload
                }
            }

        case ACTIONS.SET_PAGE_QTY:
            return {
                ...state,
                dataPagination: {
                    ...state.dataPagination,
                    pageQty: action.payload
                }
            }

        default: return state
    }
}