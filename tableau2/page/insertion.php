<?php
include("connexion.php");

$nom = mysqli_real_escape_string($connection, $_POST["nom"]);
$ligne = mysqli_real_escape_string($connection, $_POST["ligne"]);
$colonne = mysqli_real_escape_string($connection, $_POST["colonne"]);
$colSpan = mysqli_real_escape_string($connection, $_POST["colSpan"]);
$rowSpan = mysqli_real_escape_string($connection, $_POST["rowSpan"]);
$tablecolonne = mysqli_real_escape_string($connection, $_POST["tablecolonne"]);
$tableligne = mysqli_real_escape_string($connection, $_POST["tableligne"]);

$insert = "INSERT INTO `tableau`( `tablecolonne`, `tableligne`,`colSpan`, `rowSpan`, `ligne`, `colonne`, `nom`) VALUES ('{$tablecolonne }','{$tableligne}','{$colSpan}','{$rowSpan}','{$ligne}','{$colonne}','{$nom}')";
if(mysqli_query($connection, $insert) == 1){
    echo "dans la vie ";
}else{
    echo 0;
}