// Exercitiul 1.
// Tipariti toate numerele pare de la 0 la 10.
function myNumbers () {
    for (let n = 0; n <= 10; n++) {
        if (n % 2 === 0) {
            console.log(n)
        }
    }
}
myNumbers ();


// Exercitiul 2.
// Calculati suma numerelor dintr-un sir de numere.
function mySum (numar) {
    console.log (numar.reduce ((x, y) => { return x + y }))
}
mySum ([1, -5, 20, -34, 16, 29, 36, -4]);

function mySum2 (numar) {
    console.log (numar.reduce ((x, y) => { return x + y }))
}
mySum2 ([3.45, -2.68, 356, -75.96, 64, 19.28]);


// Exercitiul 3.
// Creati o functie care inverseaza un sir de numere.
function reverse (numar) {
    return numar.reverse ()
}
console.log (reverse([1, -5, 20, -34, 16, 29, 36, -4]))


// Exercitiul 4.
// Returneaza numarul de vocale dintr-un sir de caractere (string).
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
const countVowels = (str) => {
    let stringVowels = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes (str[i])) {
            stringVowels.push (str[i])
        }
    }
    console.log(stringVowels.length)
}
countVowels("string de test")