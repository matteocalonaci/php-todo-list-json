// VUE JS SCRIPT
// --------------------------------
const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "Partecipanti gita al mare di sabato",
            participantList: [],
            nome: "",
            cognome: "",

            // Dati per richieste
            apiUrl: "../list.php",
            postRequestConfig: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        }
    },

    methods: {
        getListaPartecipanti() {
            axios.get(this.apiUrl).then((results) => {
                this.participantList = results.data;
            });
        },

        addPartecipante() {
            const newPartecipante = {
                nome: this.nome,
                cognome: this.cognome
            }
            // this.participantList.push(newPartecipante)


            axios.post("../create.php", newPartecipante, this.postRequestConfig).then((results) => {

                this.participantList = results.data;
            });
        }


    },


    //MOMENTI DI BASE
    mounted() {
        console.log("app montata");
        this.getListaPartecipanti();
    }
}).mount("#app")