<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
</head>
<body>
      <form action="" method="get">
            <input type="text" name="name" placeholder="Enter your name">
            <input type="submit" value="Submit" name="submit">
      </form>
</body>
</html>
<?php 
 $name=$_GET['name'] ;
 echo "Hello $name" ;
?>