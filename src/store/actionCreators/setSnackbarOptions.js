import ACTIONS from "../actions";

function setSnackbarOptions(action) {
    return {
        type: ACTIONS.SET_SNACKBAR_OPTIONS,
        payload: {
            action: true,
            type: action
        }
    };
}

export default setSnackbarOptions;