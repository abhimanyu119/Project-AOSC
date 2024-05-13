/* Dropdown Toggle */ 

const dropdown_icon = document.querySelector('.dropdown-button');
dropdown_icon.addEventListener("click", dropdownToggle);

const dropdown_menu = document.querySelector('.navbar-dropdown-list');
function dropdownToggle() {
    if (dropdown_menu.style.display === "" || dropdown_menu.style.display === "none") {
        dropdown_menu.style.display = "block";
    } else {
        dropdown_menu.style.display = "none";
    }
}

/* Intro Slider */

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

/* Dark Mode Toggle */

window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.switch .look');
    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
    });
});