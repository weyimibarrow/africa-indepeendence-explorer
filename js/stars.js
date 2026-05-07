document.addEventListener("DOMContentLoaded", function() {
const starfield = document.getElementById("starfield");
for (let i = 0; i < 200; i++){
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = Math.random() * 100 + "%";
    star.style.left= Math.random() * 100 + "%";
    star.style.width= Math.floor(Math.random() * 2 + 1) + "px";
    star.style.height = Math.floor(Math.random() * 2 + 1) + "px";
    starfield.appendChild(star);
}
});
