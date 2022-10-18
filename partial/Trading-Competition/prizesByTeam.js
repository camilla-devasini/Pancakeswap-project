let firstBtn = document.querySelectorAll('.team1');
let secondBtn = document.querySelectorAll('.team2');
let thirdBtn = document.querySelectorAll('.team3');
let cards = document.querySelectorAll('.js-slide');


firstBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'table';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'none';
        firstBtn[0].style.backgroundColor = '#7a6eaa';
        firstBtn[0].style.color = '#eeeaf4';
        secondBtn[0].style.backgroundColor = '#eeeaf4';
        secondBtn[0].style.color = '#7a6eaa';
        thirdBtn[0].style.backgroundColor = '#eeeaf4';
        thirdBtn[0].style.color = '#7a6eaa';
    })

 }); 


 secondBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'none';
        cards[1].style.display = 'table'; 
        cards[2].style.display = 'none';
        firstBtn[0].style.backgroundColor = '#eeeaf4';
        firstBtn[0].style.color = '#7a6eaa';
        secondBtn[0].style.backgroundColor = '#7a6eaa';
        secondBtn[0].style.color = '#eeeaf4';
        thirdBtn[0].style.backgroundColor = '#eeeaf4';
        thirdBtn[0].style.color = '#7a6eaa';
    })
 })


thirdBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'none';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'table';
        firstBtn[0].style.backgroundColor = '#eeeaf4';
        firstBtn[0].style.color = '#7a6eaa';
        secondBtn[0].style.backgroundColor = '#eeeaf4';
        secondBtn[0].style.color = '#7a6eaa';
        thirdBtn[0].style.backgroundColor = '#7a6eaa';
        thirdBtn[0].style.color = '#eeeaf4';
    })
 })