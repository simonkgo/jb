const express = require('express');

// const routeRecap = () => {
//     const app = express();

    
//     app.get('/api/v1/products',(req,res,next) => {
//         res.json('yey')
//     });

//     app.listen(3000, () => console.log('Server Is Runing In Port 3000'));
// }

// routeRecap();

// const middelwareRecap1 = () => {
//     const app = express();

//     app.use((req,res,next) => {
//         console.log('Middelware');
//         next()
//     })
//     app.get('/api/v1/products',(req,res,next) => {
//         console.log('Middelware In Path');

//         res.json('yey')
//     });
//     app.listen(3000, () => console.log('Server Is Runing In Port 3000'));
    
// }
// middelwareRecap1();

// const middelwareRecap2 = () => {
//     const app = express();

//     app.get('/api/v1/products',(req,res,next) => {
//         console.log('Middelware In Path');
//         next();
//   });

//     app.use((req,res,next) => {
//         console.log('Middelware');
//         res.json('yey');
//     });

//     app.listen(3000, () => console.log('Server Is Runing In Port 3000'));
    
// }
// middelwareRecap2();


// מידלוואר עם שלושה ארגומנטים נעדיף להשים למעלה לפני הראוט אך מידללואר של 4 ארגומנטים יהיה מתחת לראוט


   // app.use((req,res,next) => {
    //     console.log('Middelware error');
    //     res.json('yey');
    // });


// const middelwareRecap3 = () => {
//     const app = express();

//     app.get('/api/v1/products',(req,res,next) => {
//         console.log('Middelware In Path');
//         // next();
//         next('Opssss...');
//   });

 
//     app.use((err,req,res,next) => {
//         console.log('Middelware with 4 argument');
//         res.json(`Ok`);
//     });

//     app.listen(3000, () => console.log('Server Is Runing In Port 3000'));
    
// }
// middelwareRecap3();



// const middelwareRecap4 = () => {
//     const app = express();
     
//     app.use((err,req,res,next) => {
//         console.log('Middelware with 4 argument');
//         next(`Ok`);
//     });


//     app.get('/api/v1/products',(req,res,next) => {
//         console.log('Middelware In Path');
//         res.json('Yey')
//   });

//  app.listen(3000, () => console.log('Server Is Runing In Port 3000'));
    
// }
// middelwareRecap4();