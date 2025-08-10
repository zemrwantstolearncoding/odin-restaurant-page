import "./menu.css";
import foodImage1 from "./food-image-1.jpg";
import foodImage2 from "./food-image-2.jpg";
import foodImage3 from "./food-image-3.jpg";
import foodImage4 from "./food-image-4.jpg";
import foodImage5 from "./food-image-5.jpg";

import wineImage1 from "./wine-image-1.jpg";
import wineImage2 from "./wine-image-2.jpg";
import wineImage3 from "./wine-image-3.jpg";


const addFoodItem = function (image, name, label, about, price, discount) {
    const foodItem = document.createElement("div");
    foodItem.classList.add("food-item");

    const foodImage = document.createElement("img");
    foodImage.classList.add("food-image");
    foodImage.src = image;
    foodImage.alt = "food image";

    const foodDesc = document.createElement("div");
    foodDesc.classList.add("food-desc");

    const foodName = document.createElement("p");
    foodName.classList.add("food-name")
    foodName.textContent = name;

    const foodLabel = document.createElement("p");
    foodLabel.classList.add("food-label");
    foodLabel.textContent = label;

    const foodAbout = document.createElement("p");
    foodAbout.classList.add("food-about");
    foodAbout.textContent = about;

    const fullPrice = document.createElement("div");
    fullPrice.classList.add("full-price");

    const foodPrice = document.createElement("p");
    foodPrice.classList.add("food-price");
    foodPrice.textContent = price;

    if (discount) {
        const foodDiscount = document.createElement("p");
        foodDiscount.classList.add("food-discount");
        foodDiscount.textContent = discount;

        fullPrice.appendChild(foodDiscount);
        fullPrice.appendChild(foodPrice);
    }

    foodDesc.appendChild(foodName);
    foodDesc.appendChild(foodLabel);
    foodDesc.appendChild(foodAbout);
    if (discount) {
        foodDesc.appendChild(fullPrice);
    } else {
        foodDesc.appendChild(foodPrice);
    }

    foodItem.appendChild(foodImage);
    foodItem.appendChild(foodDesc);

    foodSection.appendChild(foodItem);
};

const addWineItem = function (image, name, label, about, price) {
    const wineItem = document.createElement("div");
    wineItem.classList.add("wine-item");

    const wineImage = document.createElement("img");
    wineImage.classList.add("wine-image");
    wineImage.src = image;
    wineImage.alt = "wine image";

    const wineDesc = document.createElement("div");
    wineDesc.classList.add("wine-desc");

    const wineName = document.createElement("p");
    wineName.classList.add("wine-name")
    wineName.textContent = name;

    const wineLabel = document.createElement("p");
    wineLabel.classList.add("wine-label");
    wineLabel.textContent = label;

    const wineAbout = document.createElement("p");
    wineAbout.classList.add("wine-about");
    wineAbout.textContent = about;

    const winePrice = document.createElement("p");
    winePrice.classList.add("wine-price");
    winePrice.textContent = price;

    wineDesc.appendChild(wineName);
    wineDesc.appendChild(wineLabel);
    wineDesc.appendChild(wineAbout);
    wineDesc.appendChild(winePrice);

    wineItem.appendChild(wineImage);
    wineItem.appendChild(wineDesc);

    wineSection.appendChild(wineItem);
};


const mainContent = document.querySelector("main#content");

const menuHead = document.createElement("p");
menuHead.classList.add("menu-heading");
menuHead.textContent = "OUR MENU: THE BARELY EDIBLES";

const menuContent = document.createElement("div");
menuContent.classList.add("menu-content");

const foodSection = document.createElement("div");
foodSection.classList.add("food-section", "border-right");

const foodHead = document.createElement("p");
foodHead.textContent = "ENTRÉES";

foodSection.appendChild(foodHead);

const wineSection = document.createElement("div");
wineSection.classList.add("wine-section");

const wineHead = document.createElement("p");
wineHead.textContent = "LIQUORS";

wineSection.appendChild(wineHead);


addFoodItem(foodImage1, '“Bird in Existential Crisis”', "Sous-vide pigeon resting in a puddle of ambiguity", "A minimalist triumph: one small bird, gently poached, staring into the void of your dining budget. Finished with a single microgreen to remind you of hope — fleeting, fragile, and overpriced.", "280.99");
addFoodItem(foodImage2, '“Beet Me to It”', "Beetroot Carpaccio with Cubes of Questionable Dairy", 'Paper-thin beets arranged like a floral apology. Garnished with mystery cubes (cheese? tofu? we won’t tell) and scattered with macadamia crumbs. Drizzled in sauces that scream “Instagram me!” louder than your conscience screams “$38 for this?”', "640.99", "38");
addFoodItem(foodImage3, '“Remnants of Glory”', "Chef’s Plate, Post-Performance", "Experience the essence of a dish without the distraction of the food itself. Smears of sauce, faint pasta traces, and the lingering ghost of satisfaction. For the diner who wants to eat with their imagination.", "299.99");
addFoodItem(foodImage4, '“Three Potatoes and a Dream”', "Micro Yukon Golds with a sprig of garnish", "Because carbs are life, but restraint is the new luxury. Three perfect baby potatoes, plated on enough white space to land a plane. Served with a fork that will do more work than the chef did.", "460.99");
addFoodItem(foodImage5, '“The Lone Nut”', "Deconstructed Peanut Experience", "A single, whole peanut, accompanied by a knife and fork for no reason other than intimidation. Minimalism pushed to the brink. We dare you to call it a snack.", "339.99");

addWineItem(wineImage1, "Blanton’s Blame – Small Batch No. 457", "Kentucky Straight Bourbon", "A bold pour for the bold soul — or the bold liar. Aged in oak barrels that may or may not have been haunted, this bourbon delivers a deep caramel embrace, a whisper of smoke, and a finish that makes you question your life choices. Served neat to remind you you’re not.", "560.99");
addWineItem(wineImage2, "Obsidian Reflection – Mystery Decanter", "Premium House Reserve", "No label. No history. No idea how it got here. Jk, actually we get it from Doug's local brewery down the street. Hey Doug, if you're reading this, we're gonna need some more of this stuff big man. Cheers. This rich amber spirit offers tasting notes of “probably whiskey” with undertones of existential dread. Best enjoyed when you don’t care what’s in the glass, only how it looks in your hand.", "800.99");
addWineItem(wineImage3, "Château du Regret – 1893", "Vintage Red Wine with an Unreadable Label", "A bottle so aged, its label has surrendered to time, mystery, and possibly rats. Notes of dust, oak, and “is this supposed to taste like that?” Perfect for impressing guests who won’t admit they don’t actually like wine.", "1,299.99");


menuContent.appendChild(foodSection);
menuContent.appendChild(wineSection);


export const getMenu = function () {
    mainContent.innerHTML = "";
    mainContent.appendChild(menuHead);
    mainContent.appendChild(menuContent);
    console.log("Menupage accessed.");
};