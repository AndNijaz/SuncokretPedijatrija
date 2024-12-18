var map = L.map("map").setView([43.8665, 18.4011], 16);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var marker = L.marker([43.8665, 18.4011]).addTo(map);
document.addEventListener("DOMContentLoaded", () => {
  let e = document.querySelectorAll(".main-nav-link"),
    t = window.location.pathname;
  e.forEach((e) => {
    let a = e.getAttribute("href");
    (a === `.${t}` ||
      ("/" === t && "./index.html" === a) ||
      ("/index.html" === t && "./" === a)) &&
      e.classList.add("active");
  });
});
