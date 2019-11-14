import React from 'react';
import './Results.css';

const Results = (props) => {
  const results = props.results.map((result, i) => {
    return <li className="Results_li" key={i}>{result.name ? result.name : result.title}</li>
  })
  const feedback = props.loading ? 'Searching...' : ((!results.length) ? 'No results' : '')
  return (
    <section className="Results" hidden={!props.searchRan}>
      <h2>Results</h2>
      <p>{feedback}</p>
      <p className="Results_error">{props.error}</p>
      <ul>
        {results}
      </ul>
    </section>
  )
}

export default Results
