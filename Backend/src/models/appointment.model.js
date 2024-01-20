import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    appointment_date:{
		type: Date,
		required: true,
	},
	other_detals:{
		type: String,
	}
},{timestamps: true});

export const Appointment = mongoose.model('Appointment', appointmentSchema); 