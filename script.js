function changeTab() {
  window.location ="https://translate.google.com/?hl=vi&sl=en&tl=vi&op=translate";
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
