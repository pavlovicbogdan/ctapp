import React, { Component } from 'react';
import ExModal from './../ExModal/ExModal.js';
import './Table.css';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            exams: []
        };
    }

    // fetching exams from database

    getExams() {
        fetch('http://localhost:4000/exams')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    exams: data
                })
            })
    };

    // adding new exam into database

    addExam(exam) {
        fetch('http://localhost:4000/exams', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(exam)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

    // deleting exam from database

    deleteExam(id) {
        if (window.confirm('Do yo really want to delete examination?')) {
            fetch(`http://localhost:4000/exams/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    };

    // editing exam in database

    editExam(exam) {
        fetch(`http://localhost:4000/exams/${exam.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(exam)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    componentDidMount() {
        this.getExams();
    }

    render() {
        const zeroFormat = (date) => {
            if (date < 10) {
                return `0${date}`;
            }
            return date;
        }

        // TODO map function need value to return

        const exams = this.state.exams.map((ex, index) => {
            const selectedDate = new Date(this.props.date);
            const date = new Date(ex.exDate);
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();


            if (day === selectedDate.getDate() && month === selectedDate.getMonth() + 1) {
                return (
                    <tr key={ex.id}>
                        <th scope="row">{ex.id}</th>
                        <td>{ex.name}</td>
                        <td>{ex.contact}</td>
                        <td>{ex.comment}</td>
                        <td>{ex.exName}</td>
                        <td>{ex.exContrast ? 'Yes' : 'No'}</td>
                        <td>{`${zeroFormat(day)}. ${zeroFormat(month)}. ${year}.`}</td>
                        <td>{`${zeroFormat(date.getHours())} : ${zeroFormat(date.getMinutes())}`}</td>
                        <td>{ex.exDoctor}</td>
                        <td><ExModal
                            icon="fa fa-edit"
                            type="edit"
                            exam={ex}
                            editExam={this.editExam}
                            contrast={ex.exContrast ? false : ex.exName.includes('CT') ? false : true}
                            date={date} /></td>
                        <td><i className="fa fa-trash" onClick={() => this.deleteExam(ex.id)}></i></td>
                    </tr>
                )
            }
            
            return;
        });

        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th scope="col"><ExModal addExam={this.addExam} icon="fa fa-user-plus" type="add" contrast={true} date={new Date()} /></th>
                        <th scope="col">Full name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Comment</th>
                        <th scope="col">Examination</th>
                        <th scope="col">Contrast</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Doctor</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {exams}
                </tbody>
            </table>
        );

    }
};

export default Table;