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



