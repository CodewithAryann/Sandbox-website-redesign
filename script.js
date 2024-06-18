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
function sandboximg() {
    gsap.to("#img1", {
        scrollTrigger: {
            trigger: "#img1",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        x: 30,
        ease: Power2,
    })
}
function getp() {
    gsap.to(".get-p", {
        scrollTrigger: {
            trigger: ".get-p",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function creativecontent() {
    gsap.to("#creative-content", {
        scrollTrigger: {
            trigger: "#creative-content",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function getp2() {
    gsap.to("#get-p2", {
        scrollTrigger: {
            trigger: "#get-p2",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function sandboximg2() {
    gsap.to("#get-connect-img2", {
        scrollTrigger: {
            trigger: "#get-p2",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
            duration: 5
        },
        y: -78,
        ease: Power2,
    })
}
function ytvideop() {
    gsap.to("#yt-video-p", {
        scrollTrigger: {
            trigger: "#yt-video-p",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function approach() {
    gsap.to("#approach", {
        scrollTrigger: {
            trigger: "#approach",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function brand() {
    gsap.to("#brand h1", {
        scrollTrigger: {
            trigger: "#brand h1",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function brandp() {
    gsap.to("#brand p", {
        scrollTrigger: {
            trigger: "#brand",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function brandbutton() {
    gsap.to("#brand button", {
        scrollTrigger: {
            trigger: "#brand",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function digital() {
    gsap.to(".digital p", {
        scrollTrigger: {
            trigger: ".digital p",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function digitalh1() {
    gsap.to(".digital h1", {
        scrollTrigger: {
            trigger: ".digital h1",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function digitalp() {
    gsap.to("#digital-p", {
        scrollTrigger: {
            trigger: "#digital-p",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function workh1() {
    gsap.to(".work h1", {
        scrollTrigger: {
            trigger: ".work",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function play() {
    gsap.to(".play p", {
        scrollTrigger: {
            trigger: ".play",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function playh1() {
    gsap.to(".play h1", {
        scrollTrigger: {
            trigger: ".play",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
function branches() {
    gsap.to("#branches h1", {
        scrollTrigger: {
            trigger: "#branches",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1
        },
        opacity:1,
        ease: Power2,
    })
}
sandboximg();
getp();
getp2();
creativecontent();
loaderAnimation();
sandboximg2();
ytvideop();
approach();
brand();
brandp();
brandbutton();
digital();
digitalh1();
digitalp();
workh1();
play();
playh1();
branches();
animation();
themechange();
loco();
