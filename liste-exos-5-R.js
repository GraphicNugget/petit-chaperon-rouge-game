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

//let numeroA = prompt ("Saisir le numero d'un arrivant")
//let TempsA = prompt ("Saisir son temps")

//while (numeroA != -1) { // j'avais ajouté le >= au lieu du !=)
//    let numeroA = prompt ("Saisir le numero d'un arrivant")
//    let numeroB = prompt ("Saisir son temps")   
//}
//console.log (numeroA)
//

//Exo 2 :

//let minutes = prompt ("Saisir les minutes")
//let secondes = prompt ("Saisir les secondes")

//for (let i = minutes ; i >= 0; i--) {
//    for (let j = secondes ; j >= 0 ; j--){
//    console.log (i,j)
//} 
//secondes = 59
//}

//Exo 3 :

// let anniv = prompt ("Quel age a Paul ?")
// let total = 0


// for (let i = 1; i <= anniv; i++) {
//     total = total + i*3+150  
//     console.log(total)  
// }

//Exo 4 :

//let nombresmax = 0
//let position = 0
//let nombre = 0

//for (let i = 0; i < 5; i++) {
//    nombre = prompt("Entrez 20 nombres")
//    if (nombre > nombresmax) {
//        nombresmax = nombre;
//        position = i
//    } 
//}
//console.log("le nombre maximum est : " + nombresmax + " la position est : " + (position + 1));



//Exo du prof

let rand = random (1,100)
console.log(rand)
let choice = prompt ("Entrez un chiffre entre 1 et 100, vous n'avez que 5 chances")
let nbchances = 0
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (rand != choice && nbchances <= 5){
    while (choice > 100 || choice < 0){
        choice = prompt ("Vous ne pouvez pas rentrer un nombre superieur a 100 et inferieur a 0")
    }

    if (choice < rand) {
    choice = prompt ("Entrez un nombre plus grand")
    nbchances++
        }
    else if (choice > rand){
    choice = prompt ("Entrez un nombre plus petit")
    nbchances++
    }
}












