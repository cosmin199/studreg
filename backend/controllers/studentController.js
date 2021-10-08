const Student = require("../models/Student")

const getAllStudents = async (req, res) => {
  const students = await Student.find()

  res.send(students)
}

const createStudent = async (req, res) => {
  const { name, rollNo, standard } = req.body
  const student = new Student({ name, rollNo, standard })

  const result = await student.save()
  res.send(result)
}

const deleteStudent = async (req, res) => {
  const { rollNo } = req.query
  const result = await Student.deleteOne({ rollNo: +rollNo })
  res.send(result)
}

module.exports = {
  getAllStudents,
  createStudent,
  deleteStudent,
}
