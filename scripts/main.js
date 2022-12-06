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
  if (index == images.length) {
    index = 0;
  }
  images.forEach((img) => {
    img.classList.remove("next");
    img.classList.remove("curr");
    img.classList.add("prev");
    images[index].classList.remove("prev");
    images[index].classList.remove("next");
    images[index].classList.add("curr");
    for (let i = index + 1; i < images.length; i++) {
      images[i].classList.remove("prev");
      images[i].classList.add("next");
    }
    if (index == images.length - 1) {
      images[0].classList.remove("prev");
      images[0].classList.add("next");
    }
    if (index == 0) {
      images[images.length - 1].classList.remove("next");
      images[images.length - 1].classList.add("prev");
    }
  });
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
  }
  images.forEach((img) => {
    img.classList.remove("next");
    img.classList.remove("curr");
    img.classList.add("prev");
    images[index].classList.remove("prev");
    images[index].classList.remove("next");
    images[index].classList.add("curr");
    for (let i = index + 1; i < images.length; i++) {
      images[i].classList.remove("prev");
      images[i].classList.add("next");
    }
    if (index == images.length - 1) {
      images[0].classList.remove("prev");
      images[0].classList.add("next");
    }
    if (index == 0) {
      images[images.length - 1].classList.remove("next");
      images[images.length - 1].classList.add("prev");
    }
  });
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
