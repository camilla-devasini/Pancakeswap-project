let firstBtn = document.querySelectorAll('.team1');
let secondBtn = document.querySelectorAll('.team2');
let thirdBtn = document.querySelectorAll('.team3');
let cards = document.querySelectorAll('.js-slide');


firstBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'table';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'none';
    })

 }); 


 secondBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'none';
        cards[1].style.display = 'table'; 
        cards[2].style.display = 'none';
    })
 })


thirdBtn.forEach(button => {

    button.addEventListener('click', () => {

        cards[0].style.display = 'none';
        cards[1].style.display = 'none'; 
        cards[2].style.display = 'table';
    })
 })

 // CHANGE BUTTONS COLOR

//  const groupA = document.querySelector(".team-btns");
//  // get our div with buttons
 
//  const groupABtns = groupA.querySelectorAll("button");
//  // select all of our buttons within this div
 
//  // Loop through our array of buttons, and add a click event for each
//  groupABtns.addEventListener("click", function onClick () {
//     groupABtns.style.backgroundColor = 'green';
//     });
