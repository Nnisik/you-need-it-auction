// Scrolls to the certain section of the page
function goToPageSection(sectionID) {
    document.getElementById(sectionID).scrollIntoView();
}

// Creates a new lot element and appends it to the lots section
function drawNewLot(lot) {
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

    // Creating and appending the lot description
    const lotDescription = document.createElement("p");
    lotDescription.classList.add("lot-text");
    lotDescription.append(lot.description); // Set the description text from the lot object
    lotInfo.appendChild(lotDescription);

    // Append lot information to the main lot container
    newLot.appendChild(lotInfo);
    lotsSection.appendChild(newLot); // Append the new lot to the lots section
}

// Selecting the sections of the page for manipulation
var lotsSection = document.querySelector(".lots_lots-grid");
var aboutSection = document.querySelector(".about_text");

// Array of lots information including images, headers, and descriptions
// Lot objects
const lotsInfo = [
    {
        "img": "assets/pixlr-image-generator-fe71e76f-6fb2-4583-b639-578520d293ba.png",
        "header": "The Enchanted Hourglass",
        "description": "Step into a realm of magic with this exquisite hourglass, crafted from shimmering crystal " +
            "and enchanted with ancient runes. As time flows through it, the sand transforms into sparkling " +
            "stardust, symbolizing lost moments and dreams yet to be fulfilled. This one-of-a-kind piece not only " +
            "serves as a stunning decorative item but also invites you to pause and reflect on the beauty of time " +
            "itself. Perfect for collectors of mystical artifacts or those seeking a unique conversation starter."
    },
    {
        "img": "assets/pixlr-image-generator-41d15156-b956-4a8f-8b6b-14519b88baf4.png",
        "header": "Victorian-Era Music Box",
        "description": "Step back in time with this exquisite Victorian music box, intricately carved from mahogany " +
            "and adorned with brass accents. When wound, it plays a delicate rendition of Clair de Lune, transporting " +
            "you to a bygone era. Measuring 6 inches in width, it's an elegant decor piece that whispers stories of " +
            "the past. Ideal for music enthusiasts and vintage collectors."
    },
    {
        "img": "assets/pixlr-image-generator-7f235d38-0ad7-433e-9419-cd4e8c716fee.png",
        "header": "The Whispering Woods Painting",
        "description": "Immerse yourself in the serene beauty of Whispering Woods, a breathtaking oil painting by " +
            "renowned artist Elara Dune. This vibrant landscape captures a magical forest at twilight, where the trees " +
            "seem to breathe and the leaves rustle with secrets. Each brushstroke tells a story, drawing you into a " +
            "world of tranquility and wonder. Ideal for art lovers or anyone wishing to bring a touch of enchantment " +
            "into their home, this piece will become the centerpiece of any room."
    }
];
// About text paragraphs
const aboutText = [
    {
        text: "Welcome to the Mystical Treasures Auction, a unique opportunity to acquire extraordinary artifacts " +
            "that transcend time and reality. This exclusive event showcases a carefully curated selection of " +
            "enchanting items, each with its own story and magic."
    },
    {
        text: "Among our featured lots is \"The Enchanted Hourglass,\" a breathtaking piece that captures the essence" +
            "of time and wonder. This exquisite hourglass, crafted from shimmering crystal and adorned with ancient" +
            "runes, invites you to reflect on the beauty of moments lost and dreams yet to be fulfilled."
    },
    {
        text: "Join us as we delve into a world of imagination and intrigue. Whether you're a seasoned collector or " +
            "simply looking to add a touch of magic to your life, this auction promises to deliver unforgettable " +
            "treasures. Don’t miss your chance to own a piece of enchantment!"
    }
];

// On window load, draw all lots and populate the about section
window.onload = () => {
    lotsInfo.forEach(lot => {
        drawNewLot(lot); // Draw each lot on the page
    });

    aboutText.forEach(paragraph => {
        const paragraphText = document.createElement("p");
        paragraphText.append(paragraph.text); // Append the paragraph text
        aboutSection.appendChild(paragraphText); // Add paragraph to about section
    })
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('Happy developing ✨')

    document.getElementById("bet-button").onclick = () => {
        goToPageSection("lots"); // Trigger scroll to lots section on button click
    }
});