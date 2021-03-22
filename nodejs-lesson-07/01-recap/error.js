// const main = () => {


//     const myError = new Error('oppsi')
//     console.log('1- Error Name:', myError.name);
//     console.log('2- Error Message:', myError.message);
//     console.log('3- Error Stack:', myError.stack);

// }


const express = require('express')


const errorMiddleware = () => {
    const app = express()

    app.get('/api/v1/products', (req, res, next) => {
        console.log('First step : Route - /api/v1/products')
        const myError = new Error('My great error')
        next(myError)
    })
    app.use((err, req, res, next) => {
        const error = {
            name: err.name,
            message: err.message
        }
        res.status(400).json({ error })
    })



    app.listen(3000, () => console.log('listen on port 3000'))

}

errorMiddleware()