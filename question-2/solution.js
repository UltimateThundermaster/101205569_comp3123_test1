

const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success)
        }, 500)
    })
    
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!')
            }catch(err) {
                reject({error: "delayed exception!"})
            }
        }, 500)
      
    } )
}


resolvedPromise().then((data) => {
    console.log(data)
})

rejectedPromise().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})