

 alert("Ciao visitatore oggi ho imparato il javascript beccati questo alert!!");

 //FUNZIONE
 function myFunction(){

  // PRENDE IL NOME SCRITTO DAL FORM
    var nome = document.getElementById('nome').value ;

    console.log(nome);

  // PRENDE IL COGNOME SCRITTO DAL FORM

    var cognome = document.getElementById('cognome').value ;

    console.log(cognome);

  // PRENDE IL GIORNO IN CUI E' NATO SCRITTO DAL FORM

    var data = document.getElementById('data').value ;

    console.log(data);

  // PRENDE IL COLORE PREFERITO SCRITTO DAL FORM

    var colore = document.getElementById('colore').value ;

    console.log(colore);


    document.getElementById('informazioni').innerHTML = "Ecco la password che ho generato. " + nome + " - " + cognome + " - " + data + " - " + colore + " - " + 21;
}
