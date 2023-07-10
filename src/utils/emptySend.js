import axios from "axios";

async function emptySend() {
    await axios.post('https://skillfactory-task.detmir.team/cart/update', { data: [] }, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        withCredentials: true,
    });
}

export default emptySend;