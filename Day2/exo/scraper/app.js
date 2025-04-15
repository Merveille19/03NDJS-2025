
import * as cheerio from 'cheerio';

async function scrapeTable() {
  try {
    const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Liste_des_meilleurs_buteurs_en_s%C3%A9lection_nationale_de_football');
    console.log("Récupération réussie"); // Confirme que la requête a reussi
    const tableData = [];
   
    // selectionne toutes les lignes tr du tableau avec la classe wikitable  
    $('table.wikitable tbody tr').each((index, element) => {
      if (index === 0) return; // on ignore la remiere ligne du tableau

      const columns = $(element).find('td'); // pour chaque ligne, on prend toutes les cellules td
      if (columns.length > 0) { // verifie qu'il y'a bien des cellules dans la ligne
        const rowData = {}; // on initialise un objet vide pour stocker les donnes de chaque ligne
        rowData['Rang'] = $(columns[0]).text().trim(); // recupere le texte de la cellule rang en suprimant les espaces et l'assigne a la propriete joueur de notre objet rowData
        rowData['Joueur'] = $(columns[1]).text().trim();
        rowData['Buts'] = $(columns[2]).text().trim();
        rowData['Sélections'] = $(columns[3]).text().trim();
        rowData['Ratio'] = $(columns[4]).text().trim();
        rowData['Période'] = $(columns[5]).text().trim();

        tableData.push(rowData); // on ajoute l'objet rowData a notre tableau tableData
      }
    });
    
    console.log(JSON.stringify(tableData, null, 2)); // affiche le tableau au format json avec une indentation de 2 espaces

	  // pour gerer les erreurs 
  } catch (error) {
    console.error("Erreur :", error);
  }
}

scrapeTable(); 

