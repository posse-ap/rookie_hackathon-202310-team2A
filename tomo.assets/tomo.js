"use strict";



const img = ['./tomo.assets/img/tomopicture1.jpg','./tomo.assets/img/tomopicture2.jpg', './tomo.assets/img/tomopicture3.jpg', './tomo.assets/img/tomopicture4.jpg', './tomo.assets/img/tomopicture5.jpg'];
let count = -1;
picChange();
function picChange() {
    count++;
    if (count == img.length) count = 0;
    document.getElementById("changePic").src = img[count];
    setTimeout("picChange()", 4000);
};


const header = document.getElementById("js-header");
const button = document.getElementById("js-headerButton");

button.addEventListener("click", () => {
  header.classList.toggle("is-open");
});

const selfcle = document.getElementById("self&cle")
button.addEventListener("click", () => {
  // hiddenElement.style.display = 'block';
});


