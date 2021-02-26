//CHIEDO IL NOME ALL'UTENTE
var nome = prompt("Qual'è il tuo nome?" ,"scrivi il tuo nome");

console.log(nome);

//CHIEDO IL COGNOME ALL'UTENTE
var cognome = prompt("Qual'è il tuo cognome?" ,"scrivi il tuo cognome");

console.log(cognome);

//CHIEDO IL COLORE PREFERITO ALL'UTENTE
var colore = prompt("Qual'è il tuo colore preferito?" ,"scrivi il tuo colore preferito");

console.log(colore);

//STAMPO TUTTE LE INFORMAZIONI RICEVUTE DALL'UTENTE NEL DOM
document.getElementById('informazioni').innerHTML = nome + " " + cognome + " " + colore + " " + 21;
