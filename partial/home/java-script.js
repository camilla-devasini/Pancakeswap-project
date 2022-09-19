// SLIDER //

let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1, dot = 1);
}
function showSlides(slide, dot) {
    let i;
    let slides = document.getElementsByClassName("java-slide");
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
        timeout = setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
    else {
        window.clearTimeout(timeout);
        timeout = setTimeout(showSlides, 4000);
    }




    
}


 
//  function fadeInfunc() {
//     let el = document.getElementById('div-1');
//     el.style.opacity = 0;
//     let tick = function() {
//         el.style.opacity = el.style.opacity + 0.01;
//         if (el.style.opacity < 1) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
//         }
//     };
//     tick();
// }

// function fadeOutFunc() {
//     let el = document.getElementById('div-2');
//     el.style.opacity = 1; 
//     let tick = function() {
//         el.style.opacity = +el.style.opacity - 0.01;
//         if (el.style.opacity > 0) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
//       }
//     };
//     tick();
// }


// const el = document.querySelector('div-2');

// window.setInterval(()=> el.style.opacity + 0.1, 100);

// const fadeIn = window.setInterval(() => el.style.opacity !== 1 ? el.style.opacity + 0.1 : clearInterval(fadeIn), 100);


// // const fade = window.setInterval(() => el.style.opacity !== 1 ? el.style.opacity = el.style.opacity + 0.1 : clearInterval(fadeIn), 100);
// const fadeout = window.setInterval(() => el.style.opacity !== 1 ? el.style.opacity + 0.1 : window.clearInterval(fadeIn), 100);
    


// opacity !== 1 ? opacity + 0.1 : clearInterval(fadeIn);
// // opacity + 0.1
// if (opacity !==1) {
//     opacity + 0.1
// }
// else {
//     clearInterval(fadeIn);
// }