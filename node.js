const prompt = require('prompt-sync')()

/*

Liste exos - 1

Exo 1 :

let nmbr = prompt("Entre un nombre :")
if (nmbr > 0) {
    console.log("positif"); 
}else if(nmbr < 0){
    console.log("negatif");
}else{
    console.log("egal a 0");    
}

Exo 2 :

let mdp = prompt("Entrez votre mot de passe")
if (mdp = "12345"){
    console.log("Acces autorise");
}else{
    console.log ("Acces refuse");
    }

Exo 3 :

let nmbrUn = prompt ("Entrez un nombre")
let nmbrDeux = prompt ("Entrez un deuxieme nombre")
let nmbrTrois = prompt ("Entrez un troisieme nombre")

if (nmbrUn > nmbrDeux && nmbrUn > nmbrTrois)
 {
    console.log(nmbrUn);
}

else if(nmbrDeux > nmbrTrois && nmbrDeux > nmbrUn )
{
    console.log (nmbrDeux);
}

else{
    console.log (nmbrTrois);
}

Exo 4 :

let jour = prompt ("Entrez un nombre entre 1 et 7")

if(jour == 1){
    console.log ("lundi");
}
else if
( jour == 2 ){
    console.log ("mardi");
}
else if
(jour == 3){
    console.log ("mercredi");
}
else if
(jour == 4){
    console.log ("jeudi")
}
else if
(jour == 5){
    console.log ("vendredi")
}
else if
(jour == 6){
    console.log ("samedi")
}
else if
(jour == 7){
    console.log ("dimanche")
}

else {
    console.log ("Nombre invalide")

}
 */



/*Liste exos - 2 */

/*Exo 1 :*/


// let valeur1 = prompt ("Ecrivez une valeur")
// let valeur2 = prompt ("Ecrivez une valeur")

// if (valeur1 > valeur2){
//     console.log (valeur2);
// }
// else if(valeur2 > valeur1){
//     console.log(valeur1);
// }

/*Exo 2 :*/


// let nombreA = prompt ("Entrez un nombre")
// let nombreB = prompt ("Entrez un nombre")

// if (nombreA * nombreB > 0){
//     console.log("produit positif");
// }

// else if (nombreA * nombreB < 0){
//     console.log("produit negatif");
// }

/*Exo 3 */


// let temperature = prompt ("temperature")
// if (tempretaure > 100){
//     console.log("vapeur");
// }
// else if (temperature < 0){
//     console.log ("solide");
// }
// else { 
//     console.log ("liquide");
// }

/*Exo 4 */


// let nbcadres = prompt ("Nombres de cadres voulu")
// if (nbcadres < 10){
//     console.log (nbcadres * 20);
// }
// else if (nbcadres < 30){
//     console.log (10 * 20 + (nbcadres - 10) * 15);
// }
// else {
//     console.log (10 * 20 + 20 * 15 + (nbcadres - 30) * 5);
// }

/*Exo 5 */


// let impots1 = prompt ("Etes-vous un homme ou une femme ?")
// let impots2 = prompt ("Quel age avez-vous ?")

// if (impots1 == "homme" &&  impots2 > 20){
//     console.log ("Imposable");
// }

// if (impots1 == "femme" && impots2 > 18 && impots2 < 35){
//     console.log ("Imposable");
// }

// else {
//     console.log ("Pas imposable");
// }
/*



/*Exo pile ou face */

// let test = random (1,2)
// console.log (test);

// function random(){
//     return Math.floor(Math.random(1, 2) * ("pile" - "face" + 1)) + 1;
// }



/*Liste exos - 3 */

/*Exo 1 */

// let chiffre = prompt ("Entrez un chiffre")
// if (chiffre % 2){
//     console.log ("Pair");
// }
// else {
//     console.log ("Impaire");
// }

/*Exo 2 */

// let humeur = prompt ("Quel est votre couleur de t-shirt ?")
// if (humeur == "rouge"){
//     console.log ("colere");
// }
// else if (humeur == "bleu"){
//     console.log ("calme");
// }
// else if (humeur == "gris"){
//     console.log ("l'algo ca fait chier");
// }
// else if (humeur == "vert"){
//     console.log ("pas d'internet ce'st relou");
// }
// else { console.log ("Vous n'avez pas d'humeur ?");

// }

/*Exo 3 */

// let meteo = prompt ("Quel temps fait-il chez vous ?")
// if (meteo == "froid"){
//     console.log ("manteau");
// }
// else if (meteo == "chaud"){
//     console.log ("t-shirt");
// }
// else if (meteo == "pluie"){
//     console.log ("siret");
// }
// else if (meteo == "neige"){
//     console.log ("doudoune");
// }
// else if (meteo == "vent"){
//     console.log ("echarpe");
// }
// else {
//     console.log ("Ajoutez un temps");
// }

/*Exo 4 */

// let question = prompt ("Quel est la capital du Japon ?")
// if (question == "Tokyo"){
//     console.log ("Vrai");
// }
// else {
//     console.log ("Faux");
// }

// question = prompt ("Marseille est situé dans quel departement ?")
// if (question == "13"){
//     console.log ("Vrai");
// }
// else {
//     console.log ("Faux");
// }

// question = prompt ("De quel couleur ets un brocolis ?")
// if (question== "Vert"){
//     console.log ("Vrai");
// }
// else {
//     console.log ("Faux");
// }


// 

/*Liste exos - 4 */

/*Exo 1 */

// for (let i = 1 ; i <= 10 ; i++){
//     console.log (i)

// }

//
/* Exo 2 */
// let somme = 0
// for (let i = 1  ; i <= 100 ; i ++){
//   somme = somme + i   
// }
// console.log(somme);
/*

/*Exo 3 */

// let nombre = prompt ("Entrez un nombre")

//for (let i = 1; i <= 10; i++){
//    console.log(nombre * i)
//}

/*Exo 4 */

let pyramide = 1

for (let i = 1; i == 5 ; i++){
    console.log (pyramide)
}



/*Exemple 1 avec les boucles */

// constprompt = require ('prompt-sync')()

// let coins = prompt ("pile ou face")

// while(coins != pile && coins != "face"){
//     console.log ("tu t'es gouré");
//     coins = prompt ("pile ou face")
// }

/*Exemple 2 avec les boucles */

// let index = 0

// while (index <= 10){
//     console.log (index);
//     index = index + 1
// }

/*De mannière plus simplifié*/

// for (let i = 0; i <= 20; i++){
//     console.log (i);
// }


/*Liste exos - 5 */

/*Exo 1 (la mienne) (sans le temps dans la consigne)*/

// let ordrearrivees = 0

// while (ordrearrivees == -1){
//     ordrearrivees = prompt ("Numero de dossart")

// }

/*Exo 1 (correction)*/


// let dossart = Number(prompt ("Entre un numero de dossart !"))

// while (dossart != -1){
//     dossart = Number (pompt ("Cool ! le numero" + dossart + "est arrivee ! Quel est le prochain arrivant ?"))
// }





















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

  Fonctions utiles : 
    console.log(valeur) : Afficher
*/

// console.log(resulat)













