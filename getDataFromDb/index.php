<?php
include_once 'db.php'; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width, initial-scale=1.0">
      <title>Document</title>
</head>
<body>
      <?php
      $sql="SELECT * FROM users";
      $result=mysqli_query($connect,$sql);
      $checkResult=mysqli_num_rows($result);
      if($checkResult>0){
            while($row=mysqli_fetch_assoc($result)){
                  echo $row['email']."<br>";
            }
      }  
      ?>
</body>
</html>