<?php
include("database.php");
$id = mysqli_real_escape_string($connection, $_POST["immatriculation"]);
$modele = mysqli_real_escape_string($connection, $_POST["modele"]);
$marque = mysqli_real_escape_string($connection, $_POST["marque"]);
$vitesse = mysqli_real_escape_string($connection, $_POST["vitesse"]);
$nationalite = mysqli_real_escape_string($connection, $_POST["nationalite"]);
$prix = mysqli_real_escape_string($connection, $_POST["prix"]);
$nombreStock = mysqli_real_escape_string($connection, $_POST["nombreDisponible"]);
$color = mysqli_real_escape_string($connection,implode(",", $_POST["couleur"]));

$modification = "UPDATE `voiture` SET `immatriculation`='$id',`modele`='$modele',`marque`='$marque',`vitesse`='$vitesse',`nationalite`='$nationalite',`prix`='$prix',`nombreStock`='$nombreStock',`color`='$color' WHERE immatriculation=$id";

if (mysqli_query($connection, $modification)) {
    echo 1 ; // Succès
} else {
    echo "Erreur lors de la modification : " . mysqli_error($connection);
}

?>

