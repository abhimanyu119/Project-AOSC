var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("intro-slider-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}

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