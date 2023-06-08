import ACTIONS from "../actions";

export default function setPage(page) {
    return {
        type: ACTIONS.SET_PAGE,
        payload: page
    }
}