const School = require("./school");
const school = new School();

school.on("BellRings", ({ period, text }) => {
  console.log(`We need to run it because ${period} ${text}`);
});

school.startPeriod();
