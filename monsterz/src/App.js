import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })); //this.setState() is also Async
  }

  //Arrow function is binding its "this" to the App. This is extremely useful!
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //This will be called everytime when the state changes
  render() {
    //console.log(this.state.monsters); //--> Shows the this on console. At this point, it's the App class.
    const { monsters, searchField } = this.state; // equals to const monsters = this.state.monsters etc.
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1> Monster Dex </h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
          //everytime a change is triggered on the input element, state is changing.
          //since the setState() is Async, we can pass a second argument.
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
