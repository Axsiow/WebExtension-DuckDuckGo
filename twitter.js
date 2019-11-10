/*
BONSOIR PARIS
*/

var timeToDark = new Date();

if(timeToDark.getHours() >= 0 || timeToDark.getHours() <= 20){
	document.body.style.border = "5px solid blue";
	// document.getElementsByClassName("page-wrapper").style.backgroundColor = "#1f1f1f";
	document.body.style.backgroundColor = "black";
}


