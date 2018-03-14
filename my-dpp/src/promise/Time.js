function getCurrentTime(onSuccess, onFail) {

    return new Promise(function () {
        setTimeout(function () {
            var didSuccessed = Math.random() >= 0.5;
            didSuccessed
                ? resolve(new Date())
                : reject('Error')
        }, 2000)
    })
}

getCurrentTime()
    .then(currentTime => getCurrentTime())
    .then(currentTime => {
        console.log('The current time is: ' + currentTime)
        return true
    })
    .catch(error => console.log('There was an error:' + error))

    //export default getCurrentTime