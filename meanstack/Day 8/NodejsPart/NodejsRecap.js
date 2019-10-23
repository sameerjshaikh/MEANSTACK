//NodejsRecap.js
function testExample(){
	console.log("testExample")
}
//These functions are global functions, u should not use too many global functions as maintainance becomes difficult. 
//Module based programming is prefered. Based on CommonJs.js, U could create modules and export the modules into other JS files. 

//Anonymous Modules....
module.exports = (function(){
	function addFunc(first,  second) {
		return first + second;
	}
	return{
		addOperation : addFunc
	}

})();