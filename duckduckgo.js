/*
	Only test for Chrome
*/

var timeToDark = new Date();

if(timeToDark.getHours() >= 0 || timeToDark.getHours() <= 20){ // Fonction qui fait une action entre 20h et miniut

	document.body.style.backgroundColor = "black"; // Affiche le background de la page en noir
}

colorLinks("#B894FF"); // définie la couleur en #B894FF (violet)

function colorLinks(hex){

    var links = document.getElementsByTagName("a"); // Prend tout les élément "a"
    for(var i=0;i<links.length;i++){
        if(links[i].href){
            links[i].style.color = hex;  
        }
    }  
}

document.body.onload = addElement;

function addElement () {

  var newDiv = document.createElement("p");  // crée un nouvel élément p
 
  var newContent = document.createTextNode("Créer par Enzo F. Utilisez DuckDuckGo, Ils ont pas de scandales, comparé à Qwant et Google !");
  
  newDiv.appendChild(newContent);
  
  var currentDiv = document.getElementById("p1"); // ajoute le nouvel élément créé et son contenu dans le DOM
  document.body.insertBefore(newDiv, currentDiv);

  document.body.style.color = "white"; // Mes la couleur en blanc
}