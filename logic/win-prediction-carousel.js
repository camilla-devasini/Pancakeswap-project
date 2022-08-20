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





