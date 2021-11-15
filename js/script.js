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
            data: "10/01/2020 17:30:35",
            text: "Oggi puoi uscire? Andiamo al cinema?",
            stato: "inviato"
          },
          {
            data: "10/01/2020 17:39:22",
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
            data: "10/01/2020 11:30:55",
            text: "Ciao Samuele, l'ultima volta hai dimenticato da me gli occhiali",
            stato: "inviato"
          },
          {
            data: "10/01/2020 12:01:22",
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
            data: "10/01/2020 21:56:55",
            text: "Oggi puoi uscire? Andiamo al cinema?",
            stato: "inviato"
          },
          {
            data: "10/01/2020 22:15:09",
            text: "Mi piacerebbe ma devo andare dal dottore!",
            stato: "ricevuto"
          },
        ] 
      },
    ],

    counter: 0,

  }
})