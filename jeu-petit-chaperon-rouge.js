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

let choice = prompt ("Le petit chaperon rouge va rendre visite a son grand-pere et arrive dans une foret. Deux chemins s'offrent a elle, le chemin rouge (a) ou le chemin bleu (b), lequel choira t-elle ?")

if (choice == "a"){
    console.log ("Elle rencontre le grand mechant loup")
    choice = prompt ("Quel arme choisira t-elle ? (a) pour l'epee ou (b) pour le marteau")
    while (choice == "a" && choice == "b"){ 
        choice = prompt ("Il faut choisir uniquement la reponse (a) ou (b)")
    }
    if (choice == "a"){
        console.log ("Le loup est foutu, elle peut poursuivre son chemin.")
    }
    else if (choice == "b"){
        console.log ("Le loup a les dents cassees, elle peut poursuivre son chemin.")    
    }

    choice = prompt ("Le petit chaperon rouge poursuit son chemin et arrive devant une riviere. Comment vas-elle traverser ? (c) elle prend le bateau ou (d) elle nage")
    while (choice == "c" && choice == "d"){
        choice = prompt ("Il faut choisir uniquement la reponse (c) ou (d)")
    }
    if (choice == "c"){
        console.log ("Le bateau coule a cause des pirates, elle doit continuer a la nage")
    }
    else if (choice == "d"){
        console.log ("Elle trouve une baleine pour l'aider a traverser")
    }
    
    choice = prompt ("Le petit chaperon rouge arrive tres bientot chez son grand-pere. Cette fois, elle doit escalader une montagne ou se trouve un dragon qui dort. (e) elle décide de le réveiller et de le combattre, (f) elle y va discretement sans le reveiller")
    while (choice == "e" && choice == "f"){
        choice = prompt ("Il faut choisir uniquement la reponse (e) ou (f)")
    }
    if (choice == "e"){
        console.log ("Elle bat le dragon avec sa super force et arrive chez son grand-pere. GAGNE !")
    }
    else if (choice == "f"){
        console.log ("Le dragon se reveille et lui crache du feu. Elle est foutue. PERDU !")
    }

}

else if (choice == "b"){
    console.log ("Elle rencontre une famille de 1000 hérissons")
    choice = prompt ("Comment va t-elle traverser le chemin ? (a) elle utilise un tapis volant (b) elle utilise une planche de surf")
    while (choice == "a" && choice == "b"){
        choice = prompt ("Il faut choisir uniquement la reponse (a) ou (b)")
    }
    if (choice == "a"){
        console.log ("Elle vole au dessus de la colonie d'herissons, elle peut poursuivre son chemin et arrive chez son grand-pere. (Il fallait prendre le chemin rouge !")
    }
    else if (choice == "b"){
        console.log ("La famille d'herissons meure, elle peut poursuivre son chemin et arrive chez son grand-pere. (Il fallait prendre le chemin rouge !)")
    }
}





