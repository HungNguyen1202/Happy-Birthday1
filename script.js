function changeTab() {
  window.location =""; // put next website
}

function delay() {
  // document.getElementById("loading-background").style.opacity = "1";

  anime({
    targets: ".loading-background",
    duration: 4000,
    opacity: 1,
  })
  document.getElementById("loading-background").style.zIndex = "1";
  setTimeout(changeTab, 2000);
}

function showButton() {
  document.querySelector(".buttons").style.removeProperty("animation-name");
  document.querySelector(".buttons").style.opacity = "1";
}
setTimeout(showButton, 5000);


function extend() {
    document.querySelector(".plate").style.width = "180px";
}
setTimeout(extend, 3000);
