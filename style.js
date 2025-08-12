// Show a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to My Website!");
};

// Change heading text color when clicked
document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");

    heading.addEventListener("click", function() {
        heading.style.color = heading.style.color === "tomato" ? "#2c3e50" : "tomato";
    });
});
