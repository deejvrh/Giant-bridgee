const header = document.querySelectorAll("header")
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 70)
}) 