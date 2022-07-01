var premierePartie = ["Le lapin noir", "L'oiseau dans le ciel", "Le verre de terre sous le sol", "Le poisson dans l'ocean"];
var deuxiemePartie = [" représente un interet particulier lorsqu'il", " est digne de tout respect au moment ou il", " montre son mécontentement au moment ou il", " se sent mal quand il"];
var troisiemePartie = [" fais des galipettes.", " explose de rire.", " bronze sur la plage.", " va manger des sushis."];

var premierePartie2 = ["L'oiseau sur le baobabe", "Le crocodile dans la rivière", "Le chien sur son coussin", "Le dragon de feu"];
var deuxiemePartie2 = [" ne dois pas oublier que parfois il", " est le symbole de toutes vie quand il", " a l'air intelligent lorsqu'il", " exprime son besoin primaire au moment ou il"];
var troisiemePartie2 = [" porte les lunettes.", " se soulage au soleil.", " ronfle la bouche ouverte.", " fais un barbecue."];

function indiceAleatoire(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function getRandomCitation() {
	return(premierePartie[indiceAleatoire(premierePartie.length)] + deuxiemePartie[indiceAleatoire(deuxiemePartie.length)] + troisiemePartie[indiceAleatoire(troisiemePartie.length)]);
}

function getPrompt() {
	var nbCitation = prompt("Bienvenue dans le générateur de citation manuel, veuillez saisir le nombre de citation compris entre 1 et 5 que vous souhaitez générer.");

	 // formatage du nb : renvoit soit un entier absolue soit NaN
	nbCitation = Math.abs(parseInt(nbCitation));
	// gestion des erreurs
	while (nbCitation < 1 || nbCitation > 5 || isNaN(nbCitation)) {
		nbCitation = prompt("Valeur non valide, veuillez saisir un entier compris entre 1 et 5.");
	}

	for (var i = 0; i < nbCitation; i++) {	
		var nouvelleCitation = getRandomCitation();
		console.log(nouvelleCitation);
	}
}

// Propose le choix entre les deux générateurs
var choixGenerateur = prompt("Veuillez saisir 1 pour le générateur manuel et 2 pour le générateur automatique");

	 // formatage du nb : renvoit soit un entier absolue soit NaN
	choixGenerateur = Math.abs(parseInt(choixGenerateur));
	// gestion des erreurs
	while (choixGenerateur < 1 || choixGenerateur > 2 || isNaN(choixGenerateur)) {
		choixGenerateur = prompt("Valeur non valide, veuillez saisir un entier compris entre 1 et 2.");
}

// Si 1 est saisis, on est dirigé vers le premier générateur puis propose de continuer ou de quitter le générateur
if (choixGenerateur === 1) {
	while(1) {
		getPrompt();

		var recommence = prompt("Tapez 1 pour afficher de nouvelles citations ou 0 pour quitter.");
		recommence = Math.abs(parseInt(recommence));
		while (recommence < 0 || recommence > 1 || isNaN(recommence)) {
			recommence = prompt("Valeur non valide, tapez 1 pour afficher de nouvelles citations ou 0 pour quitter.");
		}
		if (recommence === 0) {
			console.log("Merci d'avoir utilisé notre générateur de citation, nous vous souhaitons une bonne journée");
			break;
		} else if (recommence === 1) {
			getPrompt();
		}
	}
} else if ( choixGenerateur === 2) {
	document.getElementById("generateur2").style.display="block";
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