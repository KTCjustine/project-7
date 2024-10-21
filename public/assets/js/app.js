// Search Input Animation
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector(".search-input");

function animateShowSearchInput(status) {
  if (status === "open") {
    searchInput.classList.add("search-inputs-active");
  } else {
    searchInput.classList.remove("search-inputs-active");
  }
}

searchButton.addEventListener("mouseenter", () => {
  animateShowSearchInput("open");
});

searchButton.addEventListener("mouseleave", () => {
  animateShowSearchInput("close");
});
// End Search Input Animation

// Drop Down Menus Animation
const dropDown = document.querySelector("#dropdown");
const dropDownContent = document.querySelector(".dropdown-content");

const dropDownArrow = document.querySelector(".dropdown-arrow");

function animateShowDropDown(status) {
  if (status === "open") {
    dropDownContent.classList.add("dropdown-content-active");
    dropDownArrow.classList.add("dropdown-arrow-active");
  } else {
    dropDownContent.classList.remove("dropdown-content-active");
    dropDownArrow.classList.remove("dropdown-arrow-active");
  }
}

dropDown.addEventListener("mouseenter", () => {
  animateShowDropDown("open");
});

dropDown.addEventListener("mouseleave", () => {
  animateShowDropDown("close");
});
// End Drop Down Menus Animation

// Infite Slider for Energize Focus etc. Section
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,

  breakpoints: {
    640: {
      slidesPerView: 1.5
    }
  },
});
// End Infinite Slider for Energize Focus etc. Section

// Energize Boldy Carousel
const energizeBoldySwiper = new Swiper(".energize-boldy-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 60,
  initialSlide: 1,
  slideActiveClass: "swiper-slide-active",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
    scale: 0.9,
  },
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },

  // breakpoints: {
  //   640: {
  //     slidesPerView: 1,
  //     initialSlide: 0,
  //   },

  //   768: {
  //     slidesPerView: "auto",
  //     initialSlide: 1,
  //   },
  // },
});
// End Energize Boldy Carousel

// Vertical Carousel in Everyday Moments Section
const eveydayMomentsSwiper = new Swiper(".everyday-moments-swiper", {
  slidesPerView: 1.5,
  direction: "vertical",
  grabCursor: true,
  spaceBetween: 22,
  mousewheel: true,
  navigation: {
    nextEl: ".custom-vertical-swiper-button-next",
  },
});
// End Vertical Carousel in Everyday Moments Section

// Made with 5 Simple Ingredients Carousel
const madeWithSwiper = new Swiper(".made-with-swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  grabCursor: true,
  spaceBetween: 18,
  mousewheel: true,
});
// End Made with 5 Simple Ingredients Carousel

// Infite Slider for Save November Section
const saveNovemberSwiper = new Swiper(".save-november-swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,

  breakpoints: {
    640: {
      slidesPerView: 1.2,
    },
  },
});
// End Infinite Slider for Save November Section

// Blue Section Carousel
const blueSectionSwiper = new Swiper(".blue-section-swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  grabCursor: true,
  spaceBetween: 47,
  navigation: {
    nextEl: ".custom-blue-swiper-button-next",
  },
});
// End Blue Section Carousel

// Happy Section Carousel
const happySectionSwiper = new Swiper(".happy-section-swiper", {
  slidesPerView: 2,
  direction: "horizontal",
  spaceBetween: 10,
  navigation: {
    nextEl: ".custom-happy-swiper-button-next",
    prevEl: ".custom-happy-swiper-button-prev",
  },

  breakpoints: {
    640: {
      spaceBetween: 28,
    },
  },
});
// End Happy Section Carousel

// Infite Slider for Footer Section
const footerSwiper = new Swiper(".footer-swiper", {
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 0,
  speed: 2000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  allowTouchMove: false,

  breakpoints: {
    640: {
      slidesPerView: 1.5,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2,
    },

    1248: {
      slidesPerView: 3.7,
    },
  },
});
// End Infinite Slider for Footer Section
