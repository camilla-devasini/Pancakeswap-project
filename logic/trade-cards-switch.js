//PER SWITCHARE DA CARD SWAP A CARD LIMIT AL CLICK DEL DIV "LIMIT"
function toggleTradeCards() {
    
    let limitCard = document.getElementById('trade-card-container-limit');
    let orderCard = document.getElementById('trade-orders-card');
    let swapCard = document.getElementById('trade-card-container-swap');
  
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





//AL CLICK DELL'ICONA DEL GRAFICO: FLOAT VERSO L'ALTO DELLA CARD CON IL GRAFICO IN MODALITA' MOBILE
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


function resizeFunc() {

  

    let graphCard = document.getElementById("graph-card");
    let orderCard = document.getElementById("trade-orders-card");
    let violetDiv1 = document.getElementById("violet-id");
    let swapCard = document.getElementById('trade-card-container-swap');

    if (window.matchMedia("(max-width: 576px)").matches && !violetDiv1) {
        let violetDiv = document.createElement("div");
        violetDiv.setAttribute("id", "violet-id");
        graphCard.style.cssText = "display: flex; z-index: 2;";
        graphCard.style.animation = "350ms ease 0s 1 normal forwards running graph-up";
        orderCard.style.display = "none";
        document.body.append(violetDiv);
        violetDiv.style.cssText = "display: block; width: 100vw; height: 100vh; background-color: rgb(69, 42, 122); transition: opacity 0.4s ease 0s; opacity: 0.6; z-index: 1; position: fixed; top: 0%;";
        
    } else {
       

        graphCard.style.removeProperty("animation");

        if (violetDiv1) {
        violetDiv1.remove();
        }
        
    }


}



function moveOrdercard() {
    let bunnyFooter = document.getElementById("trade-page-footer");
    let conversionButtons = document.getElementById("version-conversion");
    let orderCard = document.getElementById('trade-orders-card');
    let graphCard = document.getElementById("graph-card");
    let limitCard = document.getElementById('trade-card-container-limit');
    let cardsOnlyContainer = document.getElementById("trade-cards-only-container");
    
    if (graphCard.style.display == 'flex') {
        graphCard.append(orderCard);
        orderCard.style.marginTop = 30 + "px";

        if (graphCard.style.display == 'flex' && limitCard.style.display == 'flex') {
        bunnyFooter.style.cssText = 'flex-direction: column; align-items: flex-end; position: absolute; right: 10%; bottom: -40%';
        conversionButtons.style.flexDirection = "column";
        }

    } else {
        cardsOnlyContainer.prepend(orderCard);
        bunnyFooter.style.cssText = "flex-direction: row";
        conversionButtons.style.flexDirection = "row";   
    }
}



    
    let graphCloseIcon = document.getElementById("graph-close-icon");
    graphCloseIcon.addEventListener('click', () => {
       closeGraph(); 
      
    }); 


    function closeGraph()  {
       
        let graphCard = document.getElementById("graph-card");
        let violetLayer = document.getElementById("violet-id");
        let graphIcon = document.getElementById("limit-graph-icon");
    
            if (graphCard.style.display == 'flex') {
                graphCard.style.display = 'none';
            if (violetLayer) {
                violetLayer.remove();
            }
            
             
            } else { 
                graphCard.style.display = 'flex';
                 
                } 
         
            }
        
            
            // window.addEventListener("resize", closeGraph);  

 


