// index.js

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const images = [
  { id: 1, url: "image1.jpg", caption: "Caption 1" },
  { id: 2, url: "image2.jpg", caption: "Caption 2" },
  // Add more images and captions as needed
];

app.get("/", (req, res) => {
  res.send("Hello, this is your API!");
});

app.get("/images", (req, res) => {
  res.json(images);
});

app.get("/images/:id", (req, res) => {
  const imageId = parseInt(req.params.id);
  const image = images.find((img) => img.id === imageId);

  if (!image) {
    res.status(404).json({ error: "Image not found" });
    return;
  }

  res.json(image);
});

// Add a new image
app.post("/images", (req, res) => {
  const { url, caption } = req.body;

  if (!url || !caption) {
    res.status(400).json({ error: "Both URL and caption are required" });
    return;
  }

  const newImage = {
    id: images.length + 1,
    url,
    caption,
  };

  images.push(newImage);
  res.status(201).json(newImage);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
