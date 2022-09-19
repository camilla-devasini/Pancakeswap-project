//Drop-down menu - versione desktop e mobile
let menuLabels = document.querySelectorAll(".drop-label");
for (let i = 0; i < menuLabels.length; i++) {
    menuLabels[i].addEventListener('click', function () {

        let dropdowns = document.querySelectorAll(".drop-down-content");
        dropdowns[i].classList.toggle('show');

    })
}

let bottomMenuLabels = document.querySelectorAll(".bottom-drop-label");
for (let i = 0; i < bottomMenuLabels.length; i++) {
    bottomMenuLabels[i].addEventListener('click', function() {
        
        let bottomDropdowns = document.querySelectorAll(".bottom-drop-down-content");
            bottomDropdowns[i].classList.toggle('show-m');
            // console.log(bottomDropdowns);   
    })
}


//Drop-down languages menu
let languagesBtn = document.querySelector(".languages-btn");
languagesBtn.addEventListener('click', dropLang);
function dropLang() {
  let toggleLang = document.getElementById("myDropDown");
  toggleLang.classList.toggle("show-lang");
}


//Close menues when clicking outside in the window
window.addEventListener('click', (event) => {
    removeToggleLang(event);
    removeToggleMenu(event);
    // removeToggleMenuMobile(event);
})
function removeToggleLang(event) {
    let toggleLang = document.getElementById("myDropDown");
    if (!event.target.matches(".languages-btn")) {
        toggleLang.classList.remove('show-lang');
    }
}
function removeToggleMenu(event) {
    if (!event.target.matches(".drop-label")) {
        let dropdowns = document.getElementsByClassName("drop-down-content");
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

















// function removeToggleMenuMobile(event) {
//     if (!event.target.matches(".bottom-drop-label")) {
//         let bottomDropdowns = document.getElementsByClassName("bottom-drop-down-content");
//         for (let i = 0; i < bottomDropdowns.length; i++) {
//             let openBottomDropdown = bottomDropdowns[i];
//             if (openBottomDropdown.classList.contains('show-m')) {
//                 openBottomDropdown.classList.remove('show-m');
//             }
//         }
//     }
// }

