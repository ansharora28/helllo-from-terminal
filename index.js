#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const styles = {
    padding: 1,
    width: 70,
    title: 'Hello World!',
    titleAlignment: 'center',
    borderStyle: 'round',
    borderColor: 'green',
};

const msgBox = {
    hello: chalk.white.bold("Hello World! This is Ansh."),
    intro: chalk.white.bold("I am a web developer, FOSS enthusiast and Community Manager"),
    work: chalk.blue.bold("Community Evangelist Intern at") + chalk.magenta.bold(" OpenWeaver"),
    community:chalk.bgYellow.red.bold("FOSS United and CityJS Conferences India"),
    linkedin:chalk.bgBlue.white.bold("https://www.linkedin.com/in/ansharorake2"),
    twitter:chalk.bgWhite.blue.bold("https://twitter.com/ansharora28"),
    github:chalk.bgBlack.white.bold("https://github.com/ansharora28"),
    email:chalk.bgWhite.red.bold("ansharora2802@gmail.com"),
    website:chalk.cyan.underline("https://ansharora.live"),
    labelWork: chalk.bgWhite.black.bold("Work"),
    labelCommunity: chalk.bgWhite.black.bold("Organiser"),
    labelLinkedIn: chalk.bgWhite.black.bold("LinkedIn"),
    labelTwitter: chalk.bgWhite.black.bold("Twitter"),
    labelGitHub: chalk.bgWhite.black.bold("GitHub"),
    labelEmail: chalk.bgWhite.black.bold("Email"),
    labelWeb: chalk.bgWhite.black.bold("Web"),
};
const newline = "\n";
const hello = `${msgBox.hello}`;
const intro = `${msgBox.intro}`;
const whoami = `${msgBox.labelWork} ${msgBox.work}`;
const whatido = `${msgBox.labelCommunity} ${msgBox.community}`;
const linkedin = `${msgBox.labelLinkedIn} ${msgBox.linkedin}`;
const twitter = `${msgBox.labelTwitter} ${msgBox.twitter}`;
const github = `${msgBox.labelGitHub} ${msgBox.github}`;
const email = `${msgBox.labelEmail} ${msgBox.email}`;
const website = `${msgBox.labelWeb} ${msgBox.website}`;


const output = 
    hello+ newline + intro + newline + newline + newline
    + whoami + newline
    + whatido + newline 
    + linkedin + newline
    + twitter + newline
    + github + newline
    + email + newline
    + website;

console.log(chalk.red(boxen(output, styles)));