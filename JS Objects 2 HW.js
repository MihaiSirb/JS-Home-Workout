// Exercitiul 1.
// Scrieti o functie care creeaza un obiect pentru a pastra informatii despre rețeta ta preferata.
function RetetaPreferata (titlu, portii, ingrediente) {
    this.titlu = titlu;
    this.portii = portii;
    this.ingrediente = ingrediente;
}
const RetetaMeaPreferata = new RetetaPreferata ("Pizza", 3, ["sunca", "cas", "ketchup"])
console.log (RetetaMeaPreferata)

// Exercitiul 2.
// Scrieti o functie care returneaza un obiect nou fara proprietatile furnizate.
function MasinaMea (model , year) {
    delete model [year]
      return model
    }
console.log (MasinaMea ({nume:"Renault", stare:"excelenta",},"excelenta"))

// Exercitiul 3.
/* Creati un sir de obiecte in care fiecare obiect descrie o carte si are proprietati 
precum titlu (un sir de caractere - string), autor (un sir de caractere - string) și este citit 
(un boolean care indica dacă ati citit-o).
*/
function myBooks (books) {
  for (let i = 0; i < books.length; i++) {
    const books2 = books [i];
    const {titlu, autor, esteCitita } = books2;
    if (esteCitita) {
      console.log(`Ai citit deja "${titlu}" de ${autor}`);
    } else {
      console.log(`Trebuie sa citesti "${titlu}" de ${autor}`);
    }
  }
}
const books = [ 
{ titlu: "Carte 1", autor: "Autor 1", esteCitita: true }, 
{ titlu: "Carte 2", autor: "Autor 2", esteCitita: false }, 
];
myBooks (books)