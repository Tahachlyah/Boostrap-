// let compteur = 0;
// function afficherDansXSecondes() {
//     let time1= setTimeout(function()
//         {
//             console.log('hello'+ compteur);
//             let nexDiv = document.createElement('div');
//             document.querySelector('body').append(newDive)

//             if (compteur == 10){
//                 time1 = clearTimeout(); }
//             else{
//                 compteur++;
//             afficherDansXSecondes();}

//         },1000);
//     }

// afficherDansXSecondes();

// let compteur = 0;
// function affichedansXSecondes(){
// let time1 = setTimeout (
// function(){
// console.log('hello' + compteur);
//         let newDiv = document.createElement('div')
//         document.querySelector('body').append(newDiv);

//         if(compteur == 9){
//             time1= clearTimeout();

//         } else {
//         compteur++;
//         affichedansXSecondes(); 
//     }
//     }, 1000);
// }
// affichedansXSecondes()

let compteur2 = 0;
function afficherAvecSetInterval(){
    let time2 = setInterval(function() {
        let newDiv = document.createElement("div");
        document.querySelector("body").append(newDiv);
        if (compteur2 == 9){
            console.log("allo"+ compteur2);
        clearInterval(time2);
        } else {compteur2++}
},500);
}

afficherAvecSetInterval();
