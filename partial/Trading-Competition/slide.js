let totalButton = document.querySelectorAll('.total');
let stormButton = document.querySelectorAll('.storm');
let flippersButton = document.querySelectorAll('.flippers');
let cakersButton = document.querySelectorAll('.cakers');
let cards = document.querySelectorAll('.js-slide');


totalButton.forEach(button => {
    
    button.addEventListener('click', () => {
       
        cards[0].style.display = 'flex';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'none';
        cards[3].style.display = 'none';
          
    })

 }); 


 stormButton.forEach(button => {
    
    button.addEventListener('click', () => {
       
        cards[0].style.display = 'none';
        cards[1].style.display = 'flex'; 
        cards[2].style.display = 'none';
        cards[3].style.display = 'none';
          
    })
 })


flippersButton.forEach(button => {

    button.addEventListener('click', () => {
       
        cards[0].style.display = 'none';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'flex';
        cards[3].style.display = 'none';
          
    })
 })


cakersButton.forEach(button => {

    button.addEventListener('click', () => {
       
        cards[0].style.display = 'none';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'none';
        cards[3].style.display = 'flex';
          
    })

 })





        let hideDiv1 = document.getElementById('hide1');
        let hideDiv2 = document.getElementById('hide2');
        let hideDiv3 = document.getElementById('hide3');
        let hideDiv4 = document.getElementById('hide4');
        let showMoreSection = document.querySelectorAll('.show-more-section');
        
        showMoreSection.forEach(button => {

            button.addEventListener('click', hide);

        });


    function hide(){

    hideDiv1.classList.toggle('hide');
    hideDiv2.classList.toggle('hide');
    hideDiv3.classList.toggle('hide');
    hideDiv4.classList.toggle('hide');
        

    }



 

















