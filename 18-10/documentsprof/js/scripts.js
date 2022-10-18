// const monH1 = document.querySelector("h1");
// monH1.addEventListener("mouseenter", function () {
//   monH1.style.backgroundColor = "yellow";
// });
// monH1.addEventListener("mouseout", function () {
//   monH1.style.backgroundColor = "";
// });

// // je stocke dans une variable mon sélecteur
// const monH1 = document.querySelector("h1");
// // je définis une variable qui va m'indiquer si il y a un e couleur de fond ou pas. Je lui donne la valeur "false" pare que au début il n'y a pas de couleur de fond
// let isColouredBackground = false;
// // Je lance mon gestionnaire d'événement qui va écouter le click sur le H1
// monH1.addEventListener("click", function () {
//   // si il n'y a pas  de couleur de fond
//   if (isColouredBackground == false) {
//     // alors je mets une couelur de fond sur le H1
//     monH1.style.backgroundColor = "yellow";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à true
//     isColouredBackground = true;
//     // je teste la condition où il y a une couleur de fond
//   } else if (isColouredBackground == true) {
//     // j'enlève la couleur de fond
//     monH1.style.backgroundColor = "";
//     // je fais basculer la valeur de ma variable d'indication de couleur de fond à false puisque je viens d'enlever la couelur de fond
//     isColouredBackground = false;
//   }
// });
function giveColouredBackground() {
  const monH1 = document.querySelector("h1");
  let isColouredBackground = false;
  monH1.addEventListener("click", function () {
    if (!isColouredBackground) {
      this.style.backgroundColor = "yellow";
      isColouredBackground = true;
    } else {
      this.style.backgroundColor = "";
      isColouredBackground = false;
    }
  });
}
giveColouredBackground();

function showHideParagraph() {
  let isParaDisplayed = false;
  const linkToClick = document.querySelector(".see-more");
  //   const defaultButtonText = document.querySelector(".see-more").textContent;
  const defaultButtonText = linkToClick.innerText;
  const paragraph = document.querySelector(".show-hide-para");
  linkToClick.addEventListener("click", function (event) {
    event.preventDefault();
    if (isParaDisplayed == false) {
      paragraph.style.display = "block";
      this.textContent = "Cacher";
      isParaDisplayed = true;
    } else {
      paragraph.style.display = "none";
      this.textContent = defaultButtonText;
      isParaDisplayed = false;
    }
  });
}
showHideParagraph();

function showHideParagraph2() {
  const linkToClick2 = document.querySelector(".see-more2");
  linkToClick2.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".show-hide-para2").classList.toggle("open");
  });
}
showHideParagraph2();

function changeImg() {
  const eltToClick = document.querySelector(".image-link");
  const originalTexte = eltToClick.innerText;
  const imgAChanger = document.querySelector(".image-to-change");
  const srcOriginal = imgAChanger.getAttribute("src");
  let isImgChanged = false;
  eltToClick.addEventListener("click", function (event) {
    event.preventDefault();
    if (isImgChanged == false) {
      imgAChanger.setAttribute("src", "img/item-01.png");
      eltToClick.innerText = "Reviens à l'image originale";
      isImgChanged = true;
    } else {
      imgAChanger.setAttribute("src", srcOriginal);
      eltToClick.innerText = originalTexte;
      isImgChanged = false;
    }
  });
}
changeImg();

function hamburger() {
  const defaultBurgerSrc = document
    .querySelector("header button img")
    .getAttribute("src");
  const menu = document.querySelector("header nav ul");
  let isMenuOpen = false;
  document
    .querySelector("header button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      if (isMenuOpen == false) {
        document
          .querySelector("header button img")
          .setAttribute("src", "img/hamburger-on.png");
        // menu.style.display = "block";
        isMenuOpen = true;
      } else {
        document
          .querySelector("header button img")
          .setAttribute("src", defaultBurgerSrc);
        menu.style.display = "none";
        isMenuOpen = false;
      }
    });
}
hamburger();

function hamburgerVersion2() {
  const defaultBurgerSrc = document
    .querySelector("#version2 button img")
    .getAttribute("src");
  const menu = document.querySelector("header nav#version2 ul");
  let isMenuOpen = false;
  document
    .querySelector("#version2 button")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("header nav#version2 ul").classList.toggle("open");
      if (isMenuOpen == false) {
        document
          .querySelector("#version2 button img")
          .setAttribute("src", "img/hamburger-on.png");
        isMenuOpen = true;
      } else {
        document
          .querySelector("#version2 button img")
          .setAttribute("src", defaultBurgerSrc);
        isMenuOpen = false;
      }
    });
}
hamburgerVersion2();

// DRY : Don't Repeat Yourself
