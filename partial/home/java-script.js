// SLIDER //

let slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1, dot = 1);
}
function showSlides(slide, dot) {
    let i;
    let slides = document.getElementsByClassName("js-slide");
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

//DOTS LOTTERY


let lotteryButtons = document.querySelectorAll('.swiper-slide');
let lotteryDivs = document.querySelectorAll('.js-slide');


lotteryButtons[0].addEventListener('click', () => {
    
    lotteryDivs[0].style.display = 'none'; 
    lotteryDivs[1].style.display = 'block';
   
})

lotteryButtons[1].addEventListener('click', () => {
    
    lotteryDivs[1].style.display = 'none';
    lotteryDivs[0].style.display = 'block';
    
})


//TOP FARMS


let slideData = 0;
showSlidesData();

function currentSlideData(n) {
    showSlidesData(slideData = n - 1, dot = 1);
}
function showSlidesData(dot) {
    let i;
    let slides = document.getElementsByClassName("slides-data");
    let dots = document.getElementsByClassName("button-data");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideData++;
    if (slideData > slides.length) { slideData = 1 }
    for (i = 0; i < dots.length; i++) {
      
    }
    slides[slideData - 1].style.display = "block";
    
    if (dot != 1) {
        timeout = setTimeout(showSlidesData, 3000); 
    }
    else {
        window.clearTimeout(timeout);
        timeout = setTimeout(showSlidesData, 3000);
    }
  
}


  





let dots = document.querySelectorAll('.button-data');
let datas = document.querySelectorAll('.slides-data');

dots[0].addEventListener('click',() => {
    
        datas[0].style.display = 'none'; datas[1].style.display = 'block';
        })
        
dots[1].addEventListener('click',() => {datas[1].style.display = 'none'; datas[0].style.display = 'block';})



 
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


