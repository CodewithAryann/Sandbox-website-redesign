document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll(".text-slide");
    let index = 0;

    function showText() {
        texts.forEach(text => text.style.display = 'none');

        texts[index].style.display = 'block';
        index = (index + 1) % texts.length;
    }

    showText(); // Initial call to display the first text

    setInterval(showText, 3000); // Change text every 3 seconds
});
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function themechange(){
    let themeStack = [];

    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function() {
                // Push the current theme to the stack before changing to the new theme
                themeStack.push(document.body.getAttribute("theme") || "");
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function() {
                // Pop the previous theme from the stack and apply it
                document.body.setAttribute("theme", themeStack.pop() || "");
            }
        });
    });
}

themechange();
loco();