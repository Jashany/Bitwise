import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    game_name:{
		type: String,
		required: true,
		unique: true,
	},
	other_details: {
		type: String,
	},
},{timestamps: true});

export const Game = mongoose.model('Game', gameSchema);