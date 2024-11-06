document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const downIcon = header.querySelector(".accordion-icon-down");
    const upIcon = header.querySelector(".accordion-icon-up");

    // Check if the current accordion item is open
    const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

    // Close all other accordion items
    document.querySelectorAll(".accordion-content").forEach((item) => {
      item.style.maxHeight = null;
      item.style.paddingTop = "0";
      item.style.paddingBottom = "0";
      const parentHeader = item.previousElementSibling;
      parentHeader
        .querySelector(".accordion-icon-down")
        .classList.remove("icon-hidden");
      parentHeader
        .querySelector(".accordion-icon-up")
        .classList.add("icon-hidden");
    });

    // If the clicked item was previously closed, open it
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "15px";
      content.style.paddingBottom = "15px";
      downIcon.classList.add("icon-hidden");
      upIcon.classList.remove("icon-hidden");
    }
  });
});
