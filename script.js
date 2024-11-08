let firstImg = document.querySelector(".first-img");
let secondImg = document.querySelector(".second-img");
let thirdImg = document.querySelector(".third-img");
let firstDott = document.querySelector(".first-dott");
let secondDott = document.querySelector(".second-dott");
let thirdDott = document.querySelector(".third-dott");

firstDott.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "blue";
  secondDott.style.backgroundColor = "white";
  thirdDott.style.backgroundColor = "white";

  if (secondImg.style.display === "flex" || thirdImg.style.display === "flex") {
    firstImg.style.display = "flex";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
  } else {
    firstImg.style.display = "flex";
  }
});

secondDott.addEventListener("click", (event) => {
  firstDott.style.backgroundColor = "white";
  thirdDott.style.backgroundColor = "white";
  event.target.style.backgroundColor = "blue";
  if (firstImg.style.display === "flex" || thirdImg.style.display === "flex") {
    secondImg.style.display = "flex";
    firstImg.style.display = "none";
    thirdImg.style.display = "none";
  } else {
    secondImg.style.display = "flex";
  }
});

thirdDott.addEventListener("click", (event) => {
  firstDott.style.backgroundColor = "white";
  secondDott.style.backgroundColor = "white";
  event.target.style.backgroundColor = "blue";
  if (firstImg.style.display === "flex" || secondImg.style.display === "flex") {
    thirdImg.style.display = "flex";
    firstImg.style.display = "none";
    secondImg.style.display = "none";
  } else {
    thirdImg.style.display = "flex";
  }
});

firstDott.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.transform = "scaleX(2)";
  event.target.style.transition = "transform 0.9s ease";
  event.target.style.width = "15px";
});
firstDott.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.width = "15px";
  event.target.style.transform = "scaleX(1)";
});

secondDott.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.transform = "scaleX(2)";
  event.target.style.transition = "transform 0.9s ease";
  event.target.style.width = "15px";
});
secondDott.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.width = "15px";
  event.target.style.transform = "scaleX(1)";
});

thirdDott.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "blue";
  event.target.style.transform = "scaleX(2)";
  event.target.style.transition = "transform 0.9s ease";
  event.target.style.width = "15px";
});
thirdDott.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.width = "15px";
  event.target.style.transform = "scaleX(1)";
});
