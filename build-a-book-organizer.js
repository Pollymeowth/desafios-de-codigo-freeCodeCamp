const books  = [
  {
    title: "Frankenstein",
    authorName: "Mary Shelley",
    releaseYear: 1818
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "O Mundo se Despedaça",
    authorName: "Chinua Achebe",
    releaseYear: 1958
  },
  {
    title: "Dom Casmurro",
    authorName: "Machado de Assis",
    releaseYear: 1899
  },
  {
    title: "Orgulho e Preconceito",
    authorName: "Jane Austen",
    releaseYear: 1813
  },
  {
    title: "O Senhor dos Anéis",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1954
  },
  {
    title: "Cem Anos de Solidão",
    authorName: "Gabriel García Márquez",
    releaseYear: 1967
  },
  {
    title: "Harry Potter e a Pedra Filosofal",
    authorName: "J.K. Rowling",
    releaseYear: 1997
  },
  {
    title: "O Pequeno Príncipe",
    authorName: "Antoine de Saint-Exupéry",
    releaseYear: 1943
  },
  {
    title: "A Revolução dos Bichos",
    authorName: "George Orwell",
    releaseYear: 1945
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1
  }
  else if(book1.releaseYear > book2.releaseYear){
    return 1
  }
  
  return 0
}

let specifiedYear = 1950;
let filteredBooks = books.filter((book) => book.releaseYear <= specifiedYear)


filteredBooks.sort(sortByYear)
console.log(filteredBooks)
