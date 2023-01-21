const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {
	handleGetStudents,
	handleDeleteStudent,
	handlePutStudent,
	handlePostStudent,
} = require("./controllers");

const app = express();

// bodyParser middleware
app.use(bodyParser.json());
// routes
app.get("/", handleGetStudents);
app.post("/student", handlePostStudent);
app.delete("/student", handleDeleteStudent);
app.put("/student", handlePutStudent);
mongoose.set("strictQuery", true);
mongoose
	.connect(
		"mongodb+srv://tom:0PoSXr5frtTzawo7@cluster0.5hrkala.mongodb.net/saturdayGen22?retryWrites=true&w=majority"
	)
	.then(() => {
		app.listen(2026, () => {
			console.log("server is listening on port 2024");
		});
	})
	.catch((err) => {
		console.log(err);
	});
