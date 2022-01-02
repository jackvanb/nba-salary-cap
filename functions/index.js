const cheerio = require("cheerio");
const fetch = require("node-fetch");
const functions = require("firebase-functions");

let cachedCapSpace = null;

exports.capSpace = functions.https.onCall(async (data, context) => {
  if (cachedCapSpace != null) {
    return cachedCapSpace;
  }

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
    cachedCapSpace = nbaCapSpace;
    return nbaCapSpace;
  } catch (error) {
    console.error(error);
    return [];
  }
});

const cachedTeamCapSpace = {};

exports.teamCapSpace = functions.https.onCall(async (data, context) => {
  // Format the team name to the url path for Sportrac request.
  // i.e Golden State Warriors -> golden-state-warriors
  const teamUrlPath = data.teamName.replace(/\s+/g, "-").toLowerCase();
  const sportTracUrl = `https://www.spotrac.com/nba/${teamUrlPath}/cap/`;

  if (cachedTeamCapSpace[teamUrlPath] != null) {
    return cachedTeamCapSpace[teamUrlPath];
  }
  try {
    const response = await fetch(sportTracUrl);
    if (!response.ok) {
      console.error(response.statusText);
      return [];
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    const teamCapSpace = [];
    // Loop through the first table only.
    const firstTable = $("body").find("table")[0];
    const cheerioFirstTable = $(firstTable).find("tbody > tr");

    cheerioFirstTable.each((index, element) => {
      const row = $(element).find("td");
      const playerName = $(row[0]).find("a").text();
      const salary = $(row[3]).text().trim();
      const capFigure = $(row[7]).find("span").text().trim();
      const capPercentage = $(row[8]).text().trim();
      teamCapSpace.push({
        playerName: playerName,
        salary: salary,
        capFigure: capFigure,
        capPercentage: capPercentage,
      });
    });
    cachedTeamCapSpace[teamUrlPath] = teamCapSpace;
    return teamCapSpace;
  } catch (error) {
    console.error(error);
    return [];
  }
});
