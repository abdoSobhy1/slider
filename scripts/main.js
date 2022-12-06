// Set the initial index to 0
let index = 0;
let prevIndex;
let nextIndex;
const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll(".slide");
let container = document.querySelector(".pagination");
for (let i = 0; i < images.length; i++) {
  let indic = document.createElement("div");
  indic.classList.add("indic");
  indic.dataset.index = i;
  container.appendChild(indic);
}
let indicators = document.querySelectorAll(".indic");
let indicatorsSelection = function () {
  indicators.forEach((indic) => {
    indic.classList.remove("active");
  });
  indicators[index].classList.add("active");
};
let nextSlide = function () {
  if (index < images.length) {
    prevIndex = index - 1;
    nextIndex = index + 1;
    if (nextIndex == images.length) {
      nextIndex = 0;
    }
    if (prevIndex == -1) {
      prevIndex = images.length - 1;
    }
  } else {
    prevIndex = images.length - 1;
    index = 0;
    nextIndex = 1;
  }
  images[index].style.transform = "translateX(0)";
  images[index].style.zIndex = "99";
  images[nextIndex].style.transform = "translateX(100%)";
  images[nextIndex].style.zIndex = "-1";
  images[prevIndex].style.transform = "translateX(-100%)";
  images[prevIndex].style.zIndex = "-2";
  indicatorsSelection();
};
nextSlide();
let timer = window.setInterval(() => {
  index += 1;
  nextSlide();
}, 3000);
document.querySelector(".next").onclick = function () {
  clearInterval(timer);
  timer = window.setInterval(() => {
    index += 1;
    nextSlide();
  }, 3000);
  index += 1;
  nextSlide();
};
let prevSlide = function () {
  if (index == -1) {
    index = images.length - 1;
    prevIndex = index - 1;
    nextIndex = 0;
    images[prevIndex].style.transform = "translateX(-100%)";
    images[prevIndex].style.zIndex = "-1";
  } else {
    prevIndex = index - 1;
    nextIndex = index + 1;
    if (prevIndex == -1) {
      prevIndex = images.length - 1;
    }
  }
  images[index].style.transform = "translateX(0)";
  images[index].style.zIndex = "99";
  images[prevIndex].style.transform = "translateX(-100%)";
  images[prevIndex].style.zIndex = "-1";
  images[nextIndex].style.transform = "translateX(100%)";
  images[nextIndex].style.zIndex = "-2";
};
document.querySelector(".prev").onclick = function () {
  clearInterval(timer);
  timer = window.setInterval(() => {
    index += 1;
    nextSlide();
  }, 3000);
  index -= 1;
  prevSlide();
  indicatorsSelection();
};

indicators.forEach((ele) => {
  ele.addEventListener("click", () => {
    indicators.forEach((e) => e.classList.remove("active"));
    ele.classList.add("active");
    index = parseInt(ele.dataset.index);
    nextSlide();
    clearInterval(timer);
    timer = window.setInterval(() => {
      index += 1;
      nextSlide();
    }, 3000);
  });
});
