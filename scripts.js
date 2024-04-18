//Just for looking this code is not correct!!!!!
let scrollSize = 0;
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

/* Image Slider */

const scrollers = document.querySelectorAll('.slider-section');
console.log(scrollers);
addAnimation();

        addAnimation();
        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");
                const scrollerInner = scroller.querySelector('.slider-inner');
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach(item => {
                    const clonedItem = item.cloneNode(true);
                    clonedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(clonedItem);
                    console.log(clonedItem);
                });

                scroller.addEventListener("mouseenter", () => {
                    stopAnimation(scrollerInner);
                });

                scroller.addEventListener("mouseleave", () => {
                    resumeAnimation(scrollerInner);
                });
            });
        }

        function stopAnimation(element) {
            element.style.animationPlayState = "paused";
        }

        function resumeAnimation(element) {
            element.style.animationPlayState = "running";
        }