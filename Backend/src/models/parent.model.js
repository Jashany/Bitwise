import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: true,
    },
	scores: [{
        score: {
            type: Number,
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        }
    }]
});

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
	games: [scoreSchema],
},{timestamps: true});

export const Parent = mongoose.model('Parent', parentSchema);