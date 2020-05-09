import React, { Component } from 'react';
import NavBar from "./components/navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import EmployeeTable from './components/employeeTable';

class App extends Component {
  state = {
    filterVal: ""
  }

onInputChange = (evt) => {
//evt.target.value
console.log(evt.target);
this.setState({filterVal:evt.target.value});
}

  render() {
    console.log(this.state.filterVal)
    return (
      <React.Fragment >
        <NavBar changeHandler={this.onInputChange} filterVal={this.state.filterVal} />
        <EmployeeTable filterVal={this.state.filterVal}/>
      </React.Fragment >
    );
  }

}

export default App;

