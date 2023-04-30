let drumList = document.querySelectorAll(".drum");
for (let i = 0; i < drumList.length; i++) {
  drumList[i].addEventListener("click", handleClick);
}
function handleClick() {
  var audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}
