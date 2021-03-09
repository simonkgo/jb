const express = require('express');

const app = express();
       // ==============================example1==================================================
// const firstMiddel = (req,res,next) => {
//     console.log(`logDate:` ,Date.now());
//      res.json('ok');
//      next()
// };

// app.use(firstMiddel);
// app.use('/api/home',firstMiddel);

       // ==============================example2==================================================

// const secendMiddel = (req,res,next) => {
//     console.log(`logDate:` ,Date.now());
//     next()
//  };

// app.use('/api/example2',secendMiddel);
// app.get('/api/example2',secendMiddel);
// app.post('/api/example2',secendMiddel);

       // ==============================example3==================================================

// const thirdMiddel1 = (req,res,next) => {
//     console.log('exsample 3 1');
//     next()
//  };

//  const thirdMiddel2 = (req,res,next) => {
//     console.log('exsample 3 2');
//     next()
//  };

// app.get('/api/example3',[thirdMiddel1,thirdMiddel2])

       // ==============================example4==================================================

// const forMiddel1 = (req,res,next) => {
//     console.log('exsample 4 1');
//     next()
//  };

//  const fordMiddel2 = (req,res,next) => {
//     console.log('exsample 4 2');
//     next()
//  };

// app.get('/api/example4',forMiddel1);
// app.get('/api/example4',fordMiddel2)

    //    ==============================example4 Router==================================================

    // const userFunc = (requst, response, next) => {
    //     console.log("users");
    // };
    // const messageFunc = (requst, response, next) => {
    //     console.log("messages");
    // };


    // const user = express.Router();
    // const message = express.Router();

    // user.use('/users',userFunc)
    // message.use('/message',messageFunc)

    // app.use('/api',user)
    // app.use('/api',message)


    const morgan = require('morgan');
    // app.use(morgan('dev'))
    
    app.get('/api/home',morgan("dev"),(req,res) => {
     res.json('hello')
    })


app.listen(4000,() => console.log('server is runing'));