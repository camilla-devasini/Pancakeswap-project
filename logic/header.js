function dropMenu(a) {
    let dropdowns = document.getElementsByClassName("drop-down-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

    a.parentNode.getElementsByClassName("drop-down-content")[0].classList.toggle("show");


}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches(".drop-label")) {
        let dropdowns = document.getElementsByClassName("drop-down-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



function dropLang() {
  let toggleLang = document.getElementById("myDropDown");
  toggleLang.classList.toggle("show-lang");
}

window.onmouseleave = function (event) {
    if (!event.target.matches(".languages-btn")) {
            toggleLang.classList.remove('show-lang');
            }
        }
    



// da sistemare 
// function BottomdropMenu(a) {
//     let dropdowns = document.getElementsByClassName("bottom-drop-down-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }

//     a.parentNode.getElementsByClassName("bottom-drop-down-content")[0].classList.toggle("show");


// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (e) {
//     if (!e.target.matches(".bottom-drop-label")) {
//         let dropdowns = document.getElementsByClassName("bottom-drop-down-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }
