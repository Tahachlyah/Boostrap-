const titreh1 = document.querySelector("h1");

// document.querySelector("h1").addEventListener("mouseenter",function(){
//     document.querySelector("h1").style.background = "yellow";
// });

// document.querySelector("h1").addEventListener("mouseout",function(){
//     document.querySelector("h1").style.background = "";
// });

// titre coloré au suvol 
// titreh1.addEventListener("mouseenter",function(){
//     titreh1.style.background = "yellow";
// });

// titreh1.addEventListener("mouseout",function(){
//    titreh1.style.background = "";
// });

let isCliked = false;

// titreh1.addEventListener("click",function(){
//     if (isCliked == false){
        
//      titreh1.style.background = "yellow"; 
//        isCliked = true;
//     } else if (isCliked == true) {
//      titreh1.style.background = "yellow"; 
//         titreh1.style.background ="";
//         isCliked = false;
//     }
    
// });

titreh1.addEventListener("click",function(){
    if (!isCliked){
        
     titreh1.style.background = "yellow"; 
       isCliked = true;
    } else {
     titreh1.style.background = "yellow"; 
        titreh1.style.background ="";
        isCliked = false;
    }
    
});



function showHideParagraph(){
    let isParaDisplayed = false;
    const linktoclick = document.querySelector(".see-more");
    const  defaultButtonText = document.querySelector(".see-more").textContent;
    linktoclick.addEventListener("click", function(event){
        event.preventDefault();
        if (isParaDisplayed == false){
          document.querySelector(".show-hide-para").style.display = "block"; 
          isParaDisplayed = true; 


        }
        else {
            this.textContent = defaultButtonText;
            document.querySelector(".show-hide-para").style.display ="none";
            isParaDisplayed = false;
            //  this.textContent = "voir plus";
        }
        
    }
    )
}
showHideParagraph();



// function showHideParagraph2(){
//     let isParaDisplayed2 = false;
//     const linkToclick2 = document.querySelector('.see-more2');
//     linkToclick2.addEventListener('click',function(event){
//     event.preventDefault();

//         if(isParaDisplayed2 == false) {
//     document.querySelector('.show-hide-para2').classList.add ("open");
//     isParaDisplayed2 = true;
    
//         } else {
//             document.querySelector('.show-hide-para2').classList.remove("open");
//             isParaDisplayed2 = false;
//         }
//     });
//     }
    
//     showHideParagraph2();
    
    
    

    function showHideParagraph2(){
        let isParaDisplayed2 = false;
        const linkToclick2 = document.querySelector(".see-more2");
        linkToclick2.addEventListener('click',function(event){
        event.preventDefault();
        if(isParaDisplayed2 == false) {
        document.querySelector('.show-hide-para2').classList.add ("open");
        isParaDisplayed2 = true ;
        
            } else {
                document.querySelector('.show-hide-para2').classList.remove("open");
                isParaDisplayed2 = false;
            }
        });
        }
        
        showHideParagraph2();
    

        // function changeImg(){
        //     const eltToclick = document.querySelector(".link-image");
        //     const orignalTexte = document.querySelector.innerText;
        //     const imgAchanger = document.querySelector(".image-to-change")
        //     const srcOriginal = imgAchanger.getAttribute("src");
        //     let isImgChanger = false; 
        //     eltToclick.addEventListener("click", function (event){
        //         event.preventDefault();

        //         document.querySelector(".imagechange").setAttribute("src", "item-01.png")
        //     })

        // }
        // changeImg();




        function changeImages () {
            const monLienDImage = document.querySelector(".image-link");
            const orinalText = monLienDImage.innerText;
            const monImage = document.querySelector(".image-to-change");
            const srcOriginal = monImage.getAttribute("src");
            let isImgChanged = false;
            monLienDImage.addEventListener("click",
            function (event) {
            event.preventDefault();
            if (isImgChanged == false){
            monImage.setAttribute("src", "item-00/item-01.png");
            monLienDImage.innerText = "Reviens à l'image d'origine";
            isImgChanged = true;
            } else {
            monImage.setAttribute("src", srcOriginal);
            monLienDImage.innerText = orinalText;
            isImgChanged = false;
            }
            
            1
                });
            }
            changeImages();
            
            


        // code william
        // function changePicture(){
        //     const linkToClik3=document.querySelector('.change-img');
        //     let imgNum=0;
        //     linkToClik3.addEventListener('click', (event)=>{
        //         event.preventDefault();
        //         if (imgNum==9){
        //             imgNum=0;
        //         }else{
        //             imgNum++;
        //         }
        //         let imgName='./item-00/item-0'+imgNum+'.png';
        
        //         document.querySelector('img').setAttribute('src', imgName);
        //     }
            
        //     )
        
        // }
        
