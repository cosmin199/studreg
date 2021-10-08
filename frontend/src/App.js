import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Student from "./components/Student"
import Students from "./components/Students"

function App() {
  return (
    <div className="container">
      <Student />
      <Students />
    </div>
  )
}

export default App
