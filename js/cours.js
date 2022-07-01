var premierePartie2 = ["L'oiseau sur le baobabe", "Le crocodile dans la rivière", "Le chien sur son coussin", "Le dragon de feu"];
var deuxiemePartie2 = [" ne dois pas oublier que parfois il", " est le symbole de toutes vie quand il", " a l'air intelligent lorsqu'il", " exprime son besoin primaire au moment ou il"];
var troisiemePartie2 = [" porte les lunettes.", " se soulage au soleil.", " ronfle la bouche ouverte.", " fais un barbecue."];

// renvoit un entier entre 0 et max
function indiceAleatoire(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// renvoit une citation aléatoire
function getRandomCitation2() {
	return(premierePartie2[indiceAleatoire(premierePartie2.length)] + deuxiemePartie2[indiceAleatoire(deuxiemePartie2.length)] + troisiemePartie2[indiceAleatoire(troisiemePartie2.length)]);
}

// ajoute un écouteur de click sur le bouton
document.getElementById("button").addEventListener('click', function() {
	// récupère le nb de citation demandé
	var nbCitationElm = document.getElementById('nbCitation');
	var nbCitation = nbCitationElm.options[nbCitationElm.selectedIndex].value;
	// génère nbCitation citations
	for (var i = 0; i < nbCitation; i++) {
		// génère une nouvelle citation
		var nouvelleCitation = getRandomCitation();
		// ajoute la nouvelle citation au html dans un paragraphe
		document.getElementById("citation").innerHTML += '<p>'+nouvelleCitation+'</p>';
	}
});
