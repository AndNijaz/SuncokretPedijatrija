var map=L.map("map").setView([43.866,18.398],14);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);var marker=L.marker([43.866,18.398]).addTo(map);document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelectorAll(".main-nav-link"),t=window.location.pathname;e.forEach(e=>{e.getAttribute("href")===`.${t}`&&e.classList.add("active")})});
