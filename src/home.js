import "./home.css";
import bannerImagePath from "./banner-image.jpg";

const mainContent = document.querySelector("main#content");

const headingSection = document.createElement("div");
headingSection.classList.add("heading-section");

const menuSection = document.createElement("div");
menuSection.classList.add("menu-section");

const menuText = document.createElement("div");
menuText.classList.add("menu-text");

const P1 = document.createElement("p");
const P2 = document.createElement("p");
const P3 = document.createElement("p");
const P4 = document.createElement("p");

P1.classList.add("title");
P1.textContent = "The Menu: A culinary illusion.";

P2.innerHTML = `At <span class="italicize">youdeatanythingifitlooksfancy</span>, we specialize in turning the ordinary into the overhyped. Our dishes are less about satisfying hunger and more about stroking egos — yours, ours, and the food’s. You won’t understand half the ingredients, and that’s the point. If it sounds French, it must be fancy. If it’s plated with negative space and edible flowers, it must be art. Right?`;

P3.textContent = "This isn’t about flavor. This is about flexing. So lower your standards, raise your pinky, and tell yourself this is what culture tastes like.";

P4.textContent = `Go on. Pretend to care about the "mouthfeel."`;

menuText.appendChild(P1);
menuText.appendChild(P2);
menuText.appendChild(P3);
menuText.appendChild(P4);

const menuButton = document.createElement("button");
menuButton.id = "menu";
menuButton.classList.add("section-button");
menuButton.textContent = "The Menu";

menuSection.appendChild(menuText);
menuSection.appendChild(menuButton);

const welcome = document.createElement("div");
welcome.classList.add("welcome");

const P5 = document.createElement("p");
const P6 = document.createElement("p");
P6.classList.add("name");

P5.textContent = "Welcome to";
P6.textContent = "youdeatanythingifitlooksfancy";

welcome.appendChild(P5);
welcome.appendChild(P6);

const aboutPreview = document.createElement("div");
aboutPreview.classList.add("about-preview");

const aboutText = document.createElement("div");
aboutText.classList.add("about-text");

const P7 = document.createElement("p");
const P8 = document.createElement("p");
const P9 = document.createElement("p");

P7.textContent = `...where mediocrity meets minimal plating and microgreens save the day. We’re not your average fine-dining establishment. In fact, we’re barely edible. But who cares, right? Because if it’s served on a slate, drizzled with foam, and captioned in italics, you’ll eat it, photograph it, and probably tell your friends it "tasted like art."`;

P8.innerHTML = `Our mission? To take the most questionable food combos, wrap them in a narrative, and charge triple. Why? Because <span class="bolden">you’d eat anything if it looks fancy</span>.`;

P9.innerHTML = `Come for the <span class="italicize">vibes</span>, stay for the overpriced air.`;

aboutText.appendChild(P7);
aboutText.appendChild(P8);
aboutText.appendChild(P9);

const aboutButton = document.createElement("button");
aboutButton.id = "about";
aboutButton.classList.add("section-button");
aboutButton.textContent = "About Us";

aboutPreview.appendChild(aboutText);
aboutPreview.appendChild(aboutButton);

headingSection.appendChild(menuSection);
headingSection.appendChild(welcome);
headingSection.appendChild(aboutPreview);


const bannerSection = document.createElement("div");
bannerSection.classList.add("banner-section");

const bannerImage = document.createElement("img");
bannerImage.src = bannerImagePath;
bannerImage.alt = "Banner Image";

bannerSection.appendChild(bannerImage);


export const getHome = function () {
    mainContent.innerHTML = "";

    mainContent.appendChild(headingSection);
    mainContent.appendChild(bannerSection);
    console.log("Homepage accessed.");
};