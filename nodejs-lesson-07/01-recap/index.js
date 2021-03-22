const express = require('express')

const routeRecap = () => {
    const app = express()

    app.get('/api/v1/products', (req, res, next) => {
        res.json('yey')
    })

    app.listen(3000, () => console.log('listen on port 3000'))
}

// routeRecap()


const middlewareRecap1 = () => {
    const app = express()

    app.use((req, res, next) => {
        console.log('First step: Middleware');
        next()
    })

    app.get('/api/v1/products', (req, res, next) => {
        console.log('Second step : Route - /api/v1/products')
        res.json('yey')
    })
    app.listen(3000, () => console.log('listen on port 3000'))
}



// middlewareRecap1()


const middlewareRecap2 = () => {
    const app = express()


    app.get('/api/v1/products', (req, res, next) => {
        console.log('First step : Route - /api/v1/products')
        next()
    })
    app.use((req, res, next) => {
        console.log('Seconed step: Middleware');
        res.json('yey')
    })
    app.listen(3000, () => console.log('listen on port 3000'))
}

// middlewareRecap2()

const middlewareRecap3 = () => {
    const app = express()

    app.use((req, res, next) => {
        console.log('First step: Middleware');
        next()
    })
    app.get('/api/v1/products', (req, res, next) => {
        console.log('Seconed step : Route - /api/v1/products')
        next()
    })
    app.use((req, res, next) => {
        console.log('third step: Middleware');
        res.json('yey')
    })
    app.listen(3000, () => console.log('listen on port 3000'))
}

// middlewareRecap3()



const middlewareRecap4 = () => {
    const app = express()

    app.get('/api/v1/products', (req, res, next) => {
        console.log('First step : Route - /api/v1/products')
        // next() //מעביר למידלוור עם 3 ארגומנטים
        next('opssi')// מעביר למידלוור עם 4 ארגומנטים
    })
    //מעבר למידלוור עם 3 ארגומנטים
    app.use((req, res, next) => {
        console.log('Seconed step: middleware with 3 arguments');
        res.json('yey')
    })

    //מעבר למידלוור עם 4 ארגומנטים

    app.use((err, req, res, next) => {
        console.log('Seconed step: middleware with 4 arguments');
        res.json('yey')
    })
    app.listen(3000, () => console.log('listen on port 3000'))

}

middlewareRecap4()