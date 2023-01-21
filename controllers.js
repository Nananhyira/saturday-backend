const studentModel = require("./studentModel");

const handleGetStudents = (req, res) => {
	studentModel
		.find()
		.then((result) => {
			res.json({ message: "data retrieved", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const handlePostStudent = (req, res) => {
	const { name, email, gender, age, gen } = req.body;
	const newStudent = new studentModel({ name, email, gender, age, gen });
	newStudent
		.save()
		.then((result) => {
			res.json({ message: "student saved successfully", data: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const handleDeleteStudent = (req, res) => {
	const { id } = req.body;
	studentModel
		.findByIdAndRemove(id)
		.then((deleteStudent) => {
			if (deleteStudent) {
				res.json({
					message: "student deleted successfully",
					data: deleteStudent,
				});
			}
			res.json({ message: "student doesn't exist " });
		})
		.catch((e) => {
			console.log(e);
		});
};
const handlePutStudent = (req, res) => {
	const { id, name, email, gender, age, gen } = req.body;
	studentModel
		.findById(id)
		.then((student) => {
			if (student) {
				(student.name = name),
					(student.email = email),
					(student.gender = gender),
					(student.gen = gen),
					(student.age = age);
				student.save();
				res.json({ message: "data updated successfuly" });
			}
			res.json({ message: "the credentials does not match" });
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports = {
	handleGetStudents,
	handleDeleteStudent,
	handlePutStudent,
	handlePostStudent,
};
