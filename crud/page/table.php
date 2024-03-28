<?php
include("database.php");
$affiche = "
    <table id='tableau'>
        <thead>
         <tr>
            <th>immatriculation</th>
            <th>Modele</th>
            <th>marque</th>
            <th>vitesse</th>
            <th>nationalite</th>
            <th>prix</th>
            <th>nombreDisponible</th>
            <th>couleur</th>
            <th>Action</th>
        </tr>
        </thead>";

$selection = "SELECT * FROM voiture";
$query_selection = mysqli_query($connection, $selection);

if(mysqli_num_rows($query_selection) > 0){
    while($ligne = mysqli_fetch_assoc($query_selection))
        $affiche .= "<tr>
                        <td >{$ligne['immatriculation']}</td>
                        <td>{$ligne['modele']}</td>
                        <td>{$ligne['marque']}</td>
                        <td class='nbrTable'>{$ligne['vitesse']}km/h</td>
                        <td>{$ligne['nationalite']}</td>
                        <td class='nbrTable'>{$ligne['prix']} Ar</td>
                        <td class='nbrTable'>{$ligne['nombreStock']}</td>
                        <td>{$ligne['color']}</td>
                        <td>
                            <button class='mod' data-id='{$ligne['immatriculation']}'>MODIFIFER</button>
                            <button class='sup' data-id='{$ligne['immatriculation']}'>SUPPRIMER</button>
                        </td>
                    </tr>";
}
$affiche .= "</table>";

 echo $affiche;
?>