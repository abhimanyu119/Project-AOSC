//Just for looking this code is not correct!!!!!


let   scrollSize = 0;
const container = document.querySelector(".intro-slider");

function scrollRight() {
    scrollSize += 1100;
    if (scrollSize > container.scrollWidth - container.clientWidth) {
        scrollSize = 0;
    }
    container.scrollTo({
        left: scrollSize,
        behavior: 'smooth',
    });
    scrollSize += 20;
}

document.querySelector(".scroll-left").addEventListener("click", function () {
    scrollSize -= 1100;
    if (scrollSize < 0) {
        scrollSize = container.scrollWidth - container.clientWidth;
    }
   
    container.scrollTo({
        left: scrollSize,
        behavior: 'smooth'
    });
});

document.querySelector(".scroll-right").addEventListener("click", scrollRight);
setInterval(scrollRight, 2000);