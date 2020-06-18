
// ESERCIZIO 5 .............................................


var btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener ("click" , function(){

  var num1 = document.getElementById("num1").value;
  console.log(num1);
  var num2 = document.getElementById("num2").value;
  console.log(num2);
  var simbol = document.getElementById("simbol").value;


  if(!simbol) {
    document.getElementById("risultato").innerHTML= "Nessun Risultato";

  } else if(simbol == "Dividi") {
    var risultato = num1 / num2;
    console.log(risultato);
    document.getElementById("risultato").innerHTML= risultato;

  } else if(simbol == "Moltiplica"){
    var risultato = num1 * num2;
    console.log(risultato);
        document.getElementById("risultato").innerHTML= risultato;

  } else if(simbol == "Somma"){
    var risultato = Math.round(num1 + num2);


      var risultato =  parseFloat(num1) +  parseFloat(num2);
      console.log(risultato);
          document.getElementById("risultato").innerHTML= risultato;

  } else{
        var risultato = num1 - num2;
        console.log(risultato);
            document.getElementById("risultato").innerHTML= risultato;
      }
});
