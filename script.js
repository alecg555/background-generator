//Variables
let rgb = document.getElementById("rgb")
let body = document.getElementById("bodi");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

//functions
function changecolor (){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+", "
	+ color2.value 
	+")";

	rgb.textContent = body.style.background+";";
}
//Adding Events

color1.addEventListener("input", changecolor);
color2.addEventListener("input", changecolor);

