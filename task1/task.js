export function getLongestBookByAuthorName(authors, books, authorName) {

    const autID = authors.find(author => author.name === authorName).id
    const selectBooks = books.filter(book => book.author_id === autID)

    let pageLenght = 0;
    let longestBook = "";

    if (autID === '' || autID === undefined)
    {
        return null;
    }
    
    else {

    for (let i = 0; i < selectBooks.length; i++) {
            if (selectBooks[i].pages >= pageLenght) {
                pageLenght = selectBooks[i].pages
                longestBook = selectBooks[i].title
            }   
                  
        }
        return longestBook; 
    }
    
}

// - If the author do not found with the given name or it has no books, the function must return null.
// - If multiple books have the same length, the book title must be the 1st in the alphabetical order.


