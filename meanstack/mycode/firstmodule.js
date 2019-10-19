module.exports=(function(){

	var cart=[];

	function addtocart(item)
	{
		cart.push(item);
	}
	function getAllCart()
	{
		return cart;
	}

	return {

		adddata: addtocart,
		getdata: getAllCart
	}


})();