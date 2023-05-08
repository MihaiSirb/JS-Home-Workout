// Exercitiul 1.
// Returnează un boolean dacă un număr este divizibil cu 10.
function myBoolean (x) {
  return x % 10 == 0;
}
let x = 100;
let myBoolean2 = myBoolean (x);
console.log (myBoolean (x));

let y = 23;
console.log (myBoolean (y));


// Exercitiul 2.
// Functie utilizand siruri templetizate $.
function tellFortune (n, z, y, x) {
    numarCopii = n,
    numePartener = z,
    locatieGeografica = y,
    locMunca = x;
    let sentence = `Vei fi un ${x} în ${y} căsătorit cu ${z} și vei avea ${n} copii.`
    console.log (sentence)
    let sentence2 =`Vei fi un ${locMunca} în ${locatieGeografica} căsătorit cu ${numePartener} și vei avea ${numarCopii} copii.`
    console.log (sentence)
}
tellFortune (3, 'Emanuel', 'Italia', 'Programator')


// Exercitiul 3.
// Ziua saptamanii folosind switch.
function telltheday (day) {
    switch (day) {
        case 1:
            console.log ('Luni')
            break
        case 2:
            console.log ('Marti')
            break
        case 3:
            console.log ('Miercuri')
            break
        case 4:
            console.log ('Joi')
            break
        case 5:
            console.log ('Vineri')
            break
        case 6:
            console.log ('Sambata')
            break
        case 7:
            console.log ('Duminica')
            break
        default:
            console.log (day)
    }
}
telltheday (1)
telltheday (5)