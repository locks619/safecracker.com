const fs = require("fs");
const path = require("path");

const docs = path.join(process.cwd(), "docs");
if (!fs.existsSync(docs)) process.exit(0);

fs.writeFileSync(path.join(docs, "CNAME"), "safecrackerinc.com");
fs.writeFileSync(path.join(docs, ".nojekyll"), "");
console.log("postbuild: wrote docs/CNAME and docs/.nojekyll");
