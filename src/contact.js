const mainContent = document.querySelector("main#content");

const contactBox = document.createElement("div");
contactBox.classList.add("contact-box");

const P1 = document.createElement("p");
const P2 = document.createElement("p");

P1.textContent = "You don't contact us, we contact you. Our establishment is super exclusive (No one comes here).";
P2.textContent = "Anyway, feel free to checkout my GitHub below.";

contactBox.appendChild(P1);
contactBox.appendChild(P2);

export const getContact = function () {
    mainContent.innerHTML = "";
    mainContent.appendChild(contactBox);
    console.log("Contact accessed.");
};