//Variables

var body = document.getElementById("bodi");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

//functions
function changecolor (){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+", "
	+ color2.value 
	+")";
}
//Adding Events

color1.addEventListener("input", changecolor);
color2.addEventListener("input", changecolor);

