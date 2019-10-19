//Common.js
function $(id) {
	return document.getElementById(id);
}

function click(id, func){
	$(id).addEventListener('click', func);
}