

const lowerCaseWords = (mixedArray) => {
    let filteredArray = []
    return new Promise((resolve, reject) => {
        mixedArray.map((val) => {
            if(typeof val === 'string') {
                filteredArray.push(val.toLowerCase())
            }
        })
        resolve(filteredArray)
    })
}

lowerCaseWords(["PIZZA", 10, true, 25, false, "Wings"]).then((data) => {
    console.log(data)
})