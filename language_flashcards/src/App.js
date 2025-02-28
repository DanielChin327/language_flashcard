import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllCards from "./pages/AllCards";
import StarredCards from "./pages/StarredCards";
import { flashcards as initialData } from "./data";

const App = () => {
  const [flashcards, setFlashcards] = useState(initialData);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setFlashcards={setFlashcards} />} />
        <Route path="/all" element={<AllCards flashcards={flashcards} setFlashcards={setFlashcards} />} />
        <Route path="/starred" element={<StarredCards flashcards={flashcards} />} />
      </Routes>
    </Router>
  );
};

export default App;
