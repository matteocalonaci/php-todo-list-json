<?php
 
 //Creo un array di partecipanti
$participantList = [
    [
        "nome" => "Matteo",
        "cognome" => "Calonaci",
    ],
    [
        "nome" => "Niccolò",
        "cognome" => "Gherardi",
    ],
    [
        "nome" => "Leonardo",
        "cognome" => "De Feo",
    ],
    [
        "nome" => "Penelope",
        "cognome" => "Maurizio",
    ],
    [
        "nome" => "Kc",
        "cognome" => "Roduta",
    ],
];

// trasformo l'array in un file json
header("Content-Type: application/json");
// salvo i dati in una variabile
$jsonString = json_encode($participantList);
// stampo 
echo $jsonString;