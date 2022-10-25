// const joursDeLaSemaine = [
//     "lundi",
//     "mardi",
//     "mercredi",
//     "jeudi",
//     "vendredi",
//     "samedi",
//     "dimanche"
// ];

// let listeHTML = '<ul>';
// for (let i= 0; i < joursDeLaSemaine.length; i++){
//     listeHTML += '<li>'+joursDeLaSemaine[i]+"</li>";
// }
// listeHTML += '</ul>';
// document.body.innerHTML += listeHTML;

// // variable mois tableau 

const MoisDeLAnnee = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Devembre",
];

let listeHTML2 = '<ul>';
for (let i= 0; i < MoisDeLAnnee.length; i++){
    listeHTML2 += '<li>'+MoisDeLAnnee[i]+"</li>";
}
listeHTML2 += '</ul>';
document.body.innerHTML += listeHTML2;


// boicle foEach
let listeMoisForEach = "<ul>";
MoisDeLAnnee.forEach(function (moisEnCours){
    listeMoisForEach += "<li>"+moisEnCours+ "</li>";
});
listeMoisForEach += "</ul>";

document.body.innerHTML += listeMoisForEach;



const listeCoures = [
    "formage",
    "lait",
    "confiture",
    "fruits",
    "legumes",
    "pain de mie",
    "café",
    "thon",
    "poulet",
];

let listeHtml3 = "<ul>"
for (let i=0; i < listeCoures.length; i++){
    listeHtml3+= "<li>"+ listeCoures[i]+ "</li>";
};
 listeHtml3+= "</ul>";

document.body.innerHTML += listeHtml3;

// Boucle while
const fruit = [`pomme`,`poire`,`cerise`,`banane`];
let listeFruit = `<ul>`;
let k = 0;
while (k < fruit.length) {
    listeFruit += `<li>` + fruit[k]+ `</li>`;
    k++;
}
 
listeFruit += `</ul>`;
document.body.innerHTML += listeFruit;


// Ma boucle while 
const listeAnimaux = [
    "chien",
    "serpent", 
    "scorpion", 
    "ane", 
   " renard",
];
// il faut bien distinguer la liste html du tableau
//  crée listeHtmlAnimaux et liste animaux
let listeHtmlAnimaux = "<ul>";
let j=0;
while (j < listeAnimaux.length){
    listeHtmlAnimaux += "<li>" + listeAnimaux[j] + "</li>";
    j++;
};

listeHtmlAnimaux += "</ul>";
document.body.innerHTML += listeHtmlAnimaux;

// Boucle ForEach stephane
function affichePrenom(){
    const prenom = [`axel`,`marc`,`julie`,`bernard`,`stéphane`];
    let listePrenom = `<ul>`;
    prenom.forEach(function (prenomencours) {
        listePrenom += `<li>` + prenomencours + `</li>`;
    })
    listePrenom += `</ul>`;
    document.body.innerHTML += listePrenom;
    // fonction anonyme : function(){}   -> ne porte pas de nom
    }
    affichePrenom()
    
    // boucle ForEach moi meme

    const lesExpressionDeSalutation = [
        "bonjour",
        "hello",
        "hi",
        "salut",
       " coucou",
        "afin",
        "salam",
    ];

    let listHtmlExpressionSaluation = "<ul>";

    lesExpressionDeSalutation.forEach(function(ElementEnCours){
        listHtmlExpressionSaluation += "<li>"+ElementEnCours+"</li>";
    });
    listHtmlExpressionSaluation += "</ul>";
    document.body.innerHTML += listHtmlExpressionSaluation;


let compteur= 0;

function affichedansXsecondes(){
  let time1=setTimeout(function(){
        console.log("hello"+ compteur);
        compteur++;
        affichedansXsecondes();

    },500);
};
// affichage infini
// affichedansXsecondes();

// let compteur2= 0;

// function affichedansXsecondes(){
//   let time1=setTimeout(function(){
//         console.log("hello"+ compteur2);
//         compteur2++;
//         affichedansXsecondes();

//         let y=0;
//         while (compteur2;compteur2++)

//     },500);
// };


// const changeDecouleurAuSurvol = document.querySelector("h1");

// changeDecouleurAuSurvol.addEventListener("mouseenter", function(){
//     changeDecouleurAuSurvol.style.backgroundColor= "red";
// } );

// changeDecouleurAuSurvol.addEventListener("mouseout", function(){
//     changeDecouleurAuSurvol.style.backgroundColor= "";
// } );


const changeDecouleurAuClic = document.querySelector("h1");
let isTitleClicked = false;
changeDecouleurAuClic.addEventListener("click", function(){
    if (isTitleClicked == false){
     changeDecouleurAuClic.style.backgroundColor= "red";   
     isTitleClicked = true;
    }
    else if (isTitleClicked == true){
        changeDecouleurAuClic.style.backgroundColor= ""; 
        isTitleClicked = false;
    }
} );


changeDecouleurAuSurvol.addEventListener("click", function(){
    changeDecouleurAuSurvol.style.backgroundColor= "";
} );
