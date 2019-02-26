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

//Background Radian


let radian1 = document.getElementById("radian1");
let radian2 = document.getElementById("radian2");
let radian3 = document.getElementById("radian3");
let tipo = document.getElementById("tipo");
let firstpor = document.getElementById("firstpor");
let secondpor = document.getElementById("secondpor");
let thirdpor = document.getElementById("thirdpor");

const changeradiancolor = ()=>{
    
	body.style.backgroundImage = "radial-gradient(circle "+tipo.value+","+radian1.value+" "+firstpor.value+","+ radian2.value+" "+secondpor.value+","+radian3.value+" "+ thirdpor.value+")";

	console.log("radial-gradient(circle "+tipo.value+","+radian1.value+" "+firstpor.value+","+ radian2.value+" "+secondpor.value+","+radian3.value+" "+ thirdpor.value+")");
}




radian1.addEventListener("input",changeradiancolor);
radian2.addEventListener("input",changeradiancolor);
radian3.addEventListener("input",changeradiancolor);



