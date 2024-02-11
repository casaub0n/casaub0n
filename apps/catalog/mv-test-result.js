const fs = require("fs-extra");

try {
  fs.copySync("../casaub0n-page/__reports__", "./storybook-static/__reports__");
  console.log("success!");
} catch (err) {
  console.error(err);
}
