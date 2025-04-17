<?php 
include_once 'db.php'; 
$firstName=$_POST['firstName'];
$lastName=$_POST['lastName'];
$email=$_POST['email'];
$sql="INSERT INTO users (first_name,last_name,email) VALUES ('$firstName','$lastName','$email')";
$result=mysqli_query($connect,$sql);
header("Location: index123.php?signup=success");
?>