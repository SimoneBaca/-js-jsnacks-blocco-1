/*Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.*/


/*let sum = 0;

for (let i = 1; i <= 10; i++) {
  const number = Number(prompt(`${i}) Insert a number`));
  isNaN(number) ? i-- : sum += number;
}
console.log(`The sum of the inserted numbers is ${sum}`);*/


let sumWhile = 0;
let j = 0;

while (j < 10) {
  let number = Number(prompt(`${j}) Insert a number`));
    sumWhile += number;
  j++;
}
console.log(sumWhile);