import axios from "axios";

import setSubmit from "../store/actionCreators/setSubmit";

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
            dispatch(setSubmit());
        } catch (error) {
            alert('При обработке запроска возникла ошибка:(');
        }
    }
}

export default fetchSubmit;