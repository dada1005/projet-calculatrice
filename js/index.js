"use strict";
// récupérer tous les éléments HTML
let divNombre1 = document.getElementById("idNombre1");
let divSymbole = document.getElementById("idSymbole");
let divNombre2 = document.getElementById("idNombre2");
let divResultat = document.getElementById("idResultat");
let btnSup = document.getElementById("btnSup");
let btnZero = document.getElementById("btnZero");
let btnPercent = document.getElementById("btnPercent");
let btnDiv = document.getElementById("btnDiv");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnMul = document.getElementById("btnMul");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btnSous = document.getElementById("btnSous");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btnAdd = document.getElementById("btnAdd");
let btnPlus = document.getElementById("btnPlus");
let btn0 = document.getElementById("btn0");
let btnVirgule = document.getElementById("btnVirgule");
let btnEgal = document.getElementById("btnEgal");

//abonnement des boutons dans la div du nombre 1
btn7.addEventListener("click", function(){
    divNombre1.innerText += 7;
    console.log(7);
});

btn8.addEventListener("click", function(){
    divNombre1.innerText += 8;
    console.log(8);
});
btn9.addEventListener("click", function(){
    divNombre1.innerText += 9;
    console.log(9);
});
btn4.addEventListener("click", function(){
    divNombre1.innerText += 7;
    console.log(7);
});
btn5.addEventListener("click", function(){
    divNombre1.innerText += 5;
    console.log(5);
});
btn6.addEventListener("click", function(){
    divNombre1.innerText += 6;
    console.log(6);
});
btn1.addEventListener("click", function(){
    divNombre1.innerText += 1;
    console.log(1);
});
btn2.addEventListener("click", function(){
    divNombre1.innerText += 2;
    console.log(2);
});
btn3.addEventListener("click", function(){
    divNombre1.innerText += 3;
    console.log(3);
});
btn0.addEventListener("click", function(){
    divNombre1.innerText += 0;
    console.log(0);
});

// abonnement des boutons symboles dans la div symbole
btnZero.addEventListener("click", function(){
    divSymbole.innerText = "";
    divNombre1.innerText = "";
});
btnPercent.addEventListener("click", function(){
    divSymbole.innerText = "%";
});

btnDiv.addEventListener("click", function(){
    divSymbole.innerText = "/";
});
btnMul.addEventListener("click", function(){
    divSymbole.innerText = "X";
});
btnSous.addEventListener("click", function(){
    divSymbole.innerText = "-";
});
btnAdd.addEventListener("click", function(){
    divSymbole.innerText = "+";
});
btnEgal.addEventListener("click", function(){
    divSymbole.innerText = "=";
});


//abonnement des boutons de la div du nombre 2
































