import React, { useState, useEffect } from 'react';
import { format, isBefore, isSameDay, addDays } from 'date-fns';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Book.css'

const Book = ({ propSetAppointments }) => {
  const [localAppointments, setLocalAppointments] = useState([]);
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState('');
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editAppointmentId, setEditAppointmentId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('doctorAppointments')) || [];
    setLocalAppointments(storedAppointments);
  }, []);

  useEffect(() => {
    const availableSlots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    setTimeSlots(availableSlots);
  }, []);

  const isSlotBooked = (date, startTime, endTime) => {
    return localAppointments.some(
      (appointment) =>
        isSameDay(new Date(appointment.date), date) &&
        ((startTime < endTime) &&
          ((startTime >= appointment.startTime && startTime < appointment.endTime) ||
            (endTime > appointment.startTime && endTime <= appointment.endTime) ||
            (startTime <= appointment.startTime && endTime >= appointment.endTime)
          )
        )
    );
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    const maxDate = addDays(today, 30);

    if (isBefore(date, today) || isBefore(maxDate, date)) {
      return true;
    }

    return isDateBooked(date);
  };

  const isDateBooked = (date) => {
    return localAppointments.some((appointment) => isSameDay(new Date(appointment.date), date));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setEditMode(false);
    setSuccessMessage('');
  };

  const handleStartTimeChange = (time) => {
    setSelectedStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setSelectedEndTime(time);
  };

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };

  const handleAppointmentSubmit = () => {
    if (!selectedDate || !selectedStartTime || !selectedEndTime || !symptoms) {
      alert('Please fill in all fields.');
      return;
    }

    if (selectedStartTime >= selectedEndTime) {
      alert('Invalid time range. Please ensure that the start time is before the end time.');
      return;
    }

    const isSlotAlreadyBooked = isSlotBooked(new Date(selectedDate), selectedStartTime, selectedEndTime);

    if (isSlotAlreadyBooked) {
      alert('The selected time slot is already booked. Please choose a different time slot.');
      return;
    }

    if (editMode) {
      const updatedAppointments = localAppointments.map((appointment) =>
        appointment.id === editAppointmentId
          ? {
            ...appointment,
            startTime: selectedStartTime,
            endTime: selectedEndTime,
            symptoms,
          }
          : appointment
      );
      propSetAppointments(updatedAppointments);
      localStorage.setItem('doctorAppointments', JSON.stringify(updatedAppointments));
      setSuccessMessage('Appointment updated successfully!');
    } else {
      const newAppointment = {
        id: format(new Date(), 'yyyyMMddHHmmss'),
        date: selectedDate,
        startTime: selectedStartTime,
        endTime: selectedEndTime,
        symptoms,
      };

      const updatedAppointments = [...localAppointments, newAppointment];
      propSetAppointments(updatedAppointments);
      localStorage.setItem('doctorAppointments', JSON.stringify(updatedAppointments));
      setSuccessMessage('Appointment booked successfully!');
    }

    setSelectedDate('');
    setSelectedStartTime('');
    setSelectedEndTime('');
    setSymptoms('');
    setEditMode(false);
  };

  const handleShowAllAppointments = () => {
    // Navigate to the page with all appointments
    navigate('/allappointments');
  };

  return (
    <div className="container mt-5">
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form>
        <Form.Group controlId="formDate">
          <Form.Label>Select a date:</Form.Label>
          <Form.Control type="date" onChange={(e) => handleDateChange(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formDate">
          <Form.Label>Date:</Form.Label>
          <Form.Control type="text" readOnly value={selectedDate} />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select start time:</Form.Label>
          <Form.Control as="select" onChange={(e) => handleStartTimeChange(e.target.value)}>
            <option value="">Select Start Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select end time:</Form.Label>
          <Form.Control as="select" onChange={(e) => handleEndTimeChange(e.target.value)}>
            <option value="">Select End Time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Symptoms:</Form.Label>
          <Form.Control as="textarea" rows={3} value={symptoms} onChange={handleSymptomsChange} />
        </Form.Group>

        {editMode && (
          <p>
            Editing appointment for {selectedDate}, {selectedStartTime} - {selectedEndTime}, Symptoms: {symptoms}.
          </p>
        )}

        <Button variant="primary" onClick={handleAppointmentSubmit}>
          {editMode ? 'Save Changes' : 'Book Appointment'}
        </Button>

        <Button variant="secondary" onClick={handleShowAllAppointments}>
          Show All Appointments
        </Button>
      </Form>
    </div>
  );
};

export default Book;
