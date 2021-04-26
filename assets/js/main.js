// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

var mail = prompt("Quale è la tua mail?");
var mailList = ["rossi@mail.com", "gialli@mail.com", "verdi@mail.com", "bianchi@mail.com", "blu@mail.com"];
var mLen = mailList.length;
var access = "Non puoi accedere";

for (var i = 0; i < mLen; i++){
    console.log(mailList[i]);
    if (mail == mailList[i]){
        access = "Puoi accedere";
    }
}

document.getElementById("pmail").innerHTML = mail;
document.getElementById("result").innerHTML = access;


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

var player = Math.floor(Math.random() * 6) + 1;
console.log(player);
document.getElementById("nplayer").innerHTML = player;
var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);
document.getElementById("ncomputer").innerHTML = computer;
var winner = "";

if (player > computer){
    winner = "Player is the winner";
} else if (computer > player){
    winner = "Computer is the winner";
} else {
    winner = "The result is a draw";
}

document.getElementById("result_2").innerHTML = winner;