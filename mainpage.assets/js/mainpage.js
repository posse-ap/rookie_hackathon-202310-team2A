"use script"

$('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

//   function detectBrowser() {
//     var useragent = navigator.userAgent;
//     var mapdiv = document.getElementById("map");
  
//     if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
//       mapdiv.style.width = '100%';
//       mapdiv.style.height = '100%';
//     } else {
//       mapdiv.style.width = '600px';
//       mapdiv.style.height = '800px';
//     }
//   }

//   function initMap() {
//     var opts = {
//       zoom: 15,
//       center: new google.maps.LatLng(35.6807527,139.7670716)
//     };
//     var map = new google.maps.Map(document.getElementById("map"), opts);
//   }

var map = L.map('mapid').setView([35.688544, 139.764692], 18);