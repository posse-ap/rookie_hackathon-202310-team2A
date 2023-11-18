"use strict";

const img = ['../img/tomopicture1.jpg','../img/tomopicture2.jpg', '../img/tomopicture3.jpg', '../img/tomopicture4.jpg', '../img/tomopicture5.jpg'];
let count = -1;
picChange();
function picChange() {
    count++;
    if (count == img.length) count = 0;
  //画像選択
    changePic.src = img[count];
  //秒数の指定
    setTimeout("picChange()", 4000);
};