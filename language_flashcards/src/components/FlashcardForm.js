import React, { useState } from "react";

const FlashcardForm = ({ addFlashcard }) => {
  const [newCard, setNewCard] = useState({
    japanese: "",
    korean: "",
    definition: "",
  });

  const handleChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCard.japanese && newCard.korean && newCard.definition) {
      addFlashcard(newCard); // Send new flashcard to parent component
      setNewCard({ japanese: "", korean: "", definition: "" }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="japanese"
        placeholder="Japanese word"
        value={newCard.japanese}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="korean"
        placeholder="Korean word"
        value={newCard.korean}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="definition"
        placeholder="Definition"
        value={newCard.definition}
        onChange={handleChange}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    margin: "20px auto",
  },
};

export default FlashcardForm;