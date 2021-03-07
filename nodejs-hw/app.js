const express = require('express');


const app = express();
app.use(express.json()); 

const employees = [
    { id: 1, fName: "Joy", lName: "Moishe" },
    { id: 2, fName: "Keren", lName: "Kipi" },
    { id: 3, fName: "Lori", lName: "Ugi" },
];

//get all employees
app.get('/api/employees', (req, res) => {
    res.json(employees);
})


//get one employee
app.get('/api/employees/:empId', (req,res) => {
  
    const result = employees.find(employee => employee.id === parseInt(req.params.empId));
    if(!result) res.status(404).send('ERROR 404. The employee with the given ID number was not found!');
    res.json(result);
})


//add new employee
app.post('/api/employees', (req, res) => {
    //validation
    if(!req.body.fName && !req.body.lName){
        //400 bad request
        res.status(400).send('First name and Last name are required!');
        return;
    }

    const newEmp = {
        id: employees.length + 1,
        fname: req.body.fName,
        lName: req.body.lName
    }
    
    employees.push(newEmp);
    res.json(newEmp);
});


//updte full employee 1
app.put('/api/employees/:empId', (req,res) => {
    if(!req.body.fName && !req.body.lName){
        //400 bad request
        res.status(400).send('First name and Last name are required!');
        return;
    }
    const updateEmp = req.body;

    const index = employees.findIndex(i => i.id === parseInt(req.params.empId));
    if(!index) res.status(404).send('ERROR 404. The index number was not found!');

    employees[index] = updateEmp;
    res.send(updateEmp);

})



//delete specific employee
app.delete('/api/employees/:empId', (req,res) => {
    const result = employees.find(employee => employee.id === parseInt(req.params.empId));
    if(!result) res.status(404).send('ERROR 404. The employee with the given ID number was not found!');

    const index = employees.indexOf(result);
    employees.splice(index, 1);
    res.send(result);
})


//partial update
app.patch('/api//employees/:empId', (req,res) => {
    const result = employees.find(employee => employee.id === parseInt(req.params.empId));
    if(!result) res.status(404).send('ERROR 404. The employee with the given ID number was not found!');

    if(!req.body.fName && !req.body.lName){
        //400 bad request
        res.status(400).send('First name and Last name are required!');
        return;
    }

    const { fName, lName } = req.body;
    if(fName) {
        result.fName = fName;
    }
    if(lName){
        result.lName = lName;
    }

    res.json(result);

})



app.listen(3000, () => {
    console.log('Server started on port 3000..');
})