<?php
/*
$servername = "localhost";
$username ="username";
$password ="";

//create connection
$conn = new mysqli($servername,$username,$password);

//check connection
if ($conn->connect_error){
    die ("connection failed: ".$conn->connect_error);

}
else "connected successfully";
$conn->close();*/



$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$database = "signup"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// If the connection is successful, you can perform database operations here


// Close connection
?>
