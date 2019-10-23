//Demo on mongodb....
var app = require("express")();
var mongodb = require("mongodb").MongoClient;
var parser = require("body-parser");
//MongoClient is the object that provides interaction bw the database and UR Code. 

app.use(parser.urlencoded({"extended": true}));//when true U could allow embedding Ur Request body with different formats like json, html, xml and many more....

app.use(parser.json());//Allowing the body to hold json data...


//adding a middleware to enable CORS....
app.use((req, res, next)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,PUT, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});


var loc = "mongodb://localhost/cdactraining"
var db;
function getConnection(){
	mongodb.connect(loc, (err, database)=>{
	db = database.db("cdactraining");	
	});
}

getConnection();//Call this once and only once...

app.get("/", (req, res)=>{
	if(db){
		db.collection("employees").find().toArray((e, r)=>{
			res.send(r);
		})
	}
})

app.get("/:id", (req, res)=>{
	var empId = parseInt(req.params.id);
	console.log(empId);
	var finder = {"empId" : empId}
	db.collection("employees").find(finder).toArray((e, r)=>{
		res.send(r);
	})
})


app.post("/", (req, res)=>{
	var data = req.body;//only if U have body-parser....
	db.collection("employees").insert(data);
	var msg = {"Info" : "Inserted Successfully"};
	res.send(msg);
})
//db.mycol.update({'title':'MongoDB Overview'},{$set:{'title':'New MongoDB Tutorial'}},{multi:true})

app.put("/", (req, res)=>{
	var data = req.body;
	var finder = {'empId' : data.empId};
	var setter = {"empName" : data.empName, "empAddress": data.empAddress};
	db.collection("employees").update(finder, {$set:setter});
	var msg = {"Info" : "Updated Successfully"};
	res.send(msg);
})
app.listen(1234, ()=>{
	console.log("running!!!!");
});