function updateCount() {
    const counters = document.querySelectorAll('.cake-value');
    for(let i = 0; i<counters.length; i++){
        const target = + counters[i].getAttribute('myvalue');
        const count = + counters[i].innerText;
        const speed = 4000;
        const inc = target / speed; 
        if(count < target) {
            counters[i].innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
        insertThousandCommas(target);
        }
    }
}

function insertThousandCommas(target) {
    const counters = document.querySelectorAll('.cake-value');
    for (let i = 0; i < counters.length; i++){
        const target = + counters[i].getAttribute('myvalue');
        let commas = target / 1000;
        let result = commas.toString().replace(".", ",");
    
        if(counters[i].classList.contains("cake-label")) {
            counters[i].innerText = result + " CAKE";
        } else {
            counters[i].innerText = "$" + result;
        }
    }
}


function openAcc() {
    const arrowImg = document.getElementById("accordion-arrow");
    const arrowSpan = document.getElementById("accordion-span");
    const arrowButton = document.querySelector(".accordion-button");
    const accordionBody = document.querySelector(".accordion-body");
    const accordionHeader = document.querySelector(".accordion-header");
  
        if (arrowImg.getAttribute('src') === "/svg/arrow-down-accordion.svg" || arrowSpan.innerHTML == "Details") {
            accordionBody.after(arrowButton);
            arrowImg.setAttribute('src', "/svg/arrow-up-accordion.svg");
            arrowSpan.innerHTML = "Hide";
            
        } else { 
            accordionHeader.append(arrowButton);
            arrowImg.setAttribute('src', "/svg/arrow-down-accordion.svg");
            arrowSpan.innerHTML = "Details"; 
        }
}


window.onload = updateCount();

const openAccordion = document.querySelector(".accordion-button");
openAccordion.addEventListener("click", () => { 
    openAcc(); 
});



function resizeGetTicketsCard()  {
    const getTicketsCard = document.querySelector(".accordion-body-data");
    if (document.documentElement.clientWidth > 575) {
        const getTicketsCard = document.querySelector(".accordion-body-data");
        getTicketsCard.style.gridTemplateColumns = "repeat(4, 1fr)";  
    } else {
        getTicketsCard.style.gridTemplateColumns = "repeat(2, 1fr)";  
    }
}
    
window.addEventListener("resize", resizeGetTicketsCard); 