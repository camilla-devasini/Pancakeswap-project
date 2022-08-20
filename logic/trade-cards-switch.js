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




//PER AGGIUNGERE CLASSE HIGHLIGHTED CON STILE PER DIV CLICCATI
let menuLabels = document.querySelectorAll('.trade-link');

menuLabels.forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.add('link-highlighted');

        i
    });    
});

    
