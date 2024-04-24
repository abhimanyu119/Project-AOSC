// Intro Slider

const slides = document.querySelectorAll('.intro-slider-container');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(goNext, 5000);
}

const goPrev = () => { 
    if(counter <= 0){
        counter = slides.length - 1;
    } else {
        counter--;
    }
    introslider();
    resetInterval();
};

const goNext = () => {
    if(counter >= slides.length - 1){
        counter = 0;
    } else {
        counter++;
    }
    introslider();
    resetInterval();
};

const introslider = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

let intervalId = setInterval(goNext, 5000);

/* Image Slider */

const scrollers = document.querySelectorAll('.slider-section');
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

/* Course Section*/

const courseContent = document.querySelectorAll('.course-col');
addCourseAnimation();

let count = 0;
function addCourseAnimation() {
    courseContent.forEach((course) => {
        course.addEventListener("click", () => {
            courseContent.forEach((otherCourse) => {
                if(otherCourse !== course) {
                    otherCourse.classList.remove("clicked");
                    otherCourse.classList.add("not-clicked");
                }
            });
            course.classList.toggle("clicked");
            if(count !== 0){
                course.classList.toggle("not-clicked");
            }
            count = 1;
            const allCoursesNotClicked = Array.from(courseContent).every(course => course.classList.contains("not-clicked"));

            if (allCoursesNotClicked) {
                courseContent.forEach(course => course.classList.remove("not-clicked"));
            }
        });
    });
}