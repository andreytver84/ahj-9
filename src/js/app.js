const collapseBtn = document.querySelector(".collapse-btn");
const collapseBlock = document.querySelector(".collapse-block");
const collapseContent = document.querySelector(".collapse-content");

collapseBtn.addEventListener("click", () => {
  if (collapseBlock.classList.contains("collapsed")) {
    collapseBlock.style.maxHeight = `${collapseContent.scrollHeight + 4}px`;
    collapseBlock.classList.remove("collapsed");
  } else {
    collapseBlock.style.maxHeight = 0;
    collapseBlock.classList.add("collapsed");
  }
});
