import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CSSTransitionGroup } from 'react-transition-group' // ES6


class Input extends Component{
  render(){
    return(
      <div className="Input">
        <input
          id={this.props.name}
          type={this.props.type}
          autoComplete="false"
          placeholder= {this.props.placeholder}
          required
        />
        <label htmlFor={this.props.name}></label>
      </div>
    )

  }
}
class Modal extends Component{
    render(){
      return(
      <div className="Modal">
        <form className="LoginForm" onSubmit={this.props.onSubmit}>
         <Input id="login-name" placeholder="pippo" type="text"/>
         <Input id="login-email" placeholder="pippo@email.com" type="email"/>
         <Input id="login-password" placeholder="password" type="password"/>
         <button id="login-btn">Login </button> 
        </form>
      </div>
    )
  }
}

class App extends Component {

  //React expects us to return a JavaScript object from this method 
  //that stores any sort of data we want to manipulate or display in the component.
  //returns a boolean
  //in ES5
  /* 
  getInitialState(){
    return { mounted : false };
  }*/
  /*ES6*/
  constructor(props){
    super(props);
    this.state = {
      mounted : false
    }
  }
  //executed just after the component has been rendered to the page
  componentDidMount(){
    this.setState ({
      mounted : true
    })
  }
  handleSubmit(e){
    this.setState({mounted:false});
    e.preventDefault();
    
  }
  
  
  render() {
    //shows the modal only if the component is mounted
    let modal;
    if(this.state.mounted === true){
      modal = (<Modal onSubmit={this.handleSubmit}/>)
    } 
    return (
      <div className="App">
      <CSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>

        {modal}
      </CSSTransitionGroup>
      </div>
    );
  }
}

export default App;
