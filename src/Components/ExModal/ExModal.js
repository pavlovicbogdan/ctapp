import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ExModal.css';

const ExModal = (props) => {
    const [show, setShow] = useState(false);
    const [hideContrast, setHideContrast] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formDataHandler = (event) => {
        event.preventDefault();

        const exam = {
            name: event.target.name.value,
            contact: event.target.contact.value,
            comment: event.target.comment.value,
            exType: event.target.exType.value,
            exName: event.target.exName.value,
            exContrast: event.target.exContrast ? event.target.exContrast.checked : false,
            exDate: event.target.exDate.value,
            exTime: event.target.exTime.value,
            exDoctor: event.target.exDoctor.value
        }

        if (props.type === 'add') {
            props.addExam(exam);
        } else {
            exam.id = props.exam.id;
            props.editExam(exam);
        }

        setHideContrast(true);
        handleClose();
    };

    const hideContrasHandler = (event) => {
        console.log(event.target.value);
        
        if (event.target.value.includes("CT")) {
            setHideContrast(false);
        } else {
            setHideContrast(true);
        }
        console.log(hideContrast);
        
    };

    // TODO contrast issue

    let contrast = null;

    if (props.type === 'add') {
        if (!hideContrast) {
            contrast = (
                <Form.Group>
                    <Form.Check id="exContrast" label="Contrast" feedback="You must agree before submitting." />
                </Form.Group>
            );
        }
    } else {
        if (props.exam.exName.includes('CT')) {
            contrast = (
                <Form.Group>
                    <Form.Check id="exContrast" label="Contrast" defaultChecked={props.exam.exContrast} feedback="You must agree before submitting." />
                </Form.Group>
            );
        } else if (!hideContrast) {
            contrast = (
                <Form.Group>
                    <Form.Check id="exContrast" label="Contrast" feedback="You must agree before submitting." />
                </Form.Group>
            );
        }
    }

    return (
        <>
            <i className={props.icon} onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Examination</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formDataHandler} autoComplete="off">
                        <Form.Group controlId="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Doe" defaultValue={props.type === 'add' ? null : props.exam.name} required />
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact Phone</Form.Label>
                            <Form.Control type="text" placeholder="063-123-456" defaultValue={props.type === 'add' ? null : props.exam.contact} />
                        </Form.Group>
                        <Form.Group controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="2" placeholder="Comment" defaultValue={props.type === 'add' ? null : props.exam.comment} />
                        </Form.Group>
                        <Form.Group controlId="exType" required>
                            <Form.Label>Examination type</Form.Label>
                            <Form.Control as="select" defaultValue={props.type === 'add' ? null : props.exam.exType} required>
                                <option></option>
                                <option value="Radiology">Radiology</option>
                                <option value="Intern">Intern</option>
                                <option value="Neurology">Neurology</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exName">
                            <Form.Label>Examination</Form.Label>
                            <Form.Control as="select" onChange={hideContrasHandler} defaultValue={props.type === 'add' ? null : props.exam.exName} required>
                                <option></option>
                                <option value="CT Head">CT Head</option>
                                <option value="CT Abdomen">CT Abdomen</option>
                                <option value="US Vessels">US Vessels</option>
                            </Form.Control>
                        </Form.Group>
                        {/* {hideContrast ? null :
                            <Form.Group>
                                <Form.Check
                                    id="exContrast"
                                    label="Contrast"
                                    feedback="You must agree before submitting."
                                    defaultChecked={props.exam.exContrast}
                                />
                            </Form.Group>
                        } */}
                        {contrast}
                        <Form.Group controlId="exDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control as="select" defaultValue={props.type === 'add' ? null : props.exam.exDate} required>
                                <option></option>
                                <option value="12/05">12/05</option>
                                <option value="13/05">13/05</option>
                                <option value="14/05">14/05</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control as="select" defaultValue={props.type === 'add' ? null : props.exam.exTime} required>
                                <option></option>
                                <option>12:00</option>
                                <option>12:30</option>
                                <option>13:00</option>
                                <option>13:30</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exDoctor">
                            <Form.Label>Doctor</Form.Label>
                            <Form.Control as="select" defaultValue={props.type === 'add' ? null : props.exam.exDoctor} required>
                                <option></option>
                                <option>dr Dragan Dragic</option>
                                <option>dr Petar Petrovic</option>
                                <option>dr Mile Milenkovic</option>
                                <option>dr Jovana Jovanovic</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="dark" type="submit">Submit form</Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" onClick={print}>
                        Save Changes
            </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default ExModal;