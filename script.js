//Variables

let bodi = document.getElementById("bodi"),color1 = document.getElementById("color1"),color2 = document.getElementById("color2");

//functions
const changecolor = ()=>{
	bodi.style.background = "linear-gradient(to right,"+color1.value+","+color2.value");";
}
//Adding Events

color1.addEventListener("input",changecolor);
color2.addEventListener("input",changecolor)