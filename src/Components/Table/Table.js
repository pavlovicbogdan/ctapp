import React from 'react';

const Table = (props) => {

    const exams = props.exams.map((ex, index) => {
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{ex.name}</td>
                <td>{ex.contact}</td>
                <td>{ex.comment}</td>
                <td>{ex.ex}</td>
                <td>{ex.exContrast ? 'Yes' : 'No'}</td>
                <td>{ex.exDate}</td>
                <td>{ex.exTime}</td>
                <td>{ex.exDoctor}</td>
                <td><i className="fa fa-edit"></i></td>
                <td><i className="fa fa-trash"></i></td>
            </tr>
        )
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
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
};

export default Table;