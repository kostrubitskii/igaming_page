document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector(".start-button");
    const overlay = document.querySelector(".overlay");
    const gameImage = document.querySelector(".game__image");
    const gameIframe = document.getElementById("game");
    startButton.addEventListener("click", function() {
        overlay.style.display = "none";
        gameImage.style.display = "none";
        gameIframe.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelectorAll(".topBar__scroll");
    const footer = document.querySelector(".footer");
    for (ch of button)ch.addEventListener("click", function() {
        footer.scrollIntoView({
            behavior: "smooth"
        });
    });
});

//# sourceMappingURL=index.e72c3fb5.js.map
