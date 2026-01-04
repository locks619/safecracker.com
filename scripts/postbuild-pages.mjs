import { writeFileSync, existsSync } from "node:fs";
import { mkdirSync } from "node:fs";

mkdirSync("docs", { recursive: true });

// keep custom domain
writeFileSync("docs/CNAME", "safecrackerinc.com\n", "utf8");

// prevent Jekyll from eating underscore paths
writeFileSync("docs/.nojekyll", "", "utf8");

console.log("postbuild: ensured docs/CNAME + docs/.nojekyll");
