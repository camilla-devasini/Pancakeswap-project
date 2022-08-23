//PER SWITCHARE DA CARD SWAP A CARD LIMIT AL CLICK DEL DIV "LIMIT"
function toggleTradeCards() {

    let limitCard = document.getElementById('trade-card-container-limit');
    
    let swapCard = document.getElementById('trade-card-container-swap');

    let targetButton = document.getElementById('limit-label');
  
    // SE IMPOSTO IF CON LIMIT.CARD.STYLE.DISPLAY = NONE PRIMA NON FUNZIONA
    if (limitCard.style.display == 'flex') {
        
        limitCard.style.display = 'none';
        swapCard.style.display = 'flex';

    } else {
        limitCard.style.display = 'flex';
        swapCard.style.display = 'none';
    }
}



// CONVIENE FARE TANTE FUNZIONI E POI RICHIAMARLE COME CON TOGGLECARDS()
//PER AGGIUNGERE CLASSE HIGHLIGHTED CON STILE PER DIV CLICCATI
let menuLabels = document.querySelectorAll('.trade-link');

menuLabels.forEach(function(item) {
    item.addEventListener('click', function() {
        if (!item.classList.contains('link-highlighted')) {

            toggleTradeCards();
            item.classList.add('link-highlighted');
            let otherLabel = document.querySelectorAll('.trade-link');
    
            
            // let idx = item.id; 
            otherLabel.forEach(function(itemL) {
                if (item.id != itemL.id) {
                itemL.classList.remove('link-highlighted');
    
                }
    
            });

        }
       
    });    
});


    
