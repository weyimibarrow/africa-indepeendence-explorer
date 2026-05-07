import Globe from 'https://esm.sh/globe.gl';
document.addEventListener("DOMContentLoaded", function() {
const globeContainer = document.getElementById("globe");
const myGlobe = Globe()(globeContainer)
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .width(700)
    .height(700)
    .backgroundColor('rgba(0,0,0,0)')
});