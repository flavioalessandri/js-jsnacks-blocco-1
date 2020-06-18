//ESERCIZIO 1 .............................................
//Digitare 2 numeri utilizzando il Prompt; il Maggiore tra i due verrà visualizzato sotto</h1>

var num1 = prompt("Digita il primo num" , "Es.10");
var num2 = prompt("Digita il secondo num" , "Es.10");

// Prima di procedere controlla se si è digitato un numero (diverso da not a number)
if(!isNaN(num1) && !isNaN(num2)){
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (num1 > num2) {
    console.log(num1);
    document.getElementById("numMaggiore").innerHTML ="Il Primo numero digitato è il maggiore!" + " (" + num1 + ") ";
  } else if (num1 === num2){
    document.getElementById("numMaggiore").innerHTML =  "I numeri sono identici!";
  } else {
    console.log( num2);
    document.getElementById("numMaggiore").innerHTML = "Il Secondo numero digitato è il maggiore!" + " (" + num2 + ") " ;
  } ;

// Nel caso l'utente non abbia digitato nessun  numero
} else {
  document.getElementById("numMaggiore").innerHTML =  "Non si è digitato un numero";
};
