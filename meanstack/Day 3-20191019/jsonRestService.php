<?php
/*REST stands for Representational State Transfer. Its a service provided by the Server Apps where Clients can access these services thro HTTP. The service is a method/function that is exposed by UR server. Clients call these functions thro URLs and HTTP like any other web request, where in this case, they get the data in a presice format instead of a HTML View. The data in the presice format could be either JSON or XML. Most of the time it would be both. The REST services are accessible by any platform and any technology that is available to access HTTP. The data communication could be 2 ways: Clients can post the data and Clients can get the data. In this process, we use the HTTP verbs: GET, POST, PUT and DELETE. These Verbs determine the direction of the flow of the data. 	GET: To extract the data from the server... 
POST: To send the data in a secured format to the server from the client...
PUT: Used to update an existing data to the server. 
DELETE : Used to Delete the specific data in the server.
The services/methods will be exposed thro HTTP Verbs for a certain data is what is called as REST Service. Most of the server side technologies have their own implementations for REST Services:
php, NodeJs(Http and Express), Java(Spring), .NET(Web APIs) have their own frameworks for exposing the methods thro REST.  
Client Apps like HTML, JQuery, Angular, ASP.NET Web Forms, JSP Apps will consume these REST services and display the data and UI for these data in their own way....
*/
$jsondata = file_get_contents('./data.json');
$objects = json_decode($jsondata);//decoding here...

$httpMethod = $_SERVER["REQUEST_METHOD"];//Get the type of the HTTP method that the client has requested....
switch ($httpMethod) {
	case 'GET':
		if(isset($_GET["id"])){
			$id = intval($_GET["id"]);
			foreach ($objects as $key => $value) {
				if($value->empID == $id){
					echo json_encode($value);
					return;
				}else continue;				
			}
			echo "No Employee found";			
		}else
			echo $jsondata;//encoding it into json..
		break;	
	default:
		echo "not implemented";
		break;
}
?>