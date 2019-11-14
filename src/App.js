import React from 'react';
import 'normalize.css';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';

class App extends React.Component {

  state = {
    results: [],
    loading: false,
    error: null,
    searchRan: false
  }

  getResults = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const search = event.target.searchField.value;
    const searchBy = event.target.searchType.value
    fetch(this.baseUrl+searchBy+'/?search='+search)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json();
      })
      .then(data=> {
        const { results } = data;
        this.setState({results: results, loading: false, searchRan: true})
      })
      .catch(e=> this.setState({error: `That didn't work! Error code: ${e}`}))
  }

  baseUrl="https://swapi.co/api/";

  render() {
    const { results, loading, error, searchRan } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          <Search handleSearch={this.getResults}/>
          <Results results={results} loading={loading} error={error} searchRan={searchRan}/>
        </main>
      </div>
    )
  }
}


export default App;
