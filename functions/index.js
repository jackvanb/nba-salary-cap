const cheerio = require("cheerio");
const fetch = require("node-fetch");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const universal = require("./server/main.js").app();
admin.initializeApp();

/* SSR rendering route used for Firebase Hosting */
exports.ssr = functions.https.onRequest(universal);

// Get the date.
const dateStr = new Date().toISOString().split("T")[0];

let cachedCapSpace = null;

exports.capSpace = functions.https.onCall(async (data, context) => {
  // Read from local cache.
  if (cachedCapSpace != null) {
    console.log("Read cap-space data from local cache.");
    return cachedCapSpace;
  }

  // Read from DB.
  const snapshot = await admin
    .database()
    .ref("cap-space")
    .child(dateStr)
    .once("value");
  if (snapshot.val()) {
    const nbaCapSpace = snapshot.val();
    cachedCapSpace = nbaCapSpace;
    console.log("Read cap-space data from db for date: " + dateStr);
    return nbaCapSpace;
  }

  // If not present in local or db, fetch data.
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
      const totalCap = $(row[7]).text();
      const capSpace = $(row[8]).text();
      nbaCapSpace.push({
        teamCode: teamCode,
        teamName: teamName,
        totalCap: totalCap,
        capSpace: capSpace,
      });
    });
    cachedCapSpace = nbaCapSpace;
    // Write to DB.
    await admin.database().ref("cap-space").child(dateStr).set(nbaCapSpace);
    console.log("Saved cap-sapce data to db for date: " + dateStr);
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

  // Read from local cache.
  if (cachedTeamCapSpace[teamUrlPath] != null) {
    console.log(`Read ${teamUrlPath} data from local cache.`);
    return cachedTeamCapSpace[teamUrlPath];
  }

  // Read from DB.
  const snapshot = await admin
    .database()
    .ref(teamUrlPath)
    .child(dateStr)
    .once("value");
  if (snapshot.val()) {
    const teamCapSpace = snapshot.val();
    cachedTeamCapSpace[teamUrlPath] = teamCapSpace;
    console.log(`Read ${teamUrlPath} data from db for date: ${dateStr}`);
    return teamCapSpace;
  }

  // If not present in local or db, fetch data.
  try {
    const response = await fetch(sportTracUrl);
    if (!response.ok) {
      console.error(response.statusText);
      return [];
    }
    const html = await response.text();
    const $ = cheerio.load(html);
    const teamCapSpace = [];
    // Find the first table within the 'teams' class.
    // This prevents parsing the 'Pending Transaction' table if it is present.
    const firstTable = $("body").find(".teams table")[0];
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
    // Write to DB.
    await admin.database().ref(teamUrlPath).child(dateStr).set(teamCapSpace);
    console.log(`Saved ${teamUrlPath} data to db for date: ${dateStr}`);
    return teamCapSpace;
  } catch (error) {
    console.error(error);
    return [];
  }
});
