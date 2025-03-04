import React, { useState } from "react";

const Flashcard = ({ card, onEdit, onDelete, onToggleStar }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCard, setEditedCard] = useState(card);

  const handleEdit = () => {
    onEdit(editedCard);
    setIsEditing(false);
  };

  return (
    <div style={styles.card}>
      {isEditing ? (
        <div>
          <input
            value={editedCard.japanese}
            onChange={(e) => setEditedCard({ ...editedCard, japanese: e.target.value })}
          />
          <input
            value={editedCard.korean}
            onChange={(e) => setEditedCard({ ...editedCard, korean: e.target.value })}
          />
          <input
            value={editedCard.definition}
            onChange={(e) => setEditedCard({ ...editedCard, definition: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{card.japanese} - {card.korean}</h2>
          <p>{card.definition}</p>
        </div>
      )}

      <div style={styles.buttons}>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        <button onClick={() => onDelete(card.id)}>Delete</button>
        <button onClick={() => onToggleStar(card.id)}>
          {card.starred ? "★ Starred" : "☆ Star"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    margin: "10px",
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Flashcard;