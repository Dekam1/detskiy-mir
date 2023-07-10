function createRequestNumber() {
    let requestNumber = "№";
    for (let i = 0; i < 5; i++) {
        requestNumber += Math.floor(Math.random() * 10);
    }
    return requestNumber;
}

export default createRequestNumber;