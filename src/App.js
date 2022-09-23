import React from 'react';
import BookData from "./Data.json"
import SearchBar from './components/SearchBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a book name" data={BookData}/>
    </div>
  );
}

export default App;
