import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredName, setFilteredName] = useState("");

  const people = ["dave", "iris", "sam", "tina", "bob", "Jen", "Liz", "Jeff"];

  const displayNames = people.map((person) => {
    return <li>{person}</li>;
  });

  function handleSearch(newSearchQuery) {
    setSearchQuery(newSearchQuery);
    people.map((person) => {
      if (person.includes(searchQuery)) {
        setFilteredName(person);
      }
    });
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <h2>
        filtered Name:
        <ul style={{ color: "red" }}>{filteredName}</ul>
      </h2>
      <br></br>
      <h2>
        Names Array:
        <ul>{displayNames}</ul>
      </h2>
    </div>
  );
}

function Search({ handleSearch }) {
  function onChange(e) {
    handleSearch(e.target.value);
  }
  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default App;
