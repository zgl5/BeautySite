
const express = require('express')
const router = express.Router()
const Appointment = require('../../models/appointmentMod');

// Index
router.get('/', async (req, res) => {
  try {
    const foundAppointments = await Appointment.find({});
    res.json(foundAppointments);
  } catch (error) {
    res.status(500).json({ error: 'Error finding appointments' });
  }
});
// New - Will be handled by React application

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(req.params.id);
    res.json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting appointment' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Error updating appointment' });
  }
});

// Create
router.post('/', async (req, res) => {
  try {
    const createdAppointment = await Appointment.create(req.body);
    res.json(createdAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Error creating appointment' });
  }
});
// Edit - Will be handled by React application

// Show
router.get('/:id', async (req, res) => {
  try {
    const foundAppointment = await Appointment.findById(req.params.id);
    res.json(foundAppointment);
  } catch (error) {
    res.status(500).json({ error: 'Error finding appointment' });
  }
});

module.exports = router