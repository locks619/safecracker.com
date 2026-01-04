import { writeFileSync, existsSync, mkdirSync } from "node:fs";

mkdirSync("docs", { recursive: true });

// Only create these if missing (prevents dirty working tree after build)
if (!existsSync("docs/CNAME")) {
  writeFileSync("docs/CNAME", "safecrackerinc.com\n", "utf8");
}
if (!existsSync("docs/.nojekyll")) {
  writeFileSync("docs/.nojekyll", "", "utf8");
}

console.log("postbuild: ensured docs/CNAME + docs/.nojekyll (no-rewrite)");
