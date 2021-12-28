const cheerio = require("cheerio");
const fetch = require("node-fetch");
const functions = require("firebase-functions");

exports.capSpace = functions.https.onCall(async (data, context) => {
  try {
    const response = await fetch("https://www.spotrac.com/nba/cap/");
    if (!response.ok) {
      console.error(response.statusText);
      return [];
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    const nbaCapSpace = [];
    // Loop through each team.
    $("table > tbody > tr").each((index, element) => {
      const row = $(element).find("td");
      const teamName = $(row[1]).find(".xs-hide").text();
      const teamCode = $(row[1]).find(".visible-xs").text();
      const totalCap = $(row[8]).text();
      const capSpace = $(row[9]).text();
      nbaCapSpace.push({
        teamCode: teamCode,
        teamName: teamName,
        totalCap: totalCap,
        capSpace: capSpace,
      });
    });
    return nbaCapSpace;
  } catch (error) {
    console.error(error);
    return [];
  }
});
