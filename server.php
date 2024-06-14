<?php
 //Creo un array di partecipanti ==> spostato in dati.json
 $fileContent = file_get_contents("dati.json");

// trasformo l'array in un file json
header("Content-Type: application/json");

// stampo 
echo $fileContent;