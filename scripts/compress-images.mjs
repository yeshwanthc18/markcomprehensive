import sharp from "sharp";
import fs from "fs";
import path from "path";

// Input & Output folders
const inputDir = path.resolve("public/images");
const outputDir = path.resolve("public/compressed-images");

// Target quality (adjust 50-80 depending on size vs quality)
const quality = 60;

// Ensure output folder exists
fs.mkdirSync(outputDir, { recursive: true });

// Recursively compress images
async function compressImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const inputPath = path.join(dir, entry.name);
    const relativePath = path.relative(inputDir, inputPath);
    const outputPath = path.join(outputDir, relativePath);

    if (entry.isDirectory()) {
      fs.mkdirSync(outputPath, { recursive: true });
      await compressImages(inputPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      try {
        const ext = path.extname(entry.name).toLowerCase();
        const sharpInstance = sharp(inputPath);

        if (ext === ".png") {
          await sharpInstance
            .png({ quality, compressionLevel: 9 })
            .toFile(outputPath);
        } else {
          await sharpInstance
            .jpeg({ quality })
            .toFile(outputPath);
        }

        const originalSize = fs.statSync(inputPath).size / 1024;
        const newSize = fs.statSync(outputPath).size / 1024;

        console.log(
          `✅ ${relativePath} — ${originalSize.toFixed(1)}KB → ${newSize.toFixed(1)}KB`
        );
      } catch (err) {
        console.error(`❌ Failed: ${relativePath}`, err.message);
      }
    }
  }
}

compressImages(inputDir)
  .then(() => console.log("\n✨ Compression complete! Check /public/compressed-images"))
  .catch((err) => console.error("Error during compression:", err));
