const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
        });
        link.classList.add("active");
    });
});