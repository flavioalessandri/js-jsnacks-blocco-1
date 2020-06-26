
// ESERCIZIO 6 .............................................


var btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener ("click" , function(){
  document.getElementById("result").innerHTML="";

  var num = parseInt(document.getElementById("num").value);

  if(num != 0){

    for (var i =1; i < num + 1; i++){
      document.getElementById("result").innerHTML+="<li>"+(i**3)+"</li>";
    }

  }else{
    document.getElementById("result").innerHTML="<li>" + "Non è un numero" +"</li>";
  }

});
