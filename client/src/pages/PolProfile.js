import React from "react"
import { Card, Container } from "react-bootstrap"
//import { useAuth } from "../contexts/AuthContext"
//import { useHistory } from "react-router-dom"

export default function PolPRofile() {
  //const [error, setError] = useState("")
  //const { currentUser, logout } = useAuth()
  //const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/home")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }

  return (
    
    <>
      <div className=" d-flex my-4 ">
        <Card className=" p-2 w-25 me-4">
          <Card.Body>
            <h2 className="text-center mb-4">Joe {"database"}</h2>
          <img style={{width:"100%"}} src="https://i.imgflip.com/4cis9f.png"/> {"databaseimg"}
          </Card.Body>
        </Card>

        <Card className=" p-2 flex-grow-1">
          <Card.Body>
            <h2 className="text-center mb-4">Info</h2>
            <ul>
            <li><strong>Name:</strong> {"database"}</li>
            <li><strong>Location:</strong> {"database"}</li>
            <li><strong>Party:</strong> {"database"}</li>
            <li><strong>Term:</strong> {"database"}</li>
            <li><strong>Bio:</strong> {"database"}</li>
            </ul>
          </Card.Body>
        </Card>
      </div>

      <Card className="w-100  mb-2">
        <Card.Body>
          <h2 className="text-center mb-4">Stats</h2>

          {"database"}

        </Card.Body>
      </Card>

    </>
  )
}