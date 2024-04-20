const slides = document.querySelectorAll('.intro-slider-container');
var counter = 0;
console.log(slides);
slides.forEach((slide,index) => {
    slide.style.left = `${index * 100}%`;
});
const goPrev = () => { 
    if(counter > 0){
        counter--;
        introslider();
    } };
const goNext = () => {
    if(counter <slides.length -1){
        counter++;
        introslider();
    } };
const introslider = () =>{
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
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