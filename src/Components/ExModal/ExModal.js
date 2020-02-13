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

        props.addExam(exam);
        setHideContrast(true);
        handleClose();
    };

    const hideContrasHandler = (event) => {
        if (event.target.value.includes("CT")) {
            setHideContrast(false);
        } else {
            setHideContrast(true);
        }
    };

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
                            {props.type === 'add' ?
                                <Form.Control type="text" placeholder="John Doe" required /> :
                                <Form.Control type="text" placeholder="John Doe" value={props.exam.name} required />
                            }
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact Phone</Form.Label>
                            {props.type === 'add' ?
                                <Form.Control type="text" placeholder="063-123-456" /> :
                                <Form.Control type="text" placeholder="063-123-456" value={props.exam.contact} />
                            }
                        </Form.Group>
                        <Form.Group controlId="comment">
                            <Form.Label>Comment</Form.Label>
                            {props.type === 'add' ?
                                <Form.Control as="textarea" rows="2" placeholder="Comment" /> :
                                <Form.Control as="textarea" rows="2" placeholder="Comment" value={props.exam.comment} />
                            }
                        </Form.Group>
                        <Form.Group controlId="exType" required>
                            <Form.Label>Examination type</Form.Label>
                            {props.type === 'add' ?
                                <Form.Control as="select" required>
                                    <option></option>
                                    <option value="radiology">Radiology</option>
                                    <option value="intern">Intern</option>
                                    <option value="neurology">Neurology</option>
                                </Form.Control> :
                                <Form.Control as="select" required>
                                    <option></option>
                                    <option value="radiology" selected={props.exam.exType === "radiology" ? true : false}>Radiology</option>
                                    <option value="intern" selected={props.exam.exType === "intern" ? true : false}>Intern</option>
                                    <option value="neurology" selected={props.exam.exType === "neurology" ? true : false}>Neurology</option>
                                </Form.Control>
                            }
                        </Form.Group>
                        <Form.Group controlId="exName">
                            <Form.Label>Examination</Form.Label>
                            {props.type === 'add' ?
                                <Form.Control as="select" onChange={hideContrasHandler} required>
                                    <option></option>
                                    <option>CT Head</option>
                                    <option>CT Abdomen</option>
                                    <option>US Vessels</option>
                                </Form.Control> :
                                <Form.Control as="select" onChange={hideContrasHandler} required>
                                    <option></option>
                                    <option value="ctHead" selected={props.exam.exName === "ctHead" ? true : false}>CT Head</option>
                                    <option value="cdAbdomen" selected={props.exam.exName === "cdAbdomen" ? true : false}>CT Abdomen</option>
                                    <option value="usVessels" selected={props.exam.exName === "usVessels" ? true : false}>US Vessels</option>
                                </Form.Control>
                            }
                        </Form.Group>
                        {hideContrast ? null :
                            <Form.Group>
                                <Form.Check
                                    id="exContrast"
                                    label="Contrast"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        }
                        <Form.Group controlId="exDate">
                            <Form.Label>Date</Form.Label>
                            {props.type === 'add' ?
                                <Form.Control as="select" required>
                                    <option></option>
                                    <option>12/05</option>
                                    <option>13/05</option>
                                    <option>14/05</option>
                                </Form.Control> :
                                <Form.Control as="select" required>
                                    <option></option>
                                    <option value="12/05" selected={props.exam.exDate === "12/05" ? true : false}>12/05</option>
                                    <option value="13/05" selected={props.exam.exDate === "13/05" ? true : false}>13/05</option>
                                    <option value="14/05" selected={props.exam.exDate === "14/05" ? true : false}>14/05</option>
                                </Form.Control>
                            }
                        </Form.Group>
                        <Form.Group controlId="exTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control as="select" required>
                                <option></option>
                                <option>12:00</option>
                                <option>12:30</option>
                                <option>13:00</option>
                                <option>13:30</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exDoctor">
                            <Form.Label>Doctor</Form.Label>
                            <Form.Control as="select" required>
                                <option></option>
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