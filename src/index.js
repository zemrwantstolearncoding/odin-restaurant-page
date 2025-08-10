import "./styles.css";
import { getHome } from "./home.js";
import { getMenu } from "./menu.js";
import { getContact } from "./contact.js";
import { getAbout } from "./about.js";

console.log("WE ARE COOKING...");

getHome();

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", getHome);

const menuButton = document.querySelector("button#menu");
menuButton.addEventListener("click", getMenu);

const contactButton = document.querySelector("button#contact");
contactButton.addEventListener("click", getContact);

const aboutButton = document.querySelector("button#about");
aboutButton.addEventListener("click", getAbout);

const menuButton2 = document.querySelector("button#menu.section-button");
menuButton2.addEventListener("click", getMenu);
