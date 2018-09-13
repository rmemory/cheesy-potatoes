const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Use async/await to wait for queries
const slug = require('slugs');

// By default, monogodb is strict and requires a schema (not willy nilly)
const storeSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true, // white space trim
		required: 'Please enter a store name' // required is true, string is error messsage
	},
	slug: String,
	description: {
		type: String,
		trim: true
	},
	tags : [String]
});

// Generate the slug automatically
storeSchema.pre('save', function(next) {
	// only generate the slug if the name has changed
	if (!this.isModified('name')){
		next(); // Skip it
		return; // Stop the function here
	}

	// TODO: Need to handle unique store names
	this.slug = slug(this.name);
	next();
});

// Export store so that it can be used in storeController.js
module.exports = mongoose.model('Store', storeSchema);