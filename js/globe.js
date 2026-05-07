import Globe from 'https://esm.sh/globe.gl';
document.addEventListener("DOMContentLoaded", function() {
const globeContainer = document.getElementById("globe");
const myGlobe = Globe()(globeContainer)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .width(700)
    .height(700)
    .backgroundColor('rgba(0,0,0,0)')
    setTimeout(function() {
        console.log(myGlobe.controls()); // this was to check the console log for the rotation controls, debugging purposes. 
         myGlobe.controls().autoRotate = true;
        myGlobe.controls().autoRotateSpeed = 0.8;
    }, 1000);
});