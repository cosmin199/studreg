const { Schema, model } = require("mongoose")

const StudentSchema = new Schema(
  {
    name: String,
    standard: String,
    rollNo: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
)

const Student = model("Student", StudentSchema)

module.exports = Student
