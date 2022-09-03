// SLIDER //

let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1, dot = 1);
}
function showSlides(slide, dot) {
    let i;
    let slides = document.getElementsByClassName("main-banner-container");
    let dots = document.getElementsByClassName("swiper");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        // dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    if (dot != 1) {
        timeout = setTimeout(showSlides, 10000); // Change image every 2 seconds
    }
    else {
        window.clearTimeout(timeout);
        timeout = setTimeout(showSlides, 10000);
    }

}


