// Creating lot image
function createLotImage(image) {
    const lotImage = document.createElement("img");
    lotImage.classList.add("lot__img");
    lotImage.src = image; // Set the image source from the lot object
    lotImage.alt = "Lot image"; // Provide a fallback if no header is present
    return lotImage;
}

// Creating lot header
function createLotHeader(text) {
    const lotHeader = document.createElement("h3");
    lotHeader.classList.add("lot__header");
    lotHeader.append(text); // Set the header text from the lot object
    return lotHeader;

}

// Creating lot text
function createLotText(text) {
    const lotText = document.createElement("p");
    lotText.classList.add("lot__text");
    lotText.append(text); // Set the description text from the lot object

}

// Creates a new lot element and appends it to the lots section
function drawLot(lot) {
    // Initiating the lot container
    let newLot = document.createElement("div");
    newLot.classList.add("lot");

    // Appending the lot image
    newLot.appendChild(createLotImage(lot.img));

    // Creating the information container for the lot
    const lotInfo = document.createElement("div");
    lotInfo.classList.add("lot__content");

    // Appending the lot header
    lotInfo.appendChild(createLotHeader(lot.header));

    // Appending the lot's description
    lotInfo.appendChild(createLotText(lot.description));

    // Append lot information to the main lot container
    newLot.appendChild(lotInfo);
    lotsSection.appendChild(newLot); // Append the new lot to the lots section
}

async function drawLotsSection() {
    try {
        const res = await fetch("./src/json/data-lots.json");
        if (!res.ok) {
            throw new Error("Error: no file found");
        }
        const data = await res.json();
        data.forEach((lot) => drawLot(lot));
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}

// Selecting the sections of the page for manipulation
const lotsSection = document.querySelector(".lots-grid");

document.addEventListener("DOMContentLoaded", () => {
    console.log('Happy developing ✨')

    drawLotsSection();
});
