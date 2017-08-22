import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{

  handleClick = () => {
         this.props.onClickFunction(this.props.incrementValue);
       };
  render(){
    return(
      <div className="col-lg-3"><button type="button" className="btn btn-primary btn-increment" onClick={this.handleClick}>
        + {this.props.incrementValue}
      </button>
      </div>
    );
  }
}

const Result = (props) => {
  return(
    <div className="col-lg-12 result">
      {props.counter}
    </div>
  )
}

class MyCounter extends React.Component{
state = {counter : 0};

incrementCounter = (incrementValue) =>{
      this.setState ((prevState) =>({
       counter : prevState.counter +incrementValue
       }));
     }
render(){
  return(
    <div className='container'>
    <div className="row heading">
      <h3 className= "col-lg-12">Calculator React App</h3>
    </div>
    <div className='row'>
      <Button incrementValue = {1} onClickFunction = {this.incrementCounter}/>
      <Button incrementValue = {5} onClickFunction = {this.incrementCounter}/>
      <Button incrementValue = {10} onClickFunction = {this.incrementCounter}/>
      <Button incrementValue = {100} onClickFunction = {this.incrementCounter}/>
      
      </div>
      <Result counter={this.state.counter}/>
      </div>
  )
}
}

ReactDOM.render(<MyCounter />, root);

export default MyCounter;