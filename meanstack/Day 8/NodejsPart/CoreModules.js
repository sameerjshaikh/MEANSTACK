var fs = require("fs");
var emp = require("./MyModule").employee;
var repository = require("./MyModule").repository;
var app = require("express")();
var parser = require("body-parser");

var empDB = new repository();
app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	next();
})

app.use(parser.urlencoded({"extended": true}));
app.use(parser.json());

/*
var empDB = new repository();
empDB.addEmp(new emp(123, "Phaniraj", "Bangalore"));
empDB.addEmp(new emp(124, "Gopal", "Bangalore"));
empDB.addEmp(new emp(125, "Phaniraj", "Bangalore"));
empDB.addEmp(new emp(126, "Phaniraj", "Bangalore"));
empDB.addEmp(new emp(127, "Phaniraj", "Bangalore"));
empDB.addEmp(new emp(127, "Phaniraj", "Bangalore"));

//var contents = fs.readFileSync("CoreModules.js", "utf8");
Reading the file asychronously
fs.readFile("CoreModules.js", "utf8", (err, res)=>{
	if(err) console.log(err);
	console.log(res);
})

var allRecords = require('./AllData.json');
allRecords.forEach((e, i)=>console.log(e.empName));
/*
var jsonCollection = JSON.stringify(empDB.getAll());
fs.writeFile("AllData.json", jsonCollection, (err)=>{
	if(err)console.log(err);
})
/*
fs.appendFile("Content.json", jsonData + "\n", (err)=>{
	if(err) console.log(err);
});

//console.log("This code runs async");
//console.log(contents);
*/

function saveToJson(){
	var jsonCollection = JSON.stringify(empDB.getAll());
	fs.writeFile("AllData.json", jsonCollection, (err)=>{
	if(err)console.log(err);
})
}

function loadFromJson(){
	var allRecords = require('./AllData.json');
	empDB.list = allRecords;
}

app.get('/', (req, res)=>{
	var allRecords = require('./AllData.json');
	res.send(allRecords);
})


app.get("/Insert", (req, res)=>{
	res.sendFile(__dirname + "/EmpInsert.html");
})

app.post("/register", (req, res)=>{
	var data = req.body;
	var empObj = new emp(data.empId, data.empName, data.empAddress);
	loadFromJson();
	empDB.addEmp(empObj);
	saveToJson();
	res.send("Saved to database");
});

app.listen(1234, ()=>{
	console.log("Server at 1234");
})
