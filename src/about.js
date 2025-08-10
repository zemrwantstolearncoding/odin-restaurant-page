const mainContent = document.querySelector("main#content");

const aboutBox = document.createElement("div");
aboutBox.classList.add("about-box");

const P1 = document.createElement("p");
const P2 = document.createElement("p");
const P3 = document.createElement("p");
P3.classList.add("shift-right");
const P4 = document.createElement("p");
const P5 = document.createElement("p");
const P6 = document.createElement("p");
const P7 = document.createElement("p");

P1.textContent = "Welcome to youdeatanythingifitlooksfancy, the establishment where taste takes a backseat to presentation, and your wallet takes the long way home.";
P2.textContent = "We are the proud pioneers of Culinary Performance Art, a discipline that asks the eternal question:";
P3.textContent = '“If it’s plated with tweezers, does it even matter what it tastes like?”';
P4.textContent = "Here, food is not meant to merely feed you — it is meant to challenge you, confuse you, and give you something smug to post online. Every dish is a story, every garnish an unnecessary flourish, every bite a fleeting reminder that you’re paying for the experience, not the sustenance.";
P5.textContent = "Our chefs are artists, philosophers, and occasional magicians — able to turn three peanuts and a sprig of parsley into a $300 entrée. We work exclusively with seasonal ingredients, preferably ones so obscure you’ll have to Google them at the table.";
P6.textContent = "We believe in: Minimal plating, maximal price tags. Descriptions that take longer to read than the dish takes to eat. Menu items that sound better than they taste. The perfect balance between edible and interpretive.";
P7.textContent = "So come for the ambiance, stay for the conceptual hunger. Because deep down, we all know — you’d eat anything if it looks fancy.";

aboutBox.appendChild(P1);
aboutBox.appendChild(P2);
aboutBox.appendChild(P3);
aboutBox.appendChild(P4);
aboutBox.appendChild(P5);
aboutBox.appendChild(P6);
aboutBox.appendChild(P7);

export const getAbout = function () {
    mainContent.innerHTML = "";
    mainContent.appendChild(aboutBox);
    console.log("About accessed.");
};