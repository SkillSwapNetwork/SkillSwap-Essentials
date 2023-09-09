<?php
// Connect to the MySQL database (replace with your database credentials)
$servername = "login host";
$username = "root";
$password = "Amigobuddies";
$database = "userss";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$FirstName = $_POST['FirstName'];
$LastName = $_POST['LastName'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


// Insert data into the database
$sql = "INSERT INTO users (FirstName, LastName, username, email, password) VALUES ('$FirstName', '$LastName', '$username','$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
