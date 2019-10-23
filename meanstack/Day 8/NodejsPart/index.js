var math = require("./NodejsRecap");

var module = require("./MyModule");
var emp = module.employee;
console.log(module.getDate(module.developedOn));
console.log(module.getTime(module.developedOn));
// var emp1 = new emp(123,"Phaniraj", "Bangalore");
// var emp2 = new emp(124,"TestName", "TestAddress");
// /*console.log(emp1);
// console.log(emp2);*/

// var repository = module.repository;
// var empDB = new repository();
// empDB.addEmp(emp1);
// empDB.addEmp(emp2);
// var list = empDB.getAll();
// list.forEach((e, i)=>console.log(e.empName));
//console.log(module);

//console.log(math.addOperation(123, 213));