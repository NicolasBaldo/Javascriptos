const input = prompt("Tu peux parler au bot :");
if (!input) {
    console.log("t'es en PLS ?");
} else if (input.endsWith("?")) {
    console.log("Ouais Ouais...");
} else if (input === input.toUpperCase()) {
    console.log("Pwa, calme-toi...");
} else if (input.includes("Fortnite")) {
    console.log("on s' fait une partie soum-soum ?");
} else {
    console.log("balek.");
}
