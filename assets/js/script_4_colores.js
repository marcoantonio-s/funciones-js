function negro(elemento) {
    elemento.style.backgroundColor = "black"
}

let eleazul = document.getElementById("d-azul")
let elerojo = document.getElementById("d-rojo")
let eleverde = document.getElementById("d-verde")
let eleamarillo = document.getElementById("d-amarillo")

eleazul.addEventListener("click", function() {
    negro(eleazul)
})

elerojo.addEventListener("click", function() {
    negro(elerojo)
})

eleverde.addEventListener("click", function() {
    negro(eleverde)
})

eleamarillo.addEventListener("click", function() {
    negro(eleamarillo)
})