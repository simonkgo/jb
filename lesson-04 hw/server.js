const express = require('express');

const router = require('./Routing/employee');

const app = express();

const port = process.env.PORT || 3000;


app.use(express.json());

app.use(router);


app.listen(port, console.log(`The server is runing at port ${port}`));
