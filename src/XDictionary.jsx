import React, { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

const XDictionary = () => {
  let [input, setInput] = useState("");
  let [Dictionary] = useState(data);
  let [definition, setDefinition] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const found = input.trim().toLowerCase();

    const filter = Dictionary.find((item) => item.word.toLowerCase() === found);

    if (filter) {
      setDefinition(filter.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          placeholder="Search for a word..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <h3>Definition:</h3>
      <p>{definition}</p>
    </div>
  );
};

export default XDictionary;
