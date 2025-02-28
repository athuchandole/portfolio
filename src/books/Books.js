import React, { useState, useEffect, useRef } from 'react';
import './Books.css'; // Importing the CSS file for styling
import b1 from './b1.png';
import b2 from './b2.png';

// Sample book data
const booksData = [
  {
    id: 1,
    title: 'Book 1',
    imageUrl: b1,
  },
  {
    id: 2,
    title: 'Book 2',
    imageUrl: b2,
  },
  {
    id: 3,
    title: 'Book 3',
    imageUrl: b1,
  },
  {
    id: 4,
    title: 'Book 4',
    imageUrl: b2,
  },
  {
    id: 5,
    title: 'Book 5',
    imageUrl: b1,
  },
];

const Books = () => {
  const [scroll, setScroll] = useState(1); // Start with 1 to avoid showing the first cloned image
  const carouselRef = useRef(null);

  // Auto-scroll every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setScroll((prevScroll) => (prevScroll + 1) % booksData.length);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Handle touch swipe event
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    carouselRef.current.touchStart = touchStart;
  };

  const handleTouchMove = (e) => {
    if (!carouselRef.current.touchStart) return;

    const touchMove = e.touches[0].clientX;
    const swipeDistance = carouselRef.current.touchStart - touchMove;

    if (swipeDistance > 50) {
      // Swipe left
      setScroll((prevScroll) => (prevScroll + 1) % booksData.length);
      carouselRef.current.touchStart = null; // reset touch start position
    } else if (swipeDistance < -50) {
      // Swipe right
      setScroll((prevScroll) => (prevScroll - 1 + booksData.length) % booksData.length);
      carouselRef.current.touchStart = null; // reset touch start position
    }
  };

  return (
    <div className="carousel-container" ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(${-(scroll * 160)}px)` }}>
          {/* Clone the last item to create an infinite effect */}
          <div className="carousel-item">
            <img src={booksData[booksData.length - 1].imageUrl} alt={booksData[booksData.length - 1].title} />
            <p>{booksData[booksData.length - 1].title}</p>
          </div>

          {/* Map through original items */}
          {booksData.map((book) => (
            <div className="carousel-item" key={book.id}>
              <img src={book.imageUrl} alt={book.title} />
              <p>{book.title}</p>
            </div>
          ))}

          {/* Clone the first item to create an infinite effect */}
          <div className="carousel-item">
            <img src={booksData[0].imageUrl} alt={booksData[0].title} />
            <p>{booksData[0].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
