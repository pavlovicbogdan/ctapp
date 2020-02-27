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

    // deleteExamHandler = (id) => {
    //     if (window.confirm("Do you really want to delete exam?")) {
    //         this.props.deleteExam(id);
    //     }
    // };

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
            // body: JSON.stringify({
            //     name: exam.name,
            //     contact: exam.contact,
            //     comment: exam.comment,
            //     exType: exam.exType,
            //     exName: exam.exName,
            //     exContrast: exam.exContrast,
            //     exDate: exam.exDate,
            //     exTime: exam.exTime,
            //     exDoctor: exam.exDoctor
            // })
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

    editExam(exam) {
        console.log(exam);
    }

    componentDidMount() {
        this.getExams();
    }

    render() {
        const exams = this.state.exams.map((ex, index) => {
            return (
                <tr key={ex.id}>
                    <th scope="row">{ex.id}</th>
                    <td>{ex.name}</td>
                    <td>{ex.contact}</td>
                    <td>{ex.comment}</td>
                    <td>{ex.exName}</td>
                    <td>{ex.exContrast ? 'Yes' : 'No'}</td>
                    <td>{ex.exDate}</td>
                    <td>{ex.exTime}</td>
                    <td>{ex.exDoctor}</td>
                    <td><ExModal icon="fa fa-edit" type="edit" exam={ex} editExam={this.editExam} /></td>
                    <td><i className="fa fa-trash" onClick={() => this.deleteExam(ex.id)}></i></td>
                </tr>
            )
        });

        return (
            <table className="table table-hover" >
                <thead>
                    <tr>
                        <th scope="col"><ExModal addExam={this.addExam} icon="fa fa-user-plus" type="add" /></th>
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