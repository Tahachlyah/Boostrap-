// function showHideElementMenu(){
//     let bottonClicked = false;
//     const linkbotton = document.querySelector(".botton");
//     linkbotton.addEventListener("click", function(){
//         console.log("salut");

//         document.querySelector("listMenu").style.display = "none"

//         // if (bottonClicked == false){
//         //     document.querySelector("listMenu").style.display = "block"; 
//         //     bottonClicked = true;
//         // }
//         // else{
//         //     document.querySelector("listMenu").style.display = "none";
//         //     bottonClicked = false;
//         // }
//     }
//      )
// }

// showHideElementMenu();

function hamburger(){

    const defautlBurgerSrc = document.querySelector("body button img").getAttribute("src");
    const menu = document.querySelector()
    
    document.querySelector('body button').addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector( "body button img").setAttribute("src","hamburger-off.png");
        document.querySelector("body ul li").style.display = "block";
    }
    )

}

hamburger();