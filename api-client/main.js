
// VUE JS SCRIPT
// --------------------------------
const { createApp } = Vue
createApp({
    data() {
        return {
 	titolo: "Partecipanti gita al mare di sabato",
    participantList: []
        }
    },

    methods: {


    },


    //MOMENTI DI BASE
    mounted() {
        console.log("app montata");

        axios.get("../server.php").then((results) => {

            console.log("participantList :", results);
            this.participantList = results.data;
        }).catch((err) => {
            
        });;

    }
}).mount("#app")
