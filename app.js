var nombre = prompt ("Ingrese su Nombre");
var nombreHtml = document.getElementById('nombreHtml');
nombreHtml.innerHTML = nombre; 


var saludo = prompt ("Buenos días " + nombre + "\n ¿Desea jugar? \n 1. SI \n 2. NO" ).toLowerCase();

if (saludo == '2' || saludo == 'no') {
  alert("Que pena, deseamos volverte a ver pronto");
   }
else if (saludo == '1' || saludo == 'si') {
}
else {  
   alert("Opción Invalida");
 }


function contarAciertos()  {
var respCorrecto = 0;
var respIncorrecto = 0;
var preg1= parseInt(document.getElementById("txtSuma").value);
var preg2= parseInt(document.getElementById("txtMulti").value);
var preg3= parseInt(document.getElementById("txtDivision").value);

 if (preg1=='4') {
    respCorrecto++;    }
    else {
    respIncorrecto++;  }  
  
  
  if (preg2=='25') {
    respCorrecto++;    }
    else {
    respIncorrecto++;  } 
  
  
  if (preg3=='5') {
    respCorrecto++;    }
    else {
    respIncorrecto++;  } 
  
  
  var correctoHtml = document.getElementById('correctoHtml');
      correctoHtml.innerHTML = respCorrecto;
  
  var incorrectoHtml = document.getElementById('incorrectoHtml');
      incorrectoHtml.innerHTML = respIncorrecto; 
}