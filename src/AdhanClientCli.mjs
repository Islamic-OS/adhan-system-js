import inquirer from "inquirer";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import packageJson from "../package.json" assert { type: "json" };
import timezones from "./assets/timezones.json" assert { type: "json" };
import methods from "./assets/methods.json" assert { type: "json" };

const configFilePath = "adhancfg.json";

const writeConfig = (type, data) => {
  let config = readFileSync(join(process.cwd(), configFilePath), "utf8");
  config = JSON.parse(config);

  config[type] = data;

  writeFileSync(join(process.cwd(), configFilePath), JSON.stringify(config));
};

const greetAndVersion = () => {
  // console.clear();

  console.log("      __     ______   __     __     __     ___    __   ", chalk.green("     _______ __       ________"));
  console.log("     /  /\\  |   __  \\|   |  |   |  /  /\\  |   |\\ |   | ", chalk.green("    /  ____  \\ |     |__    __|"));
  console.log("    /  /  \\ |  |  \\  \\   |__|   | /  /  \\ |   | \\|   | ", chalk.green("   /  /    \\__||        |  |"));
  console.log("   /  /_\\  \\|  |   |  |         |/  /_\\  \\|   |  \\   | ", chalk.green("  |  |      |  |        |  |"));
  console.log("  /  _____  \\  |   |  |   __    |  _____  \\   |\\  \\  | ", chalk.green("  |  |      __ |        |  |"));
  console.log(" /  /     \\  \\ |__/  /   |  |   | /     \\  \\  | \\  \\ | ", chalk.green("   \\  \\____/  ||______ _|  |__"));
  console.log("/__/       \\__\\____ /|__ |  |__ |/       \\__\\ |  \\__\\| ", chalk.green("    \\ ______ /_______ |______ |"));

  console.log("\n");
  console.log(chalk.green("Adhan Client CLI"), chalk.bgGreen("v" + packageJson.version));
  console.log("\n\n");
}


greetAndVersion();



// Configuration questions
inquirer
  .prompt([
    {
      type: "list",
      name: "timezone_continent",
      message: "Select your timezone continent",
      choices: [
        "Africa",
        "America",
        "Antarctica",
        "Asia",
        "Atlantic",
        "Australia",
        "Europe",
        "Indian",
        "Pacific",
      ],
    },
    {
      type: "list",
      name: "method",
      message: "Select your prayer calculation method",
      choices: methods,
    },
    {
      type: "list",
      name: "juristic",
      message: "Select your juristic method",
      choices: [
        {
          name: "Standard (Shafi, Hanbli, Maliki)",
          value: "0",
        },
        {
          name: "Hanafi",
          value: "1",
        },
      ],
    },
    {
      type: "list",
      name: "timeFormat",
      message: "Select your time format",
      choices: [
        {
          name: "24 Hour Format",
          value: "0",
        },
        {
          name: "12 Hour Format",
          value: "1",
        },
        {
          name: "12 Hour Format w/o Suffix",
          value: "2",
        },
        {
          name: "Floating Number",
          value: "3",
        },
      ],
    },
  ])
  .then(async (answers) => {
    console.log(
      "\n\n",
      chalk.blueBright("Please Select Your Timezone Under"),
      chalk.green(answers.timezone_continent),
      "\n\n"
    );

    switch (answers.timezone_continent) {
      case "Africa":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_africa",
              message: "Select your timezone",
              choices: timezones.Africa,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_africa);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_africa)
            );
          });
        break;

      case "America":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_america",
              message: "Select your timezone",
              choices: timezones.America,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_america);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_america)
            );
          });
        break;

      case "Antarctica":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_antarctica",
              message: "Select your timezone",
              choices: timezones.Antarctica,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_antarctica);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_antarctica)
            );
          });
        break;

      case "Asia":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_asia",
              message: "Select your timezone",
              choices: timezones.Asia,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_asia);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_asia)
            );
          });
        break;

      case "Atlantic":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_atlantic",
              message: "Select your timezone",
              choices: timezones.Atlantic,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_atlantic);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_atlantic)
            );
          });
        break;

      case "Australia":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_australia",
              message: "Select your timezone",
              choices: timezones.Australia,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_australia);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_australia)
            );
          });
        break;

      case "Europe":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_europe",
              message: "Select your timezone",
              choices: timezones.Europe,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_europe);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_europe)
            );
          });
        break;

      case "Indian":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_indian",
              message: "Select your timezone",
              choices: timezones.Indian,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_indian);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_indian)
            );
          });
        break;

      case "Pacific":
        await inquirer
          .prompt([
            {
              type: "list",
              name: "timezone_pacific",
              message: "Select your timezone",
              choices: timezones.Pacific,
            },
          ])
          .then((answer2) => {
            writeConfig("timezone", answer2.timezone_pacific);

            console.log(
              chalk.green("Timezone set to " + answer2.timezone_pacific)
            );
          });
        break;
    }

    writeConfig("method", answers.method);

    console.log(chalk.green("Method set to " + answers.method));

    writeConfig("juristic", answers.juristic);

    console.log(chalk.green("Juristic set to " + answers.juristic));

    writeConfig("time_format", answers.timeFormat);

    console.log(chalk.green("Time format set to " + answers.timeFormat));

    console.log("\n\n");
    console.log(chalk.green("[Adhan Client]"), "Configuration complete!");
    console.log(chalk.green("[Adhan Client]"), "Exited...");
  });
