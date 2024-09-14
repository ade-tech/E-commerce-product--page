import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const headerImage = document.querySelector(".headerImage");
const otherImages = document.querySelector(".otherImages");
const AllImages = Array.from(document.querySelectorAll(".imagecont"));
const ValueHTML = document.querySelector(".price");
const ValueText = document.querySelector(".price").textContent.slice(1);
const unitsbutton = document.querySelector(".value");
const add = document.querySelector(".plus");
let count = 0;
const subtract = document.querySelector(".minus");

otherImages.addEventListener("click", (e) => {
  if (!e.target.classList.contains("image-active")) return;
  const clickedImage = e.target;
  const ParentTag = clickedImage.closest("div");
  AllImages.forEach((image) => {
    if (image != ParentTag) {
      image.classList.remove("container-active");
    }
  });
  ParentTag.classList.add("container-active");
  headerImage.src = clickedImage.dataset.image;
});

const increase = function () {
  count = count + 1;
};
const decrease = function () {
  count = count - 1;
};

add.addEventListener("click", function () {
  increase();
  unitsbutton.innerText = count;
  ValueText.textContent = +ValueText * count;
  count > 1
    ? (ValueHTML.innerHTML = `$ ${Number.parseInt(ValueText) * count}.00`)
    : "";
});

subtract.addEventListener("click", function () {
  if (count <= 1) return;
  decrease();
  unitsbutton.innerText = count;
  count >= 1
    ? (ValueHTML.innerHTML = `$ ${Number.parseInt(ValueText) * count}.00`)
    : "";
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
