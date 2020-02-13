import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Person from './Person/Person';
import Navbar from './Components/Navbar/Navbar.js';
import Table from './Components/Table/Table.js';
// import ExModal from './Components/ExModal/ExModal.js';


class App extends Component {

  // state = {
  //   exams: [],
  //   exam: null
  // }

  // fetching exams from database

  // getExams = () => {
  //   fetch('http://localhost:4000/exams')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         exams: data
  //       })
  //     })
  // }

  // adding new exam to database

  // addExam = (exam) => {
  //   fetch('http://localhost:4000/exams', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: exam.name,
  //       contact: exam.contact,
  //       comment: exam.comment,
  //       exType: exam.exType,
  //       ex: exam.ex,
  //       exContrast: exam.exContrast,
  //       exDate: exam.exDate,
  //       exTime: exam.exTime,
  //       exDoctor: exam.exDoctor
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  // deleting exam from database

  // deleteExam = (id) => {
  //   fetch(`http://localhost:4000/exams/${id}`, {
  //     method: 'DELETE'
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // }

  // componentDidMount() {
  //   this.getExams();
  // }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="card m-3">
          <h5 className="card-header">Scheduled examinations</h5>
          <div className="card-body">
            {/* <div className="m-3">
              <ExModal addExam={this.addExam} exam={this.state.exam} className="p-3" />
            </div> */}
            <Table />
          </div>
        </div>
      </div>
    );

  }
}


export default App;
