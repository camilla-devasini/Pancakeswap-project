const productContainers = [...document.querySelectorAll('.prediction-cards-carousel')];
const nxtBtn = [...document.querySelectorAll('.prediction-next-btn')];
const preBtn = [...document.querySelectorAll('.prediction-pre-btn')];


//getBoundingClientRect() 
//returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height - 
// relative to the viewport, taking into account the scrolling already done.

// The .scrollLeft property sets or returns
// the number of pixels an element's content is scrolled horizontally.

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const countdownElement = document.getElementById("time-counter");
const startingMinutes = document.getElementById("time-counter").innerHTML;
let timeInSeconds = startingMinutes * 60; //300 seconds


setInterval(countDown,1000);

function countDown() {
    let minutes = Math.floor(timeInSeconds / 60); // 5 minutes
    let seconds = timeInSeconds % 60; // 300 seconds / 60 = 5

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownElement.innerHTML = `${minutes}:${seconds}`;
    timeInSeconds--;
    timeInSeconds = timeInSeconds < 0 ? 0 : timeInSeconds;
    
    if (timeInSeconds == 0) {
        timeInSeconds = startingMinutes * 60; // reset counter
    }
   
}

setInterval(countDown,1000);
