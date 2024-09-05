import { useState, useEffect } from "react";
import BookList from "./components/BookList";

const fetchBooks = async () => {
  const response = await fetch("/api/books");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("error during fetch");
  }
};

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [age, setAge] = useState(''); 
  
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
      setFilteredBooks(data);
    });
  }, []);

  function handleFilter(filterID){    
    
    if (filterID === 'flexRadioDefault1'){
      
      const filtered = books.filter(book => book.releaseYear > 0)      
      setFilteredBooks(...[filtered])
      
    }
    if (filterID === 'flexRadioDefault2'){
      const filtered = books.filter(book => book.releaseYear < 0)
      setFilteredBooks(...[filtered])
    }
    if (filterID === 'flexRadioDefault3'){
      setFilteredBooks(books)
    }
  }
  
  return (
      <>
      <h1>Books</h1>
      <div className="butt-container">
      <div className="form-check">
        <input 
        className="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        id="flexRadioDefault1"
        onClick={(e) => {handleFilter(e.target.id)}}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            AC
          </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
        onClick={(e) => {handleFilter(e.target.id)}}/>
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            BC
          </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
        onClick={(e) => {handleFilter(e.target.id)}}/>
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            All
          </label>
      </div>
      </div>

        <div id="bookcontainer">
          <BookList books={filteredBooks} />
        </div>
        
      </>
    );
  }

export default App;
