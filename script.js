var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
	color1.value = "#00ffff"
var color2 = document.querySelector(".color2");
	color2.value = "#ff0000"
var random = document.querySelector(".random");
var css = document.querySelector("h3");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.backgroundImage + ";";
};

function getRandom() {
	color1.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random() * 16777215).toString(16);
	setGradient();
};

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", getRandom);