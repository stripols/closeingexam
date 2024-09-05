import Book from './Book'

const BookList = (props) => {
    const books = props.books
    
  return (
    <div className="accordion" id="accordionExample">
        {books.map((book, index) => {return (
          <Book key={index} book={book}/>
        )})}        
    </div>
    
  )
}
export default BookList