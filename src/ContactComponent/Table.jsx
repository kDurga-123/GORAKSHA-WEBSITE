import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const AllAppointments = ({ appointments, setAppointments }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editAppointmentId, setEditAppointmentId] = useState('');
  const [editSymptoms, setEditSymptoms] = useState('');

  const handleDelete = (appointmentId) => {
    const confirmed = window.confirm('Are you sure you want to delete this appointment?');
    if (confirmed) {
      const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
      localStorage.setItem('doctorAppointments', JSON.stringify(updatedAppointments));
    }
  };

  const handleEdit = (appointmentId) => {
    const appointmentToEdit = appointments.find((appointment) => appointment.id === appointmentId);
    setEditAppointmentId(appointmentId);
    setEditSymptoms(appointmentToEdit.symptoms);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditAppointmentId('');
    setEditSymptoms('');
  };

  const handleSaveEdit = () => {
    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === editAppointmentId ? { ...appointment, symptoms: editSymptoms } : appointment
    );
    setAppointments(updatedAppointments);
    localStorage.setItem('doctorAppointments', JSON.stringify(updatedAppointments));
    setShowEditModal(false);
    setEditAppointmentId('');
    setEditSymptoms('');
  };

  return (
    <div className="container mt-5">
      <h2>All Appointments</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Symptoms</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.date}</td>
              <td>{appointment.startTime}</td>
              <td>{appointment.endTime}</td>
              <td>{appointment.symptoms}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(appointment.id)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" size="sm" onClick={() => handleDelete(appointment.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editSymptoms">
              <Form.Label>Symptoms:</Form.Label>
              <Form.Control
                type="text"
                value={editSymptoms}
                onChange={(e) => setEditSymptoms(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllAppointments;

