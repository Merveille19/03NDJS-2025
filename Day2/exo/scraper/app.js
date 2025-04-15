
import * as cheerio from 'cheerio';

async function scrapeTable() {
  try {
    const $ = await cheerio.fromURL('https://fr.wikipedia.org/wiki/Liste_des_meilleurs_buteurs_en_s%C3%A9lection_nationale_de_football');
    console.log("Récupération réussie"); // Confirmation que la requête a fonctionné
    const tableData = [];

    $('table.wikitable tbody tr').each((index, element) => {
      if (index === 0) return;

      const columns = $(element).find('td');
      if (columns.length > 0) {
        const rowData = {};
        rowData['Rang'] = $(columns[0]).text().trim();
        rowData['Joueur'] = $(columns[1]).text().trim();
        rowData['Buts'] = $(columns[2]).text().trim();
        rowData['Sélections'] = $(columns[3]).text().trim();
        rowData['Ratio'] = $(columns[4]).text().trim();
        rowData['Période'] = $(columns[5]).text().trim();

        tableData.push(rowData);
      }
    });
    
    console.log(JSON.stringify(tableData, null, 2));

  } catch (error) {
    console.error("Erreur :", error);
  }
}

scrapeTable();

