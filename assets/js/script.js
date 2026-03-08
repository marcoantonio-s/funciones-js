function pintar(elemento, color) {
  elemento.style.backgroundColor = color
}

const ele = document.getElementById("ele1")
pintar(ele, "green")

ele.addEventListener("click", function() {
  pintar(ele, "yellow")
})