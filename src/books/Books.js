// src/book/Books.js
import React from 'react';
import Slider from 'react-slick';
import './Books.css';
import b1 from './b1.png'
import b2 from './b2.png'

const Books = () => {
  const books = [
    { id: 1, title: 'Book 1', image: b1, },
    { id: 2, title: 'Book 2', image: b2, },
    { id: 3, title: 'Book 3', image: b1, },
    { id: 4, title: 'Book 4', image: b2, },
    { id: 5, title: 'Book 5', image: b1, },
    { id: 6, title: 'Book 6', image: b2, },
    { id: 7, title: 'Book 7', image: b1, },
    { id: 8, title: 'Book 8', image: b2, },
    { id: 9, title: 'Book 9', image: b1, },
    { id: 10, title: 'Book 10', image: b2, },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Remove next and previous buttons
    responsive: [
      {
        breakpoint: 1024, // Tablet and larger screens (default)
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Phone screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="books-carousel">
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Books;
