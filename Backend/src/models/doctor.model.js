import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
    name:{
		type: String,
		required: true,
	},
	email:{
		type: String,
		required: true,
		// unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
	qualification:{
		type: String,
		required: true,
	},
	worksInHospital:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Hospital',
	}
},{timestamps: true});

export const Doctor = mongoose.model('Doctor', DoctorSchema);