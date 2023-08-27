const express = require("express");
const path = require("path");
const app = express();

const PORT = 8080;
const BUILD_FOLDER = process.argv[2] ?? "dist";

const initFile = path.join(__dirname, BUILD_FOLDER, "index.html")

app.use(express.static(path.join(__dirname, BUILD_FOLDER)));

app.get('/*', (req, res) => {
  res.sendFile(initFile);
});

const server = app.listen(PORT, (err) => {
  if (err) throw err
  console.log(`Website located at ${path.resolve(initFile)}\nAvaiable at http://localhost:${PORT}`)
});

process.on('SIGTERM', () => {
  server.close(() => console.log("Closed out remaining connections."));
});
