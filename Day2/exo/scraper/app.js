// charger l'url du tableau dans cheerio

// importe le module 'axios' pour faire des requetes http
const axios = require('axios');
//importe le module cheerio pour manipuler le html
const cheerio = require('cheerio');
//definit l'url de la page a scraper
const url = 'https://fr.wikipedia.org/wiki/Liste_des_meilleurs_buteurs_en_s%C3%A9lection_nationale_de_football';
//verifions avec des consolelog qu'il a bien charger le code html, si oui on le recupere
axios.get('https://fr.wikipedia.org/wiki/Liste_des_meilleurs_buteurs_en_s%C3%A9lection_nationale_de_football')
	// si la requete marche
	.then((response) => {
		console.log("recuperation reusie");
		// recpere le contenu et on le charge dans cheerio 
		const $ = cheerio.load(response.data);
	})
	// si la requete echoue
	.catch((error) => {
		console.log(error);
	})

// 
