const prompt = require('prompt-sync')()

/*
let nomVariable : creation de variable;
const nomConstante : creation de constante (variable dont la valeure ne peut pas changer)

// operateur : 

= : operateur d'affectation
+ : addition / concatenation de chaine de caractere
- : soustraction
/ : division 
* : multiplication
% : reste d'une division euclidienne

// operateur de comparaison 
== : egalité simple (ne prend pas en compte le type)
=== : egalité stricte (prend en compte le type)
!= : different de (ne prend pas en compte le type)
!== : strictement different de  (prend en compte le type)
< : inferieur a 
<= : inferieur ou agal
> : superieur a
>= supperieur ou egal

// type de variable
    number : 
        Integer : nombre entier
        Float : nombre decimal 
    String : chaine de caractere : exemple ("Bonjour a tous")
    Boolean : vrai / faux   

    Fonctions utiles : 
    console.log(valeur) : Afficher
*/

 //Exo 1 :

let Ndossart = prompt ("Entrez le numero de dossart")
let Tdossart = prompt ("Entrez son temps")
let max = 6
let NBcoureurs = 1

while (Ndossart != -1 && NBcoureurs < max){
    Ndossart = prompt ("Entrez le numero de dossart")
    Tdossart = prompt ("Entrez son temps")
    NBcoureurs = NBcoureurs + 1
}

//Exo 1 (correction)

// let dossard = 0
// let time = 0

// while (dossard > 0)
// dossard = Number (prompt("Entrez un numero de dossard"))
// while (isNaN(dossard && dossard) < 0){
// dossard = Number (prompt("Entrez un numero de dossard valide"))
//}
// if (dossard != -1){
// time = Number (prompt(Entrez son temps))
//}

 //Exo 2 :

let minutes = prompt ("Ecrire un temps en minutes")
let secondes = prompt ("Entrez un temps en secondes")

while (minutes != 0 || secondes != 0){
   if (secondes == 0){
       secondes = 59
       minutes = minutes - 1
      console.log (minutes, secondes)
}
   else {
       secondes = secondes -1
       console.log (minutes, secondes)

}
}

//Exo 2 (correction)

//let minutes = Number (prompt("Entrez les minutes"))
// while (isNaN (minutes) || minutes > 0){
// minutes = Number (prompt ("Entre des vraies minutes"))
//}
// let secondes = Number (prompt("Entrez les secondes"))
// while (isNaN (secondes) || minutes > 0){
// secondes = Number (prompt ("Entrez les vraies secondes"))
//}

//for (let i = minutes; i >= 0; i--){
// for (let j = secondes; i >= 0; j--){
// console.log (i + "min" + j +"sec")   
//}
// secondes = 59
//}

//Exo 3 :

let age = prompt ("Quel age a Paul ?")
let argent = 0
let i = 0

for (i = 1; i <= age ; i++) {
    argent = argent + 150 + 3*i   
}
console.log (argent)

//Exo 3 (correction)

// let compte = 0
// let age = Number (prompt ("Entrez son age"))
// while (isNaN (age) || age < 0)

//for (let i = 0; i < age; i++) {
// compte = compte + ((i + 1) * 3 + 150)
//}
// console.log (compte)

//Exo 4 :

let nbmax = 0
let positionmax = 0

for (let i = 0; i < 20; i++) {
     let nombre = prompt ("Entrez un nombre")
     if (nombre > nbmax){
         nbmax = nombre
         positionmax = i+1
     }    
}
console.log (nbmax)
console.log (positionmax)

//Exo 4 (correction)

//let nombre = 0
//let result = 0
//let position = 0

//for (let i = 0; i < 5; i++) {
//nombre = Number (prompt ("Entrez un nombre"))
//while (isNaN (nombre) || nombre < 0){
//nombre = NUmber (prompt ("Entre un nombre correct gentil monsieur"))
//}
//if (nombre > result)
//result = nombre
//position = i+1    
//}
//console.log (result)
//console.log (position)

//Exo 5 :

let taille
let nbpetits = 0

for (let i = 0; i < 6; i++) {
     let taille = prompt ("Entrez la taille en mètres")
     if (taille < 2.10){
         nbpetits = nbpetits+1
     }
}
 console.log (nbpetits)

//Exo 6 :

let nbvotants = prompt ("Combien de votants ?")
let O = 0
let N = 0
let B = 0

for (let i = 0; i == nbvotants ; i++) {
     let vote = prompt ("Votez O, N ou B")
     if (vote == "O"){
         O = O+1
     }
     else if (vote == "N"){
         N = N+1
     }
     else {
         B = B+1
     }   
}
console.log ("Pourcentage de votes O : ", O/nbvotants*100)
console.log ("Pourcentage de votes N : ", N/nbvotants*100)
console.log ("Pourcentage de votes B : ", B/nbvotants*100)

//Exo 6 (correction)

//let vote = ""
//let nbO = 0
//let nbN = 0
//let nbB = 0
//let nbvotants = 5

//for (let i = 0; i < nbvotants; i++){
//vote = prompt ("Vote b (blanc) vote o (oui) vote n (non)")
//while (vote != "b" && != "o" && vote !="n" )
//vote = ("Vote b (blanc) vote o (oui) vote n (non) et ne te trompe pas")
//if (vote == "b"){
//nbB++
//else if (vote == "o"){
//nbO++
//else {
//nbN++
//}
//}
//console.log ("Oui : " + (nbO / nbvotants) * 100 + "%")
//console.log ("Non : " + (nbN / nbvotants) * 100 + "%")
//console.log ("Blanc : " + (nbB / nbvotants) * 100 + "%")

//Exo 7 (correction)

//let nombre = Number(prompt("Entre un chiffre"))
//let isPrime = true;

//for (i = 2; i < nombre; i++){
//let is Prime = true;
//for (let j = 2; j < i; j++){
//if (i % j == 0){
//isPrime = false;
//break;
//}    
//}
//if (isPrime == true){
//console.log (i);
//}
//}

//Exo 8 :

let nbdepart = prompt ("Ecrire un nombre")
let nbfin = nbdepart + 6

while (nbdepart < nbfin){
     nbdepart = nbdepart +1
     console.log (nbdepart)
}

let nbdepart2 = prompt ("Ecrire un nombre")

for (let i = 0 ; i == 6 ; i++){
     console.log (nbdepart2 + i+1)
}

//Exo 9 :

let Parisv = 50
let Nantesv = 200
let Nbannees = 0

while (Parisv < Nantesv){
     Parisv = Parisv +100
     Nantesv = Nantesv*1.12
     Nbannees = Nbannees +1
}
console.log (Nbannees)

//Exo 10 :

let EntierN = prompt ("Tapez un nombre entier")
let produit = 1

for (let i = 1 ; i == EntierN+1 ; i++){
produit = produit *(i*2)*(i*2)
}
console.log (produit)