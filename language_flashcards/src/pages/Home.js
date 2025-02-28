import React from "react";
import FlashcardForm from "../components/FlashcardForm";

const Home = ({ setFlashcards }) => {
  const addFlashcard = (newCard) => {
    setFlashcards((prev) => [
      ...prev,
      { id: prev.length + 1, ...newCard, starred: false },
    ]);
  };

  return (
    <div>
      <h1>Create a New Flashcard</h1>
      <FlashcardForm addFlashcard={addFlashcard} />
    </div>
  );
};

export default Home;