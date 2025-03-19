const express = require("express");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3003;

app.get("/assets/*", async (req, res) => {
  try {
    const imagePath = path.join(__dirname, req.path);
    const width = parseInt(req.query.width) || null;
    const height = parseInt(req.query.height) || null;

    if (!fs.existsSync(imagePath)) {
      return res.status(404).send("Image not found");
    }

    let transform = sharp(imagePath);

    if (width || height) {
      transform = transform.resize(width, height, {
        fit: "contain",
        withoutEnlargement: true,
      });
    }

    res.setHeader(
      "Content-Type",
      "image/" + path.extname(imagePath).substring(1)
    );
    transform.pipe(res);
  } catch (error) {
    console.error("Image processing error:", error);
    res.status(500).send("Error processing image");
  }
});

app.listen(PORT, () => {
  console.log(`Image processing server running on port ${PORT}`);
});
