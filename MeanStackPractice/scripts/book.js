class Book
{
  constructor(id,name,author,price)
  {
  	this.Id=id;
  	this.Name=name;
  	this.Author=author;
  	this.Price=price;
  } 
}

class BookCollection{

	constructor()
	{
		this.books=[];
	}


	insertBook(bookData) 
	{
		this.books.push(bookData);
	}
		


	getAllBook() 
	{
		return this.books;
	}
	
		
	deleteBook(id) 
	{
		for (var i = 0; i < books.length; i++)
		{
			if(books[i].books.Id==id)
			{
				this.books.splice(i,1);
			}
			
		}
	}
	
 updateBook(bookData) 
	{
		for (var i = 0; i < books.length; i++)
		   {
				books[i].books.Id=bookData.Id;
				books[i].books.Name=bookData.Name;
				books[i].books.Author=bookData.Author;
				books[i].books.Price=bookData.Price;
			}
			
		}
		
		 findBook(id) 
	{
		// for (var i = 0; i < books.length; i++)
		//  {
		//  	if(books[i].books.Id==id)
		// 	{
		// 		var id=books[i].books.Id;
		// 		var name=books[i].books.Name;
		// 		var author=books[i].books.Author;
		// 		var price=books[i].books.Price;

		// 	}
		// }
	}
}