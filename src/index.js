import "./style.css";
import goblino from "./resources/imgs/goblino.png";
import crunchy from "./resources/imgs/crunchy.jpg";
import megamind from "./resources/imgs/megamind.png";

const images = [goblino, crunchy, megamind];
let slide = 0;

function deselectedAll() {
    document.getElementById("circle0").classList.remove("selected");
    document.getElementById("circle1").classList.remove("selected");
    document.getElementById("circle2").classList.remove("selected");
}

function changeSlide(button) {
    if (button === "right" || slide < 2) {
        carouselImage.src = images[slide + 1];
        slide++;
    }
    else if (button === "left" || slide > 0) {
        carouselImage.src = images[slide - 1];
        slide--;
    }

    switch (slide) {
        case 0:
            deselectedAll();
            document.getElementById("circle0").classList.toggle("selected");
            break;
        case 1:
            deselectedAll();
            document.getElementById("circle1").classList.toggle("selected");
            break;
        case 2:
            deselectedAll();
            document.getElementById("circle2").classList.toggle("selected");
            break;
        default:
            deselectedAll();
    }
}

const carouselImage = document.querySelector(".carousel-image img");
carouselImage.src = goblino;

const carouselLeft = document.getElementById("left");
const carouselRight = document.getElementById("right");

carouselRight.addEventListener("click", (target) => {
    changeSlide(target.target.id);
})

carouselLeft.addEventListener("click", (target) => {
    changeSlide(target.target.id);
})

setInterval(() => {
    changeSlide();
}, 5000);

document.getElementById("circle0").classList.toggle("selected");