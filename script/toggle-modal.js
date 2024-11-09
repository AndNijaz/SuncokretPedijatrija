function toggleText(n) {
  let textContainer = "";
  if (n === 1) {
    textContainer = document.getElementById("toggle-1");
  } else if (n === 2) {
    textContainer = document.getElementById("toggle-2");
  } else if (n === 3) {
    textContainer = document.getElementById("toggle-3");
  } else if (n === 4) {
    textContainer = document.getElementById("toggle-4");
  }
  textContainer.classList.toggle("active");
}
