import React, { useState } from "react"
import axios from "axios"

const Student = () => {
  const [name, setName] = useState("")
  const [standard, setStandard] = useState("")
  const [rollNo, setRollNo] = useState([])

  const onSubmitHandler = async () => {
    const result = await axios.post("http://localhost:4000/student", {
      name,
      standard,
      rollNo,
    })
    if (!result) alert("something went wrong")
  }

  return (
    <div>
      <form>
        <h3>student registration portal</h3>
        <div className="form-group">
          <label>enter the name of student:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>enter the class of student:</label>
          <input
            type="text"
            onChange={(e) => setStandard(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>enter the rollNo of student:</label>
          <input
            type="text"
            onChange={(e) => setRollNo(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitHandler}
        >
          save
        </button>
      </form>
    </div>
  )
}

export default Student
