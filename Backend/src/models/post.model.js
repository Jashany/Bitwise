import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: {
		type: String,
		required: true
	},
	title:{
		type: String,
		required: true
	},
	owner:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Parent",    
	},
},{timestamps: true});

export const Post = mongoose.model('Post', postSchema);