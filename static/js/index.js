let slideIndex = 0;
const slides = document.getElementsByClassName("slider-box");

function showSlides(){
    for(let i=0;i<slides.length;i++){
        slides[i].computedStyleMap.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){slideIndex = 1;}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides,3000);
}

showSlides();

const container = document.getElementById('testSlide');
let scrollDirection = 1;

function autoScroll(){
    container.scrollLeft += scrollDirection;

    if(container.scrollLeft + container.clientWidth >= container.scrollWidth || container.scrollLeft <=0){
        scrollDirection *= -1;
    }
}

setInterval(autoScroll,20);