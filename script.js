//Variables

let bodi = document.getElementById("bodi");
let color1 = document.querySelectorAll(".color1");
let color2 = document.querySelectorAll("color2");

//functions
const changecolor = ()=>{
	bodi.style.background = "linear-gradient(to right,"+color1.value+","+color2.value")";
}
//Adding Events

color1.addEventListener("input",changecolor);
color2.addEventListener("input",changecolor);