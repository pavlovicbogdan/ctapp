import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Person from './Person/Person';
import Navbar from './Components/Navbar/Navbar.js';
import Table from './Components/Table/Table.js';
// import ExModal from './Components/ExModal/ExModal.js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="card m-3">
          <h5 className="card-header">Scheduled examinations</h5>
          <div className="card-body">
            <DatePicker className="form-control hover-cursor mb-3" selected={this.state.date} onChange={date => this.setState({ date: date })} />
            <Table date={this.state.date}/>
          </div>
        </div>
      </div>
    );

  }
}


export default App;
