<?php 
include("database.php");
$id = mysqli_real_escape_string($connection, $_POST["immatriculation"]);
$delet ="DELETE FROM `voiture` WHERE immatriculation=$id";

if(mysqli_query($connection, $delet) == 1){
    echo 1;
}else{
    echo 0;
}
