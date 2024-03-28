<?php
include("database.php");

$immatriculation = mysqli_real_escape_string($connection, $_POST["immatriculation"]);
$modele = mysqli_real_escape_string($connection, $_POST["modele"]);
$marque = mysqli_real_escape_string($connection, $_POST["marque"]);
$vitesse = $_POST["vitesse"];
$nationalite = $_POST["nationalite"];
$prix = $_POST["prix"];
$nombreStock = $_POST["nombreDisponible"];
$color = implode(",", $_POST["couleur"]);

$insert = "INSERT INTO `voiture`(`immatriculation`, `modele`, `marque`, `vitesse`, `nationalite`, `prix`, `nombreStock`, `color`) VALUES ('{$immatriculation}','{$modele}','$marque','$vitesse','$nationalite','$prix','$nombreStock','$color')";
if(mysqli_query($connection, $insert) == 1){
    echo 1;
}else{
    echo 0;
}
?>