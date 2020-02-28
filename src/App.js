import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Person from './Person/Person';
import Navbar from './Components/Navbar/Navbar.js';
import Table from './Components/Table/Table.js';
// import ExModal from './Components/ExModal/ExModal.js';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="card m-3">
          <h5 className="card-header">Scheduled examinations</h5>
          <div className="card-body">
            <Table />
          </div>
        </div>
      </div>
    );

  }
}


export default App;
