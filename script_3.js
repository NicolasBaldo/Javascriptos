const height = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");


for (let i = 1; i <= height; i++) {
    
    console.log("#".repeat(i).padStart(height));
}
