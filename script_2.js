const number = prompt("De quel nombre veux-tu calculer la factorielle ?");

let result = 1;

for (let i = 1; i <= number; i++) {
    result *= i;
}

console.log("Le résultat est :", result);


