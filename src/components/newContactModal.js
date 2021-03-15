import React, { useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function NewContactModal() {
	const idRef = useRef();
	const nameRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<Modal.Header closeButton>Create Contact</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>ID</Form.Label>
						<Form.Control type='text' ref={idRef} required />
					</Form.Group>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type='text' ref={nameRef} required />
					</Form.Group>
					<Button type='submit'> Create</Button>
				</Form>
			</Modal.Body>
		</div>
	);
}

export default NewContactModal;
