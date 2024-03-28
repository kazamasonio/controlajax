<?php 
if ($_SERVER["REQUEST_METHOD"]==="POST"){
    if(isset($_POST["immatriculation"])){
           include('database.php');

        $id =$_POST["immatriculation"];
        $select = "SELECT * FROM `voiture` WHERE immatriculation =$id";
        
        $query_selection = mysqli_query($connection, $select);  
        $tab = mysqli_fetch_assoc($query_selection);
        echo json_encode($tab); // Retourner les données en format JSON
}}?>