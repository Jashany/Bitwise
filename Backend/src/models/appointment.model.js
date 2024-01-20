import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    appointment_date:{
		type: String,
		required: true,
	},
	other_detals:{
		type: String,
	},
	booked_by:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Parent",    
	},
},{timestamps: true});

export const Appointment = mongoose.model('Appointment', appointmentSchema); 