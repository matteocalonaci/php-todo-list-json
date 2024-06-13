 - Creo un file readme.md un server.php e una cartella Api-Client con all'interno index.html/main.js/style.css.

- Nella pagina server.php creo un array di oggetti che poi traformo in string json.

- Testo il collegamento tra main.js e style.css con index.html => OK!

- Nella pagina main.js nel return creo un array vuoto, nel mounted tramite axios passo il file server.php e pusho il valore di della stringa json, results.data nell' array del return.

- Nella pagina index.html tramite un v-for stampo in pagina nome e cognome dell'array.