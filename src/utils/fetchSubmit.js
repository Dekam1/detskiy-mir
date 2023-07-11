import axios from "axios";

import setSubmit from "../store/actionCreators/setSubmit";
import setSnackbarOptions from "../store/actionCreators/setSnackbarOptions";

function fetchSubmit() {
    return async (dispatch) => {
        try {
            await axios.post('https://skillfactory-task.detmir.team/cart/submit', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                withCredentials: true
            });
            dispatch(setSnackbarOptions('success'));
            dispatch(setSubmit());
        } catch (error) {
            dispatch(setSnackbarOptions('error'));
        }
    }
}

export default fetchSubmit;