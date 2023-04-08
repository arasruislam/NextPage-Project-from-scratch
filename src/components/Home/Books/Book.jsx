import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // console.log(book);
  const { image, title, price } = book;
  return (
    <Link to={`/book/${book.isbn13}`}>
      <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'">
        <img
          src={image}
          alt="IT Images"
          className="object-cover w-full h-56 md:h-64 xl:h-80"
        />
        <div className="bg-black px-6 py-4 bg-opacity-50 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col">
          <h1 className="text-lg font-bold text-white">{title}</h1>
          <br />
          <p>{book.subtitle.substring(0, 45)}...</p>
          <br />
          <p className="mt-auto">Price: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
