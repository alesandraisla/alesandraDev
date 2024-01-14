document.addEventListener("DOMContentLoaded", function() {
  const snowflakesContainer = document.getElementById("snowflakes")

  for(let i = 0; i < 50; i++) {
    createSnowflake(snowflakesContainer)
  }
})

function createSnowflake(container) {
  const snowflake = document.createElement("div");
  snowflake.className = "snowflake";
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 4 + 4}s`
  snowflake.style.animationDelay = `${Math.random()}s`
  container.appendChild(snowflake);
}

