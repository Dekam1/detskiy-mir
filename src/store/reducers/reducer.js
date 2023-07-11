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

        case ACTIONS.SET_ORDERS:
            return {
                ...state,
                orders: action.orders
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

        case ACTIONS.SET_SUBMIT:
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: []
                }
            }

        case ACTIONS.SET_SNACKBAR_OPTIONS:
            return {
                ...state,
                snackbarOptions: {
                    ...state.snackbarOptions,
                    snackbarOpen: action.payload.action,
                    snackbarType: action.payload.type
                }
            }

        case ACTIONS.SET_SNACKBAR_CLOSE:
            return {
                ...state,
                snackbarOptions: {
                    ...state.snackbarOptions,
                    snackbarOpen: action.payload,
                }
            }

        default: return state
    }
}