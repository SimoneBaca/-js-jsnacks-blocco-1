/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

const firstWord =  prompt("Insert the first word");
const secondWord = prompt("Insert the second word");

if (firstWord.length == 0 || secondWord.length == 0) {
  alert("You should insert two words of, at least, one character each");
} else {
  if (firstWord.length == secondWord.length) {
    console.log("The two words have the same length");
  } else if (firstWord.length > secondWord.length) {
    console.log(`The first word "${firstWord}" is longer than the second "${secondWord}" so the right order is: ${secondWord}, ${firstWord}`)
  } else {
    console.log(`The second word "${secondWord}" is longer than the first "${firstWord}" so the right order is: ${firstWord}, ${secondWord}`)
  }
}
