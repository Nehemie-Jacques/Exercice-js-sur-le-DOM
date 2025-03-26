// Exercice 1

let question1 = document.querySelectorAll("#liste");
for(let i = 0; i < question1.length; i++){
    question1[i].textContent = (i + 1) + ". " + "Hello word";
}

let body = document.querySelector("body");
let question2 = document.createElement("div");

for(let i = 0; i < 10; i++){
    let paragraphe = document.createElement("p");
    paragraphe.textContent = "Paragraphe" + (i + 1);
    question2.appendChild(paragraphe);    
}
body.prepend(question2);
console.log(body.innerHTML);

const question3 = document.getElementById("tableau");
const cellule = document.getElementsByTagName("td");
for(let i = 0; i < cellule.length; i++){
    cellule[i].style.backgroundColor = "green";
}
 
const question4 = document.getElementById("parent");
console.log(question4);
const listLi = question4.getElementsByTagName('li');
console.log(listLi);
for(let i = listLi.length - 1; i>=0; i--){
    if (i%2 === 0) {
        question4.removeChild(listLi[i]);
    }
} 

let question5 = document.createElement("ul");
let fruits = ["Pomme", "Banane", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li"); 
    li.textContent = fruits[i]; 
    question5.appendChild(li);
}

body.appendChild(question5);

// Exercise 2

const selectAllDiv = document.querySelectorAll("div");
for(let i = 0; i < selectAllDiv.length; i++){
    let para = document.createElement("p"); 
    para.textContent = "Enfant Ajouté";
    selectAllDiv[i].appendChild(para);
}

const suppEltul = document.getElementById("supp");
const liSupp = suppEltul.children; 
for(let i = liSupp.length - 1; i >= 0; i--){
    suppEltul.removeChild(liSupp[i]);
}

let span = document.querySelector("span");
while(span.parentElement && span.parentElement.tagName !== "HTML"){
    span = span.parentElement;
    console.log(span.tagName);
}

/* const eltRemplace = document.getElementById("substitution");
const remplaceElt = document.createElement("section");
remplaceElt.textContent = "Je suis le remplaçant";
eltRemplace.replaceWith(remplaceElt); */

const divImbrique = document.createElement("div");
const ulImbrique = document.createElement("ul");
divImbrique.appendChild(ulImbrique);
for(let i = 0; i < 3; i++){
    const liImbrique = document.createElement("li");
    liImbrique.textContent = "Beautiful";
    ulImbrique.appendChild(liImbrique);
    console.log(liImbrique);
}
body.appendChild(divImbrique);

// Exercise 3

const modifierNext = document.getElementById("modifier").nextElementSibling;
modifierNext.style.backgroundColor = "yellow";
const modifierPrevious = document.getElementById("modifier").previousElementSibling;
modifierPrevious.style.backgroundColor = "purple";

const listelement = document.getElementById("listelement");
console.log(listelement.firstElementChild.textContent);
console.log(listelement.lastElementChild.textContent);


const inverser = document.getElementById("inverser");   
const inverserli = inverser.children;
inverser.insertBefore(inverserli[1], inverserli[0]);

const suppsuivant = document.getElementById("suppsuivant");
suppsuivant.nextElementSibling.remove();const nextelt = cloner.nextElementSibling;


const cloner = document.getElementById("dupliquer");
const dupliquer = cloner.cloneNode(true);
cloner.nextElementSibling.remove();
console.log(dupliquer);

// const question3 = document.getElementById("tableau");
const newligne = document.createElement("tr");
question3.appendChild(newligne);
const contenu1 = document.createElement("td");
contenu1.textContent = "Ajout1";
newligne.appendChild(contenu1);
const contenu2 = document.createElement("td");
contenu2.textContent = "Ajout2";
newligne.appendChild(contenu2);
const contenu3 = document.createElement("td");
contenu3.textContent = "Ajout3";
newligne.appendChild(contenu3);
console.log(newligne)
console.log(contenu1);
console.log(contenu2);
console.log(contenu3);

const trouver = ["A", "B", "C"];

