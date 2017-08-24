import React, { Component } from 'react';
import './App.css';
import Shuffle from 'shufflejs';

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
  <div className='singleCard photo-item col-3@xs col-4@sm'>
  
    <img className='imgCard' src={props.Avatar}/>
    <div className='cardInfo'>
      <div className='people-name'>{props.Name}</div>
      <div>{props.Lastname}</div>
    </div>

  </div>
)
}

//map all the card 
const ListOfCards = (props) => {
  return(
    <div className='cardsContainer row my-shuffle shuffle' id="peopleapp">
      {props.cards.map(card => <Card {...card}/>)}
      
    </div>
  )
}

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value})
  }
   //inzialize shuffle element
   componentDidMount(){
    var element = document.getElementById('peopleapp');
    var sizer = document.getElementById('sizer');
    this.shuffle = new Shuffle(element,{
      itemSelector : '.photo-item',
      sizer: this.sizer,
    })
  }
  handleClick(e) {
    // this.props.onClickFunction(this.props.text)
    console.log('click');
    e.preventDefault();
    let s=this.state.value;

    
    //need to shuffle and filtering
   // filterByInput
   this.shuffle.filter(function (element, shuffle) {
    
        // If there is a current filter applied, ignore elements that don't match it.
        
        var titleElement = element.querySelector('.people-name');
        var titleText = titleElement.textContent.toLowerCase().trim();
    
        return titleText.indexOf(this.state.value) !== -1;
      }.bind(this));
  }

  
  render(){
    return(
      <div className="row">
      
      <form className="form-inline">
      
        <input  className="form-control search-input" value={this.state.value} onChange={this.handleChange} id="search-people-input" />
        <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Search</button>
        
      </form>
      </div>
      
    )
  }

}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cards : data
    }
    this.pippo = 'ciao';
  }
  

 
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>React Search People App</h2>
        </div>
        
        <div className="People-app" >
          <Form />
          <div className="container">
          <ListOfCards cards={this.state.cards}/>
          <div ref={element => this.sizer = element} className="col-1@xs col-1@sm photo-grid__sizer"></div>
          
          </div>       
        </div>
      </div>

    );
  }
}



export default App;
