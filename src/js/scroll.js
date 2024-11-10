// Scrolls to the certain section of the page
function goToPageSection(sectionID) {
    document.getElementById(sectionID).scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("bet-button").onclick = () => {
        goToPageSection("lots"); // Trigger scroll to lots section on button click
    }
});

// Set up the scroll event listener
window.addEventListener('scroll', () => {
    // Calculate the scroll percentage based on the page scroll position
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Map the scroll percentage to an integer between 1 and 100
    const intValue = Math.round(scrollPercentage * 100);

    // Ensure the integer value stays between 1 and 100
    const clampedValue = Math.min(100, Math.max(1, intValue));

    const isHeaderHidden = (clampedValue > 4 && clampedValue < 44) || (clampedValue > 54 && clampedValue < 89);
    document.querySelector("header").style.opacity = isHeaderHidden ? 0 : 1;


    // Print the integer value to the console
    console.log(clampedValue);
});