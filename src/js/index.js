// Scrolls to the certain section of the page
function goToPageSection(sectionID) {
    document.getElementById(sectionID).scrollIntoView();
}

// Creates a new lot element and appends it to the lots section
function drawLot(lot) {
    // Initiating the lot container
    let newLot = document.createElement("div");
    newLot.classList.add("lot");

    // Creating and appending the lot image
    const lotImage = document.createElement("img");
    lotImage.classList.add("lot-img");
    lotImage.src = lot.img; // Set the image source from the lot object
    newLot.appendChild(lotImage);

    // Creating the information container for the lot
    const lotInfo = document.createElement("div");
    lotInfo.classList.add("lot-content");

    // Creating and appending the lot header
    const lotHeader = document.createElement("h3");
    lotHeader.classList.add("lot-header");
    lotHeader.append(lot.header); // Set the header text from the lot object
    lotInfo.appendChild(lotHeader);

    // Creating and appending the lot's description
    const lotDescription = document.createElement("p");
    lotDescription.classList.add("lot-text");
    lotDescription.append(lot.description); // Set the description text from the lot object
    lotInfo.appendChild(lotDescription);

    // Append lot information to the main lot container
    newLot.appendChild(lotInfo);
    lotsSection.appendChild(newLot); // Append the new lot to the lots section
}

function drawLotsSection() {
    fetch("./src/json/data-lots.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error: no file found");
            }
            return res.json()
        })
        .then((data) => {
            data.forEach((lot) => {
                drawLot(lot);
            })
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error)
        });
}

function fillAboutSection() {
    fetch("./src/json/data-about.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error: no file found");
            }
            return res.json()
        })
        .then((data) => {
            data.forEach((paragraph) => {
                const paragraphText = document.createElement("p");
                paragraphText.append(paragraph.text); // Append the paragraph text
                aboutSection.appendChild(paragraphText); // Add paragraph to about section
            })
        })
        .catch((error) => {
            console.error("Unable to fetch data:", error)
        });
}

// Selecting the sections of the page for manipulation
const lotsSection = document.querySelector(".lots-grid");
const aboutSection = document.querySelector(".about_text");

// On window load, draw all lots and populate the about section
window.onload = () => {
    drawLotsSection();
    fillAboutSection();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('Happy developing ✨')

    document.getElementById("bet-button").onclick = () => {
        goToPageSection("lots"); // Trigger scroll to lots section on button click
    }
});