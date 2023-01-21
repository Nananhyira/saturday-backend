const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
	name: String,
	gender: String,
	age: Number,
	gen: String,
	email: String,
});

const studentModel = mongoose.model("Students", studentSchema);

module.exports = studentModel;
