// # Palindroma

// chiedo all'utente una parola

function palindrome(newWord) {
  let parola = "";
  for (let i = newWord.length - 1; i >= 0; i--) {
    parola = parola + newWord[i];
  }
  if (newWord == parola) {
    return true;
  } else {
    return false;
  }
}

const word = prompt("Digita una parola palindroma");

const result = palindrome(word);

if (result == true) {
  alert("La parola è polindroma");
} else {
  alert("La parola non è polindroma");
}
// // # Pari e Dispari

// // chiedo all'utente di scegliere pari o dispari
// const evenOrOdd = prompt("Scegli pari o dispari");
// console.log(evenOrOdd);

// // chiedo all'utente un numero da 1 a 5
// let number = parseInt(prompt("Scegli un numero da 1 a 5"));
// console.log(number);

// //creo una funzione per generare un numero random da 1 a 5 per il pc
// function getNumberRandom(min, max, lstIncluded = true) {
//   if (lstIncluded) max++;
//   const numberRandom = Math.floor(Math.random() * (max - min) + min);
//   return numberRandom;
// }

// const generatedNumber = getNumberRandom(1, 5);
// console.log(generatedNumber);

// // sommo i due numeri
// const resultSum = number + generatedNumber;
// console.log(resultSum);

// // creo una funzione per stabilire se la somma è pari o dispari
// function evenOdd(num) {
//   let isEvenOrOdd;
//   if (num % 2 == 0) {
//     isEvenOrOdd = "pari";
//   } else isEvenOrOdd = "dispari";
//   return isEvenOrOdd;
// }

// // dichiaro il vincitore
// if (evenOrOdd == evenOdd(resultSum)) {
//   alert("Hai vinto");
// } else {
//   alert("Hai perso");
// }
