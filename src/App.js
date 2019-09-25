import React, { Component } from 'react';

import { CardList } from './Components/card-list/card-list.component'

import { SearchBox } from './Components/search-box/search-box.component'


import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
       monstros: [],
       searchField: ''
    };

    this.handleChange = this.handleChange.bind(this)
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monstros: users }))
  }

  handleChange(e){
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monstros, searchField } = this.state;
    const filteredMonsters = monstros.filter(monstro => monstro.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
           placeholder='Procurar Monstros'
           handleChange={this.handleChange}
        />
        <CardList monstros={filteredMonsters}/>      
      </div>
    );
  }
}

export default App;
