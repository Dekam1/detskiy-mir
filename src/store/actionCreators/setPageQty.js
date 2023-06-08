import ACTIONS from "../actions"

export default function setPageQty(total) {
    return {
        type: ACTIONS.SET_PAGE_QTY,
        payload: total
    }
}