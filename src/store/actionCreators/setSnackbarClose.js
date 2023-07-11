import ACTIONS from "../actions";

function setSnackbarClose() {
    return {
        type: ACTIONS.SET_SNACKBAR_CLOSE,
        payload: false
    };
};

export default setSnackbarClose;
