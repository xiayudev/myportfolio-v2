const menu = document.getElementById("menu");
const menu_btn = document.getElementById("menu-btn");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("open");
    menu.classList.toggle("invisible");
})

//For smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });