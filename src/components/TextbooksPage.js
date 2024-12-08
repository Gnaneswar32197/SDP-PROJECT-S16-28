import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './TextbooksPage.css';

const TextbooksPage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/resources?category=Book")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching textbooks:', error));
  }, []);

  if (!books.length) {
    return <p>No textbooks available.</p>;
  }

  return (
    <div className="textbooks-page">
      <h2>Textbooks</h2>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {book.coverPhotoUrl ? (
              <img 
                src={`http://localhost:8080${book.coverPhotoUrl}`} 
                alt="Cover" 
                className="book-cover" 
              />
            ) : (
              <img 
                src="/path/to/default-image.jpg" 
                alt="Default Cover" 
                className="book-cover" 
              />
            )}
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => navigate(`/resource/${book.id}`)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextbooksPage;
