const express = require('express');
const employee = require('./User/User');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/employee', (req, res) => {
   res.json(employee);
});

app.get('/api/employee/:id', (req, res) => {
   const searchEmployee = employee.find(user => user.id === parseInt(req.params.id));
   res.json(searchEmployee);
});

app.post('/api/employee', (req, res) => {
   const newemployee = req.body;
   employee.push(newemployee);
   res.json(newemployee);
});

app.put('/api/employee/:id', (req, res) => {
   const updataEmployee = employee.findIndex(user => user.id === parseInt(req.params.id));
   employee[updataEmployee] = req.body;
   res.json({ message: `The Employee Update`, employee })
});

app.patch('/api/employee/:id', (req, res) => {
   const data = req.body;
   employee.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
         user.id = data.id ? data.id : user.id;
         user.firstName = data.firstName ? data.firstName : user.firstName;
         user.lastName = data.lastName ? data.lastName : user.lastName;
         user.department = data.department ? data.department : user.department;

         res.json({ massage: `The Employee is update`, employee })
      };
   });
});

app.delete('/api/employee/:id', (req, res) => {
   const deleteEmployee = employee.findIndex(user => user.id === parseInt(req.params.id));
   employee.splice(deleteEmployee, 1);
   res.json({ massage: `The Employee Is Delete `, employee })
});


app.listen(port, console.log(`The server is runing at port ${port}`));
