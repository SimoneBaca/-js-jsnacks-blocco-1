/*Snack 4(sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const authorizedPeople = ["harry", "tarry", "parry", "narry", "garry", "zarry", "marry", "barry", "larry"];
let authorized = false;

let userName = "";

do {
  userName = prompt("Please enter yout name: ");
} while (userName == "");

for (let i = 0; i < authorizedPeople.length; i++) {
  authorizedPeople[i] === userName ? authorized = true : false;
}

alert(`Hi ${userName}. ${authorized ? "U are in the list" : "U are not in the list"}`);

