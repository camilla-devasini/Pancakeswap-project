//to check for possible overflow elements on x axis
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

//Switch card swap and limit
function toggleTradeCards() {
    let limitCard = document.getElementById('trade-card-container-limit');
    let orderCard = document.getElementById('trade-orders-card');
    let swapCard = document.getElementById('trade-card-container-swap');

  
    if (limitCard.style.display == 'flex') {
        limitCard.style.display = 'none';
        orderCard.style.display = 'none';
        swapCard.style.display = 'flex';
    
        
    } else {
        limitCard.style.display = 'flex'; 
        orderCard.style.display = 'flex';
        limitCard.after(orderCard);
        swapCard.style.display = 'none';
        

    }
}


//add .link-highlighted class to labels when clicked.
let menuLabelsHighlight = document.querySelectorAll('.trade-link');
menuLabelsHighlight.forEach(function(item) {
    item.addEventListener('click', function() {
        if (!item.classList.contains('link-highlighted')) {
            toggleTradeCards();
            item.classList.add('link-highlighted');
            let otherLabel = document.querySelectorAll('.trade-link');
            otherLabel.forEach(function(itemL) {
                if (item.id != itemL.id) {
                itemL.classList.remove('link-highlighted');
                }
            });
        } 
    });    
});


let graphIcons = document.querySelectorAll(".graph-icon");
graphIcons.forEach(function(icon) {
    icon.addEventListener('click', () =>  {
        graphFunc(icon);
        resizeFunc(); 
        moveOrdercard();   
    })
})


function graphFunc(icon) {
    let graphCard = document.getElementById("graph-card");

    if (graphCard.style.display == 'flex') {        
        graphCard.style.display = 'none';
        icon.src = "../../svg/show-graph-icon.svg";
        
    } else { 
        graphCard.style.display = 'flex';
        icon.src = "../../svg/hide-graph-icon.svg";  
        }
    }    


//Mobile view: graph animation up
function resizeFunc() {

    let graphCard = document.getElementById("graph-card");
    let violetDiv1 = document.getElementById("violet-id");
    
    let tradeWidth = document.documentElement.clientWidth; //or: if (window.matchMedia("(max-width: 576px)").matches 
    if (tradeWidth < 576) {
        
        let violetDiv = document.createElement("div");
        violetDiv.setAttribute("id", "violet-id");
        graphCard.style.cssText = "display: flex; z-index: 2;";
        graphCard.style.animation = "350ms ease 0s 1 normal forwards running graph-up";
        document.body.append(violetDiv);
        violetDiv.style.cssText = "display: block; width: 100%; height: 100vh; background-color: rgb(69, 42, 122); transition: opacity 0.4s ease 0s; opacity: 0.6; z-index: 1; position: fixed; top: 0%;";
      
    } else {
        graphCard.style.removeProperty("animation");
    }
}

function moveOrdercard() {
    let bunnyFooter = document.getElementById("trade-page-footer");
    let conversionButtons = document.getElementById("version-conversion");
    let orderCard = document.getElementById('trade-orders-card');
    let graphCard = document.getElementById("graph-card");
    let limitCard = document.getElementById('trade-card-container-limit');
    let cardsOnlyContainer = document.getElementById("trade-cards-only-container");
    
    if (limitCard.style.display == 'flex' && graphCard.style.display == 'flex' && document.documentElement.clientWidth > 576) {
        graphCard.appendChild(orderCard);
        orderCard.style.marginTop = 30 + "px";
       
    }

    if (limitCard.style.display == 'flex' && graphCard.style.display == 'flex' && document.documentElement.clientWidth > 576 && orderCard.style.display == "flex") {
        bunnyFooter.style.cssText = "flex-direction: column; align-items: flex-end; margin-right: 20%;"
        conversionButtons.style.flexDirection = "column"; 

    }

    else {
        limitCard.after(orderCard);  
    }  

         
}   

let graphCloseIcon = document.getElementById("graph-close-icon");
graphCloseIcon.addEventListener('click', () => {
   closeGraph(); 
  
}); 

function closeGraph() {
    let graphCard = document.getElementById("graph-card");
    let violetLayer = document.getElementById("violet-id");
    if (graphCard.style.display === "flex") {
        graphCard.style.display = "none";
        violetLayer.remove();
       
    }
}


function closeVioletDiv()  {
    let violetLayer = document.getElementById("violet-id");
        if (document.documentElement.clientWidth > 576 && violetLayer) {
            violetLayer.remove(); 
    } 
}
    
window.addEventListener("resize", closeVioletDiv); 

