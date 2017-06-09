window.addEventListener("load", function () {

    var menuIcon = document.getElementsByClassName("menu-icon")[0];
    var closeIcon = document.getElementsByClassName("close-icon")[0];
    var navbar = document.getElementsByTagName("nav")[0];

    function showMenu() {
        navbar.classList.remove("mobile-hidden");
        closeIcon.classList.remove("mobile-hidden");
        closeIcon.classList.add("mobile-visible");
        menuIcon.classList.add("mobile-hidden");
        menuIcon.classList.remove("mobile-visible");
    }

    function hideMenu() {
        navbar.classList.add("mobile-hidden");
        closeIcon.classList.add("mobile-hidden");
        closeIcon.classList.remove("mobile-visible");
        menuIcon.classList.remove("mobile-hidden");
        menuIcon.classList.add("mobile-visible");
    }

    menuIcon.addEventListener("click", showMenu);
    closeIcon.addEventListener("click", hideMenu);

});