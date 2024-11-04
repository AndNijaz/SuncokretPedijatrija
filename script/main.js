const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
  },
});

app.mount(document.getElementById("appz"));

//header
const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");

btnToggleNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);
