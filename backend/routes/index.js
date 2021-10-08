const express = require("express")
const {
  getAllStudents,
  createStudent,
  deleteStudent,
} = require("../controllers/studentController")

const router = express.Router()

router.get("/students", getAllStudents)

router.post("/student", createStudent)

router.delete("/student/delete", deleteStudent)

module.exports = router
