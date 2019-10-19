var fk=require("./firstmodule.js");

fk.adddata({"id":121,"name":"mobile","price":15000});
fk.adddata({"id":123,"name":"tablet","price":52000});
fk.adddata({"id":124,"name":"tv","price":10000});

var data=fk.getdata();
//console.log(data);

data.forEach(function(e,i){
	console.log(e.id+" "+e.name+" "+e.price);
});