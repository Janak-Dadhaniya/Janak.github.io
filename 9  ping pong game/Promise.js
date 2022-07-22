function oddEven(){
    return promise = new Promise((resolve,reject) => {
    resolve(1)
    })
    }
    oddEven().then((data) => {
    console.log(data) // 1
    return data*2
    })
    .then((data) => {
    console.log(data) // 2
    return data*3
    })
    .then((data) => {
    console.log(data) // 3
    })
    .catch((error) => {
    console.log(error)
    })
    