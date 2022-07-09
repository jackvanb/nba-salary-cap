const fs = require("fs-extra");

(async () => {
  const src = "../dist/nba-salary-cap/server/main.js";
  const copy = "./server/main.js";

  await fs.remove(copy);
  await fs.copy(src, copy);
})();
