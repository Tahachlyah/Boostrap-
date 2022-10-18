const imgCarroussel = [
    "image/item-00.png",
    "image/item-01.png",
    "image/item-02.png",
    "image/item-03.png",
    "image/item-04.png",
    "image/item-05.png",
    "image/item-06.png",
    "image/item-07.png",
    "image/item-08.png",
    "image/item-09.png",
]

function carousel(){
    // for(let i=0; i< imgCarroussel.length;i++){
    //     document.querySelector('#image-to-change').setAttribute
        
    // }
    let indice = 0;
    let carouselGo = setInterval(function(){
        if (indice > imgCarroussel.length - 1){
            indice = 0;
        }
        document.querySelector("#image-to-change").setAttribute("src",imgCarroussel[indice]);
        indice++;
    }, 500);
}
carousel();

// inserer un carrousel deja fait 
