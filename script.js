const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const backToTop = document.querySelector(".back-to-top");

// Hamburger menu
if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

}


// Back to top button
if (backToTop) {

    window.addEventListener("scroll", () => {
        console.log("SCROLLING", window.scrollY);

        if (window.scrollY > 100) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

}
console.log("SCRIPT IS RUNNING");

window.addEventListener("scroll", () => {
    console.log("SCROLLING", window.scrollY);
});
