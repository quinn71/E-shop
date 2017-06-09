window.addEventListener("load", function () {

    var slideIndex = 0;
    var scrollButtons = document.getElementsByClassName("scroll-button");

    function showSlide() {
        var allSlides = document.getElementsByClassName("carousel-item");

        if(slideIndex == allSlides.length) slideIndex = 0;
        if(slideIndex < 0) slideIndex = allSlides.length-1;

        for(var i = 0; i < allSlides.length; i++) {
            allSlides[i].classList.remove("active"); //style.display = "none";
            scrollButtons[i].classList.remove("checked");
        }
        allSlides[slideIndex].classList.add("active"); //style.display = "block";
        scrollButtons[slideIndex].classList.add("checked");
    }


    for(var i = 0; i < 3; i++) {
        var button = scrollButtons[i];
        button.addEventListener("click", function () {
            slideIndex = this.counter;
            showSlide();
        });
        button.counter = i;
    }

    setInterval( function nextSlide() {
        showSlide(++slideIndex);
    }, 4000);
});
