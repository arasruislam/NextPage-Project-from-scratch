import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import DataLoadingSpinner from "../../DataLoadingSpinner";

const Books = () => {
  // Spinner Load
  const loadingSpinner = useNavigation();
  console.log(loadingSpinner.state);
  if (loadingSpinner.state === "loading") {
    return <DataLoadingSpinner />;
  }

  // data loader
  const { books } = useLoaderData();
  console.log(books);
  return (
    <div className="my-container">
      <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {books.map((book) => (
          <Book book={book} key={book.isbn13}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
