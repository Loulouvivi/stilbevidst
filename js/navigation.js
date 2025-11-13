// Find knappen og menuen
const bars = document.getElementById("bars");
const nav = document.getElementById("nav");

// Når der klikkes på bars-knappen
bars.addEventListener("click", function() {

// Viser eller skjuler menuen
nav.classList.toggle("show");

// Skifter ikon mellem "bars" og "x"
const icon = bars.querySelector("i");
icon.classList.toggle("fa-bars");
icon.classList.toggle("fa-xmark");

// Tilgængelighed (viser om menuen er åben eller lukket)
const isOpen = bars.getAttribute("aria-expanded") === "true";
bars.setAttribute("aria-expanded", !isOpen);
});
