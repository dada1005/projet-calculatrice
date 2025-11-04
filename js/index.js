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

// je definie mes variable 
let affichage = divNombre1

//abonnement des boutons chiffres
btn7.addEventListener("click", function () {
    affichage.innerText += 7;
});

btn8.addEventListener("click", function () {
    affichage.innerText += 8;
});
btn9.addEventListener("click", function () {
    affichage.innerText += 9;
});
btn4.addEventListener("click", function () {
    affichage.innerText += 7;
});
btn5.addEventListener("click", function () {
    affichage.innerText += 5;
});
btn6.addEventListener("click", function () {
    affichage.innerText += 6;
});
btn1.addEventListener("click", function () {
    affichage.innerText += 1;
});
btn2.addEventListener("click", function () {
    affichage.innerText += 2;
});
btn3.addEventListener("click", function () {
    affichage.innerText += 3;
});
btn0.addEventListener("click", function () {
    affichage.innerText += 0;
});


// abonnement du bouton virgule
btnVirgule.addEventListener("click", function () {
    affichage.innerText += ".";
});
// abonnement du bouton supprimé
btnZero.addEventListener("click", function () {
    divSymbole.innerText = "";
    divNombre1.innerText = "";
    divNombre2.innerText = "";
    divResultat.innerText = "";
    affichage = divNombre1;
});


// abonnement des boutons operations
btnDiv.addEventListener("click", function () {
    divSymbole.innerText = "/";
    affichage = divNombre2;

});
btnMul.addEventListener("click", function () {
    divSymbole.innerText = "X";
    affichage = divNombre2;

   
});
btnSous.addEventListener("click", function () {
    divSymbole.innerText = "-";
    affichage = divNombre2;

    
});
btnAdd.addEventListener("click", function () {
    divSymbole.innerText = "+";
    affichage = divNombre2;

});


// abonnement du bouton égal

btnEgal.addEventListener("click", function () {

    let operation = divSymbole.innerHTML;
    switch (operation) {
        case "/":
            divResultat.innerText = Number(divNombre1.innerText) / Number(divNombre2.innerText);
            break;

        case "X":
            divResultat.innerText= Number(divNombre1.innerText) * Number(divNombre2.innerText);
            break;

        case "-":
            divResultat.innerText = Number(divNombre1.innerText) * Number(divNombre2.innerText);
            break;

        case "+":
            divResultat.innerText = Number(divNombre1.innerText) * Number(divNombre2.innerText);
            break;
    }
});






























