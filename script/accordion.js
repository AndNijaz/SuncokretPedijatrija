document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");
    const isOpen = content.style.maxHeight;

    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.style.maxHeight = null;
      item.style.paddingTop = "0";
      item.style.paddingBottom = "0";
    });

    document.querySelectorAll(".accordion-icon").forEach((icon) => {
      icon.classList.remove("rotate");
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
      icon.classList.add("rotate");
    }
  });
});
