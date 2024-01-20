import mongoose from  'mongoose';

const childSchema = new mongoose.Schema({
    name:{
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
		enum: ["M","F","O"],
	},
	parent:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Parent',
	},
	doctor:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Doctor',
	}
},{timestamps: true});

export const Child = mongoose.model('Child', childSchema);