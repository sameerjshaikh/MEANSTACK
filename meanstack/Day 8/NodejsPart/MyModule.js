//This module contains named modules of the Nodejs App.
var util = require("util");
module.exports.employee = function(id, name, address){
	this.empId = id;
	this.empName = name;
	this.empAddress = address;
}

module.exports.repository = function(){
	this.list = [];
	this.addEmp = function(emp){
		this.list.push(emp);
	}

	this.deleteEmp = function(id){
		var emp = this.list.find(e=>e.empId == id);
		var index = this.list.indexOf(emp);
		this.list.splice(index, 1);
	}
	this.getAll = function(){
		return this.list;
	}
}
module.exports.getDate = function(date){
	var dt = date.getDate();
	var mm = date.getMonth() + 1;
	var yy = date.getFullYear();
	return dt + "/" + mm + "/" + yy;
}

module.exports.getTime = function(date){
	var hh = date.getHours();
	var mm = date.getMinutes();
	var ss = date.getSeconds();
	return util.format("%d:%d:%d", hh, mm, ss);
}
module.exports.developedBy ="Phaniraj";
module.exports.developedOn = new Date();
module.exports.description ="A Module for training DAC team on Nodejs";