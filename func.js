function hideIcon(self) {
    self.style.backgroundImage = 'none';
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY) {
        navMenu.classList.add("nav--hidden");
    }else{
        navMenu.classList.remove("nav--hidden");
    }
    lastScrollY = windo.scrollY;
})
function scrollToTop(){
    window.scrollTo(0, 0);
}