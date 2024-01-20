import mongoose from 'mongoose';
const parentSchema = new mongoose.Schema({
    username:{
		type: String,
		required: true,
	},
	email:{
		type: String,
		required: false,
		// unique: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
	other_details: {
		type: String,
	},
},{timestamps: true});

export const Parent = mongoose.model('Parent', parentSchema);