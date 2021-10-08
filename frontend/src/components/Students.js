import React, { useState, useEffect } from "react"
import axios from "axios"

const Students = () => {
  const [students, setStudents] = useState()
  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => setStudents(res.data))
  }, [isDeleted])

  const onDelete = async (rollNo) => {
    const result = await axios.delete(
      `http://localhost:4000/student/delete?rollNo=${rollNo}`
    )
    if (!result) alert("something went wrong")
    else setIsDeleted(true)
  }
  const renderTable = () => {
    return (
      <>
        <h3>list of students</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">roll no</th>
              <th scope="col">class</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.rollNo}>
                <td>{student.name}</td>
                <td>{student.rollNo}</td>
                <td>{student.standard}</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => onDelete(student.rollNo)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }

  return <div>{students?.length ? renderTable() : null}</div>
}

export default Students
