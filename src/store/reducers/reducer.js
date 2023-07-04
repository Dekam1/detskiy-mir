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

        case ACTIONS.SET_CART_ITEM:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [
                        ...state.cart.cartItems,
                        action.payload
                    ]
                }
            }

        case ACTIONS.SET_SERVER_CART:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: action.payload
                }
            }

        case ACTIONS.SET_CART_ITEM_QTY:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.map(item => {
                        if (item.product.id === action.payload.id) {
                            switch (action.payload.type) {
                                case "increment":
                                    return {
                                        ...item,
                                        quantity: item.quantity + 1,
                                    };

                                case "decrement":
                                    return {
                                        ...item,
                                        quantity: item.quantity - 1,
                                    };

                                default:
                                    break;
                            }
                        }
                        return item;
                    }),
                },
            };

        case ACTIONS.DELETE_CART_ITEM:
            return {
                ...state,
                cart: {
                    cartItems: state.cart.cartItems.filter(item => {
                        return item.product.id !== action.payload
                    })
                }
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