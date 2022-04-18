import express from "express";
const app = express();
import axios from "axios";
import { join } from "path";
import { readFileSync } from "fs";
import chalk from "chalk";
import { Navigator } from "node-navigator";

const navigator = new Navigator();

const port = 33333;
const configFilePath = "adhancfg.json";

console.clear();

const getConfig = () => {
  const config = JSON.parse(
    readFileSync(join(process.cwd(), configFilePath), "utf8")
  );

  return config;
};

setInterval(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.latitude;
    let lon = position.longitude;

    const config = getConfig();
    let url = `http://islamicfinder.us/index.php/api/prayer_times?`;
  });
}, 1000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Daemon listening on port ${port}!`);
});
