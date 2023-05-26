var container1 = document.getElementById("container1")
var container2 = document.getElementById("container2")

for (let index = 0; index < 10; index++) {
    var rectangle = document.createElement("div");
    rectangle.classList.add("rectangle")
    container1.appendChild(rectangle)
    var square = document.createElement("div");
    square.classList.add("square")
    container2.appendChild(square)
}