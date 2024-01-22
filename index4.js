import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 4177;
let bandName = "";

function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body.street + req.body.pet;
  next();
}

app.use(express.urlencoded({ extended: true }));
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName} 👌🏾`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
