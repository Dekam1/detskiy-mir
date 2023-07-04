import axios from "axios";

function emptySend() {
    axios.post('https://skillfactory-task.detmir.team/cart/update', {
        data: []
    })
}

export default emptySend;