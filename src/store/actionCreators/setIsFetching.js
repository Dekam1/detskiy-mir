import ACTIONS from "../actions";

export default function setIsFetching(param) {
    return {
        type: ACTIONS.SET_IS_FETCHING,
        payload: param
    }
}