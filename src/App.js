import React, { Component } from 'react';
import './App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import Person from './Person/Person';
import Navbar from './Components/Navbar/Navbar.js';
import Table from './Components/Table/Table.js';


class App extends Component {

  state = {
    exams: []
  }

  formDataHandler = (event) => {
    event.preventDefault();
    const exam = {
      name: event.target.fullName.value,
      contact: event.target.contact.value,
      comment: event.target.comment.value,
      exType: event.target.exType.value,
      ex: event.target.ex.value,
      exContrast: event.target.exContrast.checked,
      exDate: event.target.exDate.value,
      exTime: event.target.exTime.value,
      exDoctor: event.target.exDoctor.value
    }

    const exams = this.state.exams;
    exams.push(exam);
    this.setState({exams})

    console.log(exams);

    event.target.reset();
  }

  render() {
    return (
      <div className="container-fluid">
        <Navbar />

        <div className="card m-3">
          <h5 className="card-header">New examination</h5>
          <div className="card-body">
            <form className="needs-validation" onSubmit={this.formDataHandler} autoComplete="off">
              <div className="form-row">
                <label>Personal info</label>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <input type="text" className="form-control" id="fullName" placeholder="Full name" required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
                <div className="col-md-4 mb-3">
                  <input type="text" className="form-control" id="contact" placeholder="Contact number" required />
                  <div className="valid-tooltip">
                    Looks good!
      </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control" id="comment" aria-describedby="validationTooltipUsernamePrepend" placeholder="Comment" />
                    <div className="invalid-tooltip">
                      Please choose a unique and valid username.
        </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label>Examination info</label>
              </div>
              <div className="form-row align-items-center">
                <div className="col-md-4 mb-3">
                  <select className="custom-select" id="exType" required>
                    <option>Examination type</option>
                    <option>Radiology</option>
                    <option>Intern</option>
                    <option>Neurology</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please provide a valid city.
      </div>
                </div>
                <div className="col-md-4 mb-3">
                  <select className="custom-select" id="ex" required>
                    <option>Examination</option>
                    <option>CT head</option>
                    <option>CT abdomen</option>
                    <option>US vessels</option>
                    <option>US somach</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please provide a valid city.
      </div>
                </div>
                <div className="col-md-3 offset-md-1 mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="exContrast" />
                    <label className="form-check-label" htmlFor="exContrast">
                      Contrast
        </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-4 mb-3">
                  <select className="custom-select" id="exDate" required>
                    <option>Date</option>
                    <option>12/10</option>
                    <option>13/10</option>
                    <option>14/10</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please select a valid state.
      </div>
                </div>
                <div className="col-md-4 mb-3">
                  <select className="custom-select" id="exTime" required>
                    <option>Time</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please provide a valid zip.
      </div>
                </div>
                <div className="col-md-4 mb-3">
                  <select className="custom-select" id="exDoctor" required>
                    <option>Doctor</option>
                    <option>dr Jovanovic Pavlovic Svetlana</option>
                    <option>dr Radic Dragan</option>
                    <option>dr Komadina Ljubica</option>
                  </select>
                  <div className="invalid-tooltip">
                    Please provide a valid zip.
      </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-2 offset-md-5 mb-3">
                  <button className="btn btn-dark" type="submit">Submit form</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card m-3">
          <h5 className="card-header">Scheduled examinations</h5>
          <div className="card-body">
            <Table exams={this.state.exams}/>
          </div>
        </div>
      </div>
    );

  }
}


export default App;
