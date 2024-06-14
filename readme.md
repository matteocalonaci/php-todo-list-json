 - Creo un file readme.md un server.php e una cartella Api-Client con all'interno index.html/main.js/style.css.

- Nella pagina server.php creo un array di oggetti che poi traformo in string json.

- Testo il collegamento tra main.js e style.css con index.html => OK!

- Nella pagina main.js nel return creo un array vuoto, nel mounted tramite axios passo il file server.php e pusho il valore di della stringa json, results.data nell' array del return.

- Nella pagina index.html tramite un v-for stampo in pagina nome e cognome dell'array.

- Nella pagina index.html aggiungo 2 input e un button per aggiungere partecipante grazie alla funzione addPartecipante aggiunta nel main.js

- Creato un new file dati.json dove ho spostato l'array da server.php e convertendo la sintassi da php a json .

- M1 day 2 completata cambiato nome server.php => list.php add chiamata axios.

- M2 nella pagina create.php creo eseguo una serie di passaggi:
    - leggo il file dati.json.
    - converto il file json in php con => json_decode().
    - creo una variabile newPartecipante e prendo i dati dalle proprietà di newPartecipante in main.js.
    - pusho il partecipante nell'array participantList
    - converto nuovamente il file da php a json con => json_encode().
    - scrivo il file su json.
    - stampo.
 Al click sul button applico la funzione addPartecipante che effettua una chiamata axios a create.php che a sua volta comunica con json.