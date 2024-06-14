// VUE JS SCRIPT
// --------------------------------
const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "Partecipanti gita al mare di sabato",
            participantList: [],
            nome: "",
            cognome: ""
        }
    },

    methods: {
        addPartecipante(){
            const newPartecipante = {
                nome : this.nome,
                cognome : this.cognome
            }
            this.participantList.push(newPartecipante)
        }


    },


    //MOMENTI DI BASE
    mounted() {
        console.log("app montata");

        axios.get("../list.php").then((results) => {

            console.log("participantList :", results);
            this.participantList = results.data;
        }).catch((err) => {

        });;

    }
}).mount("#app")