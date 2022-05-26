const slider = document.querySelector(".slider input");
const img1 = document.querySelector(".images .img-1");
const img2 = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".drag-line");
const input = document.querySelectorAll("#filter");

let e1 = 'url("assets/e1l.jpg") no-repeat';
let e2 = 'url("assets/e2l.jpg") no-repeat';
let e3 = 'url("assets/e3l.jpg") no-repeat';
let e4 = 'url("assets/e4l.jpg") no-repeat';

input.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.value == "filter1") {
      img2.style.background = e2;
    } else if (e.target.value == "filter2") {
      img2.style.background = e3;
    } else if (e.target.value == "filter3") {
      img2.style.background = e4;
    }
  });
});

slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img2.style.width = sliderVal + "%";
};
