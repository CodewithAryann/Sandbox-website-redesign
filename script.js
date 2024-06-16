function animation() {
    document.addEventListener("DOMContentLoaded", function() {
        const texts = document.querySelectorAll(".text-slide");
        let index = 0;
    
        function showText() {
            texts.forEach(text => text.style.display = 'none');
    
            texts[index].style.display = 'block';
            index = (index + 1) % texts.length;
        }
    
        showText();
    
        setInterval(showText, 3000); 
    });   
}
function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function themechange() {
    let currentTheme = localStorage.getItem('currentTheme') || "default"; 
    document.body.setAttribute("theme", currentTheme);

    const sections = document.querySelectorAll(".section");
    let currentSectionIndex = 0;


    function updateTheme(index) {
        const newTheme = sections[index].dataset.color;
        if (currentTheme !== newTheme) {
            document.body.setAttribute("theme", newTheme);
            localStorage.setItem('currentTheme', newTheme);
            currentTheme = newTheme;
        }
    }

    function handleScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset;


        for (let i = 0; i < sections.length; i++) {
            const sectionTop = sections[i].offsetTop - 100; 
            const sectionBottom = sectionTop + sections[i].offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                if (currentSectionIndex !== i) {
                    currentSectionIndex = i;
                    updateTheme(currentSectionIndex);
                }
                break;
            }
        }
    }


    updateTheme(currentSectionIndex);

    window.addEventListener('scroll', handleScroll);
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation();
animation();
themechange();
loco();
