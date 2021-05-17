import React from "react";
import { Button, Modal } from "react-bootstrap";
import dateFormat from "dateformat";
import "./style.css"

function EmployeeModal(props) {
    return (
        <Modal animation show={!!props.employee} onHide={props.handleClose}
        
        >
            <Modal.Header closeButton>
                <Modal.Title>{props.employee?.name.first} {props.employee?.name.last}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-4"><img src={props.employee?.picture.large} alt="portrait"></img></div>
                    <div className="col-8">
                        Birthday: {dateFormat(props.employee?.dob.date, "longDate")}<br />
                        Email: {props.employee?.email}<br />
                        Phone: {props.employee?.phone}<br />
                  
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
                <Button variant="danger" onClick={() => props.handleDelete(props.employee)}>
                    DeleteEmployee
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EmployeeModal;