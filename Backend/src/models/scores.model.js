import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
	score_value: {
		type: Number,
		required: true,
	},
	owner:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "parent",
	}
},{timestamps: true});

export const Score = mongoose.model('Score', scoreSchema);