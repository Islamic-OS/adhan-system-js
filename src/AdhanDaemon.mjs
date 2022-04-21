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

    let latitudeQuery = `latitude=${lat}`;
    let longitudeQuery = `longitude=${lon}`;
    let timezoneQuery = `timezone=${config.timezone}`;
    let methodQuery = `method=${config.method}`;
    let juristicQuery = `juristic=${config.juristic}`;
    let timeFormatQuery = `timeFormat=${config.time_format}`;

    let queryString = `${latitudeQuery}&${longitudeQuery}&${timezoneQuery}&${methodQuery}&${juristicQuery}&${timeFormatQuery}`;

    let url = `http://islamicfinder.us/index.php/api/prayer_times?${queryString}`;

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
  });
}, 1000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Daemon listening on port ${port}!`);
});
