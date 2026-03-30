import fs from "node:fs";
import path from "node:path";

const sourcePath = path.resolve("assets/data/site-data-formatted.json");
const buildPath = path.resolve("assets/data/site-data.json");

const raw = fs.readFileSync(sourcePath, "utf8");

if (!raw.trim()) {
  throw new Error(`Source JSON is empty: ${sourcePath}`);
}

const data = JSON.parse(raw);
const output = JSON.stringify(data);

fs.writeFileSync(buildPath, output, "utf8");

console.log(`Built ${path.relative(process.cwd(), buildPath)} from ${path.relative(process.cwd(), sourcePath)}`);
