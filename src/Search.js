import React from 'react';
import './Search.css';

const Search = (props) => {
  return (
    <form className="Search" onSubmit={event => props.handleSearch(event)}>
      <div>
        <label htmlFor="searchBy">Search by:</label>
        <select name="searchType">
          <option value="people" id="searchBy">Character</option>
          <option value="planets" id="searchBy">Planet</option>
          <option value="starships" id="searchBy">Starship</option>
          <option value="vehicles" id="searchBy">Vehicle</option>
          <option value="species" id="searchBy">Species</option>
          <option value="films" id="searchBy">Film</option>
        </select>
      </div>
      <div>
        <label htmlFor="searchInput">Containing:</label>
        <input type="text" name="searchField" id="searchInput" required></input>
      </div>
      <button type="submit" required>Search!</button>
    </form>
  )
}

export default Search