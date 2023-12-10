document.addEventListener("DOMContentLoaded", function() {
  const modeToggle = document
  .getElementById("modeToggle");

  modeToggle.addEventListener("change", function() {
    document
    .body
    .classList
    .toggle("dark-mode", modeToggle.checked);
  });
});
