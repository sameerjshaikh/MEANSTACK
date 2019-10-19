<?php 
	#Complete CRUD Example using REST Service...
	class Database{
		private $host = 'localhost:3308';
		private $name ='cdactraining';
		private $user ="root";
		private $pwd = '';

	    function getConnection()
	    {
	    	$con = new mysqli($this->host, $this->user, $this->pwd, $this->name);
	    	return $con;
	    }
	}
 ?>

 <?php 
 	function insertEmployee(){
 		$com = new Database();
 		$con = $com->getConnection();
 		$data = json_decode(file_get_contents("php://input"), true);
 		//var_dump($data);//Data posted by the user thro Ajax....
 		$empId = $data["empID"];
 		$empName = $data["empName"];
 		$empAddress = $data["empAddress"];
 		$empSalary = $data["empSalary"];
 		$query = sprintf("Insert into emptable values('%s','%s','%s','%s')", $empId, $empName, $empAddress, $empSalary);
 		print($query);
 		$con->query($query);
 	}


 	function updateEmployee(){
 		$com = new Database();
 		$con = $com->getConnection();
 		$data = json_decode(file_get_contents('php://input'),true);
 		$empId = $data["empID"];
 		$empName = $data["empName"];
 		$empAddress = $data["empAddress"];
 		$empSalary = $data["empSalary"];
 		$query = sprintf("Update emptable set empname ='%s', empAddress = '%s', empsalary = '%s' where empid = '%s'", $empName, $empAddress, $empSalary , $empId);
 		print($query);
 		$con->query($query);	
 	}
 	function getAllEmployees(){
 		$com = new Database();
 		$con = $com->getConnection();
 		$query = "SELECT * FROM EMPTABLE";
 		$res = $con->query($query);
 		$list = array();
 		while ($row = $res->fetch_assoc()) {
 			$list [] = $row;
 		}
 		echo json_encode($list);
 	}

 	function getEmployee($id){
 		$com = new Database();
 		$con = $com->getConnection();
 		$query = "SELECT * FROM EMPTABLE WHERE EMPID = " . $id;
 		$res = $con->query($query);
 		while ($row = $res->fetch_assoc()) {
 			echo json_encode($row);
 			return;
 		}
 	}

 	

 	$method = $_SERVER["REQUEST_METHOD"];//Gets the type of the HTTP Verb used by the client...
 	switch ($method) {
 		case 'POST':
 			insertEmployee();
 			echo "insertion succeeded";
 			break;
 		case "GET":
	 		if(isset($_GET["id"])){
	 			$id = $_GET["id"];
	 			getEmployee($id);
	 		}else
				getAllEmployees();
 			break;
 		case "PUT":
 			updateEmployee();
 			echo "Employee is updated";
 			break;
 		default:
 			echo "Not implemented";
 			break;
 	}
  ?>
