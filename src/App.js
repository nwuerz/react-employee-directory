import React, { Component } from 'react';
import NavBar from "./components/navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import EmployeeTable from './components/employeeTable';

class App extends Component {

  render() {
    return (
      <React.Fragment >
        <NavBar />
        <EmployeeTable />
      </React.Fragment >
    );
  }

}

export default App;

