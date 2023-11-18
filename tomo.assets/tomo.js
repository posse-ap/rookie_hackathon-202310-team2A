"use strict";



const img = ['./tomo.assets/img/tomopicture1.jpg','./tomo.assets/img/tomopicture2.jpg', './tomo.assets/img/tomopicture3.jpg', './tomo.assets/img/tomopicture4.jpg', './tomo.assets/img/tomopicture5.jpg'];
let count = -1;
picChange();
function picChange() {
    count++;
    if (count == img.length) count = 0;
  //画像選択
   document.getElementById("changePic").src = img[count];
  //秒数の指定
    setTimeout("picChange()", 4000);
};