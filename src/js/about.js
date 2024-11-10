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
const aboutSection = document.querySelector(".about_text");

document.addEventListener("DOMContentLoaded", () => {
    console.log('Happy developing ✨')

    fillAboutSection();
});
