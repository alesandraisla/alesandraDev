const guirlanda = document.getElementById("guirlanda");

function addOrnamentacao() {
  const cores = ["red", "blue", "gold", "silver"]

  const tamanhoGuirlanda = 25 * 16
  const centerX = tamanhoGuirlanda / 2
  const centerY = tamanhoGuirlanda / 2


  for (let i = 0; i < 30; i++) {
    const enfeite = document.createElement("div")
    enfeite.classList.add("enfeite", cores[i % cores.length])

    const angle = Math.random() * Math.PI * 2;

    const radius = 120 + Math.random() * 80;

    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    enfeite.style.left = `${centerX + x}px`;
    enfeite.style.top = `${centerY + y}px`;

    guirlanda.appendChild(enfeite)

  }
}

addOrnamentacao();

