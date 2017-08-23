import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//fixed data 
const data = [
  {
    Name: 'Francesca',
    Lastname: 'Guerrieri',
    Avatar: 'http://placehold.it/75'    
  },
  {
    Name: 'Marco',
    Lastname: 'D\'Alessandro',
    Avatar: 'http://placehold.it/75'    
  }
]

const Card = (props) => {
  return (
  <div className='singleCard'>
    <img className='imgCard' src={props.Avatar}/>
    <div className='cardInfo'>
      <div>{props.Name}</div>
      <div>{props.Lastname}</div>
    </div>

  </div>
)
}

//map all the card 
const ListOfCards = (props) => {
  return(
    <div className='cardsContainer'>
      {props.cards.map(card => <Card {...card}/>)}
    </div>
  )
}

class Form extends React.Component {
  render(){
    return(
      <form >
        <input />
        <button>Search</button>
      </form>
    )
  }

}

class App extends Component {
  state = {
    cards : data

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Search People App</h2>
        </div>
        
        <div>
          <Form />
          <ListOfCards cards={this.state.cards}/>
        </div>
      </div>

    );
  }
}



export default App;
