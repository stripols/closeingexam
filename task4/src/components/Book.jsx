import React from 'react'

const Book = (props) => {
    const book = props.book   

    return (
        
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        {book.title}
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul>
                            <li>Author: {book.author}</li>
                            <li>Release Year: {book.releaseYear}</li>
                            <li>Pages: {book.pages}</li>                     
                        </ul> 
                    </div>
                </div>
            </div>
       
    )
}

export default Book