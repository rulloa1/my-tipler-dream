import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const galleryDataPath = resolve(projectRoot, "gallery_data.json");
const publicRoot = resolve(projectRoot, "public");
const galleries = JSON.parse(readFileSync(galleryDataPath, "utf8"));

const missingAssets = [];
let assetCount = 0;

for (const [galleryName, assets] of Object.entries(galleries)) {
  for (const asset of assets) {
    assetCount += 1;
    const assetPath = resolve(publicRoot, asset.replace(/^\//, ""));

    if (!existsSync(assetPath)) {
      missingAssets.push(`${galleryName}: ${asset}`);
    }
  }
}

if (missingAssets.length > 0) {
  console.error(`Missing ${missingAssets.length} gallery asset(s):`);
  console.error(missingAssets.join("\n"));
  process.exit(1);
}

console.log(`Validated ${assetCount} gallery asset path(s) across ${Object.keys(galleries).length} galleries.`);
