/*
    Baseado no Array de livros por categoria abaixo, faca os seguintes desafios

    - contar o numero de categorias e o numero de livros em cada categoria
    - contar o numero de autores
    - Mostrar livros do autor Augusto Cury
    - Transformar a funcao acima em uma funcao que ira receber o nome do autor e desenvolver os livros desse autor.
*/

const bookByCategory = [
    {
        category: "Riquezas",
        books: [
            {
                title: "Os segredos da mente milionaria",
                autor: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da  Babilonia",
                autor: "George S. Clason",
            },
            {
                title: "Pai Rico Pai Pobre",
                autor: "Robert Kiyosaki e Sharon L Lechter",
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Voce é insubstituivel",
                autor: "Augusto Cury",                
            },
            {
                title: "Ansiedade - Como enfrentar o mal do seculo",
                autor: "Augusto Cury",
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                autor: "Stephen R Covey"
            },
        ],
    },
];

const totalCategories = bookByCategory.length

console.log(totalCategories);
for (let category of bookByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let autor=[];

    for (let category of bookByCategory){
        for (let book of category.books){
            if (autor.indexOf(book.autor) == -1){
                autor.push(book.autor)
            }
        }
    }
    console.log("Total de Autores: ", autor.length)
}
countAuthors();

function booksOfAuthor(autor){
    let books=[];

    for (let category of bookByCategory){
        for (let book of category.books){
            if (book.autor === autor){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do Autor ${autor}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury')