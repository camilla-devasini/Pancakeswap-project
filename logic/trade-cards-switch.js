//PER SWITCHARE DA CARD SWAP A CARD LIMIT AL CLICK DEL DIV "LIMIT"
function toggleTradeCards() {

    let limitCard = document.getElementById('trade-card-container-limit');
    let orderCard = document.getElementById('trade-orders-card');
    
    let swapCard = document.getElementById('trade-card-container-swap');

    let targetButton = document.getElementById('limit-label');
  
 
    // none all'inizion non permette il funzionamento della funzione, non è riconosciuto. Uso 'flex'
    if (limitCard.style.display == 'flex') {
        
        limitCard.style.display = 'none';
        orderCard.style.display = 'none';
        swapCard.style.display = 'flex';

    } else {
        limitCard.style.display = 'flex';
        orderCard.style.display = 'flex';
        swapCard.style.display = 'none';
    }
}




//PER AGGIUNGERE CLASSE HIGHLIGHTED CON STILE PER DIV CLICCATI
let menuLabels = document.querySelectorAll('.trade-link');

menuLabels.forEach(function(item) {
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


//PER RENDERE VISIBILE LA CARD CON IL GRAFICO AL CLICK DELLA RELATIVA ICONA


function gapSpace() {
    let conversionButtons = document.getElementById("version-conversion");
    
    if (conversionButtons.style.flexDirection == 'column') {
        conversionButtons.style.removeProperty('gap');
    } else {
        conversionButtons.style.gap = 20 + "px";
    }
}

gapSpace();

let graphIcons = document.querySelectorAll(".graph-icon");
graphIcons.forEach(function(icon) {
    
    icon.addEventListener('click', () =>  {
        function2(icon);
        function1();
       
       
        

      

    
     
    })
})

function function1() {
let graphCard = document.getElementById("graph-card");
        let cardsOnlyContainer = document.getElementById("trade-cards-only-container");
        let orderCard = document.getElementById("trade-orders-card");
        let bunnyFooter = document.getElementById("trade-page-footer");
        let conversionButtons = document.getElementById("version-conversion");
        let mediaQueryMobile = window.matchMedia(('max-width: 576px'));
        let violetDiv = document.createElement("div");
    
        if (!mediaQueryMobile.matches) {
          
            graphCard.style.cssText = "display: flex; z-index: 2;";
            graphCard.style.animation = "350ms ease 0s 1 normal forwards running graph-up";
            orderCard.style.display = "none";
            violetDiv.classList = "violet-layer-style";
            violetDiv.style.cssText = "width: 100vw; height: 100vh; background-color: blue; opacity: 0.3; z-index: 1; position: fixed; top: 0%;";
            document.body.append(violetDiv);

            
            
        } else {
            graphCard.style.cssText = "display: flex";
            cardsOnlyContainer.style.flexDirection = "row";
            conversionButtons.style.cssText = "flex-direction: column; align-items: center";
            orderCard.style.cssText = "display: flex; position: absolute; left: 0px; bottom: -30%"; 
            violetDiv.style.opacity = 0;
         
        } 
    }

    function function2(icon) {

        let graphCard = document.getElementById("graph-card");
        let cardsOnlyContainer = document.getElementById("trade-cards-only-container");
        let orderCard = document.getElementById("trade-orders-card");
        let bunnyFooter = document.getElementById("trade-page-footer");
        let conversionButtons = document.getElementById("version-conversion");
        

    
        if (graphCard.style.display == 'flex') {        
            graphCard.style.display = 'none';
            icon.src = "../../svg/show-graph-icon.svg";
            cardsOnlyContainer.style.flexDirection = "row-reverse";
            bunnyFooter.style.flexDirection = "row";
            bunnyFooter.style.removeProperty("position");
            conversionButtons.style.flexDirection = "row";
            orderCard.style.display = "none";
            
         
           
        } else {
            graphCard.style.display = 'flex';
            icon.src = "../../svg/hide-graph-icon.svg";
            cardsOnlyContainer.style.flexDirection = "row";
            bunnyFooter.style.cssText = "flex-direction: column; align-items: center; position: absolute; bottom: -34%; right: -16%; gap: 20px";
            conversionButtons.style.cssText = "flex-direction: column; align-items: center";
            orderCard.style.cssText = "display: flex; position: absolute; left: 0px; bottom: -30%"; 
         
        } 

    
     
    }



  




 


