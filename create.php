<?php


    // leggo il file dati.json
    $fileContent = file_get_contents("dati.json");
    // converto il file in array associativo
    $participantList = json_decode($fileContent, true);
    // nuovo partecipante
    $newPartecipante = [
        "nome" => $_POST["nome"],
        "cognome" => $_POST["cognome"],
    ];
    // pusho il nuovo partecipante all'array
    $participantList[] = $newPartecipante;

    //converto in stringa json
    $participantListJson = json_encode($participantList);

    //scrivo il json su disco
    file_put_contents("dati.json", $participantListJson);

    header("Content-Type: application/json");

    // stampo 
    echo $participantListJson;

