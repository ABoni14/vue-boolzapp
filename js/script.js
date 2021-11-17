const app = new Vue({
  el: "#app",

  data: {

    contacts: 
    [
      {
        name: "Michele",
        img: "img/avatar_1.jpg",
        visible: true,
        messages: 
        [
          {
            data: "10/01/2020 15:30:55",
            text: "Hai portato a spasso il cane?",
            stato: "inviato"
          },
          {
            data: "10/01/2020 15:50:00",
            text: "Ricordati di dargli da mangiare",
            stato: "inviato"
          },
          {
            data: "10/01/2020 16:15:22",
            text: "Tutto fatto!",
            stato: "ricevuto"
          },
        ] 
      },
      {
        name: "Fabio",
        img: "img/avatar_2.jpg",
        visible: true,
        messages: 
        [
          {
            data: "17/01/2020 17:30:35",
            text: "Oggi puoi uscire? Andiamo al cinema?",
            stato: "inviato"
          },
          {
            data: "17/01/2020 17:39:22",
            text: "Mi piacerebbe ma devo andare dal dottore!",
            stato: "ricevuto"
          },
        ] 
      },
      {
        name: "Samuele",
        img: "img/avatar_3.jpg",
        visible: true,
        messages: 
        [
          {
            data: "09/02/2020 11:30:55",
            text: "Ciao Samuele, l'ultima volta hai dimenticato da me gli occhiali",
            stato: "inviato"
          },
          {
            data: "09/02/2020 12:01:22",
            text: "Oh scusa! Mi sono proprio dimenticato, vengo oggi pomeriggio a prenderli, grazie!",
            stato: "ricevuto"
          },
        ] 
      },
      {
        name: "Luisa",
        img: "img/avatar_6.jpg",
        visible: true,
        messages: 
        [
          {
            data: "28/04/2020 21:56:55",
            text: "Grazie per la bella serata, buonanotte Luisa",
            stato: "inviato"
          },
          {
            data: "28/04/2020 22:15:09",
            text: "Grazie a te tesoro, notte",
            stato: "ricevuto"
          },
        ] 
      },
    ],

    counter: 0,
    newMsg: "",
  },

  methods: {
    newMessage(contact){
      let sendMessage = 
        {
          data: this.updateDate(),
          text: this.newMsg,
          stato: "inviato",
        }

      if(this.newMsg.trim() != ""){
        contact.messages.push(sendMessage);
        this.newMsg= "";
        setTimeout(() => {
        let messageContactAuto = 
        {
          data: this.updateDate(),
          text: "Ok",
          stato: "ricevuto",
        }
      contact.messages.push(messageContactAuto);
      }, 1000);
    }},

    updateDate(){
      let newData = new Date();
      let newDataMessage = 
      `
        ${newData.getDate()}/${newData.getMonth()}/${newData.getFullYear()}
        ${newData.getHours()}:${newData.getMinutes()}:${newData.getSeconds()}
      `;

      return newDataMessage;
    }
  }
})