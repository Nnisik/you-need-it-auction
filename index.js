function goToLotsSection() {
    document.getElementById("lots").scrollIntoView();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('Happy developing ✨')

    document.getElementById("bet-button").onclick = () => {
        goToLotsSection();
    }
});